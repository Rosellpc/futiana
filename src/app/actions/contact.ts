"use server";

import { z } from "zod";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { createHash } from "node:crypto";


const serviceSchema = z.enum([
  "Desarrollo web",
  "Cartas digitales",
  "Reservas y pedidos",
  "Software a medida",
  "Automatización e IA",
  "Datos e integraciones",
]);

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(30),
  business: z.string().trim().min(1).max(150),
  location: z.string().trim().max(150),
  businessType: z.enum([
    "restaurante",
    "cafeteria",
    "bar",
    "cadena",
    "nuevo",
    "otro",
  ]),
  services: z.array(serviceSchema).max(6),
  message: z.string().trim().min(20).max(3000),
});

const submissionResultSchema = z.discriminatedUnion("outcome", [
  z.object({
    outcome: z.literal("created"),
    id: z.string().uuid(),
  }),
  z.object({
    outcome: z.literal("duplicate"),
  }),
  z.object({
    outcome: z.literal("email_limit"),
  }),
  z.object({
    outcome: z.literal("global_limit"),
  }),
]);

type ContactResult = {
  ok: boolean;
  message: string;
};

export async function submitContact(
  formData: FormData
): Promise<ContactResult> {
  // Campo que una persona debe dejar vacío.
  if (formData.get("website")) {
    return {
      ok: false,
      message: "No pudimos procesar la solicitud.",
    };
  }

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") ?? "",
    business: formData.get("business"),
    location: formData.get("location") ?? "",
    businessType: formData.get("businessType"),
    services: formData.getAll("services"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      ok: false,
      message:
        "Revisa los campos obligatorios, el correo y la longitud del mensaje.",
    };
  }

    const values = {
    ...parsed.data,
    email: parsed.data.email.toLowerCase(),
    services: [...new Set(parsed.data.services)].sort(),
    };

    // Una representación estable de los datos.
    // El orden de selección de servicios no cambia la huella.
    const fingerprint = createHash("sha256")
    .update(
        JSON.stringify([
        values.name,
        values.email,
        values.phone,
        values.business,
        values.location,
        values.businessType,
        values.services,
        values.message,
        ])
    )
    .digest("hex");

  let supabase: ReturnType<typeof getSupabaseAdmin>;

  try {
    supabase = getSupabaseAdmin();
  } catch {
    console.error("[contact] Falta configuración de Supabase.");

    return {
      ok: false,
      message: "El formulario no está disponible en este momento.",
    };
  }

let requestId: string;

try {
  const { data, error } = await supabase.rpc(
    "submit_contact_request",
    {
      p_payload: values,
      p_fingerprint: fingerprint,
    }
  );

  if (error) {
    console.error("[contact] Error de guardado:", error.code);

    return {
      ok: false,
      message:
        "No pudimos confirmar el guardado. Tus datos siguen en el formulario.",
    };
  }

  const result = submissionResultSchema.safeParse(data);

  if (!result.success) {
    console.error("[contact] Respuesta inesperada del guardado.");

    return {
      ok: false,
      message:
        "No pudimos confirmar el resultado. Inténtalo nuevamente.",
    };
  }

  if (result.data.outcome === "duplicate") {
    // Finalizamos aquí: no se vuelve a enviar el correo.
    return {
      ok: true,
      message:
        "Tu consulta ya está registrada. No necesitas enviarla nuevamente.",
    };
  }

  if (result.data.outcome === "email_limit") {
    return {
      ok: false,
      message:
        "Alcanzaste el límite de consultas recientes. Espera 15 minutos antes de enviar otra.",
    };
  }

  if (result.data.outcome === "global_limit") {
    return {
      ok: false,
      message:
        "Estamos recibiendo muchas consultas. Inténtalo dentro de 15 minutos.",
    };
  }

  requestId = result.data.id;
} catch {
  console.error("[contact] Falló la conexión durante el guardado.");

  return {
    ok: false,
    message:
      "No pudimos confirmar el guardado. Conservamos tus datos para que puedas volver a intentarlo.",
  };
}

  // Después intentamos enviar la notificación.
  let notificationStatus: "accepted" | "failed" = "failed";
  let notificationId: string | null = null;

  try {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !to) {
      throw new Error("Falta configuración de correo.");
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: values.email,
      subject: "Nueva consulta desde futiana",
      text: [
        `Consulta: ${requestId}`,
        "",
        `Nombre: ${values.name}`,
        `Correo: ${values.email}`,
        `Teléfono: ${values.phone || "No indicado"}`,
        `Negocio: ${values.business}`,
        `Ubicación: ${values.location || "No indicada"}`,
        `Tipo: ${values.businessType}`,
        `Servicios: ${values.services.join(", ") || "No indicados"}`,
        "",
        "Mensaje:",
        values.message,
      ].join("\n"),
    });

    if (error || !data) {
      console.error("[contact] Resend rechazó el envío:", requestId);
    } else {
      notificationStatus = "accepted";
      notificationId = data.id;
    }
  } catch {
    console.error("[contact] Falló la notificación:", requestId);
  }

  // Un fallo aquí tampoco elimina la consulta.
  try {
    const { error } = await supabase
      .from("contact_requests")
      .update({
        notification_status: notificationStatus,
        notification_id: notificationId,
      })
      .eq("id", requestId);

    if (error) {
      console.error(
        "[contact] No se actualizó el estado del correo:",
        requestId
      );
    }
  } catch {
    console.error(
      "[contact] Falló la actualización de la notificación:",
      requestId
    );
  }

  return {
    ok: true,
    message:
      "Recibimos tu consulta. Gracias por contarnos tu proyecto.",
  };
}