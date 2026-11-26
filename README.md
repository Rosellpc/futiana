# futiana

Sitio web de una agencia tecnológica para el sector gastronómico en Perú.

## Marca y diseño

- Nombre: **futiana**.
- Concepto: **ADN de software. Esencia gastronómica.**
- Estilo: moderno, elegante, minimalista y profesional.
- Interfaz oscura con cristal transparente, bordes sutiles y reflejos neutros.
- Fondo de oficina en el hero. La animación 3D real sigue pendiente.
- Referencias: Suprive para estructura y narrativa; ABC Digital para contacto y footer.
- Adaptar las referencias sin copiar textos, datos empresariales ni condiciones legales.

## Stack

- Next.js con App Router y carpeta `src/`.
- React, TypeScript y Tailwind CSS.
- Motion para animaciones mediante `Reveal`.
- Supabase/PostgreSQL para consultas comerciales.
- Resend para notificaciones por correo.
- Zod para validación y `server-only` para módulos privados.
- Gestor de paquetes: **pnpm**.

## Estructura prevista

Revisar los archivos reales antes de modificar: esta estructura refleja
el desarrollo guiado y puede contener pasos todavía no aplicados.

- `src/app/page.tsx`: página principal.
- `src/app/globals.css`: estilos globales, cristal, formulario y páginas legales.
- `src/components/Navbar.tsx`: navegación por anclas.
- `src/components/BrandVideo.tsx`: video de YouTube cargado al pulsar reproducir.
- `src/components/Reveal.tsx`: animación de entrada con movimiento reducido.
- `src/components/HowWeWork.tsx`: proceso de cinco etapas.
- `src/data/process.ts`: contenido del proceso.
- `src/components/About.tsx`: presentación, principios y origen.
- `src/components/Contact.tsx`: formulario interactivo.
- `src/components/Footer.tsx`: navegación y enlaces legales.
- `src/app/legal/page.tsx`: borradores de términos y privacidad para Perú.
- `src/app/actions/contact.ts`: Server Action del formulario.
- `src/lib/supabase/admin.ts`: cliente privado de Supabase.
- `public/images/futiana-hero.jpg`: fondo del hero y portada del video.
- `public/images/futiana-nosotros.webp`: imagen de Nosotros.

## Página principal

Secciones: Inicio → Soluciones → Cómo trabajamos → Nosotros → Contacto → Footer.

Servicios: desarrollo web, cartas digitales, reservas y pedidos,
software a medida, automatización e IA, datos e integraciones.

Video del hero:
https://www.youtube.com/watch?v=v5VoMAm4Lec

## Formulario: funcionamiento confirmado

El usuario comprobó el guardado en Supabase y la recepción del correo.

1. El navegador envía los datos a `submitContact`.
2. El servidor valida mediante Zod y comprueba un campo trampa para bots.
3. Guarda la consulta en `public.contact_requests`.
4. Intenta enviar una notificación con Resend.
5. Actualiza el estado de la notificación.
6. Confirma el guardado aunque falle el correo.

El destinatario del aviso se configura en el servidor.
El correo del visitante se utiliza como `replyTo`.
Los campos se conservan si no se confirma el guardado.

## Base de datos

Tabla `contact_requests`:

- `id`, `created_at`
- `name`, `email`, `phone`
- `business`, `location`, `business_type`
- `services`, `message`
- `status`: `new`, `contacted`, `closed`
- `notification_status`: `pending`, `accepted`, `failed`
- `notification_id`
- `request_fingerprint`: huella usada para detectar consultas duplicadas.

RLS habilitado. Sin acceso directo para `anon` ni `authenticated`.
El backend utiliza una clave secreta; nunca exponerla al navegador.

`accepted` significa que Resend aceptó el correo, no que se entregó.

## Estado de la protección del formulario

La acción del formulario ya llama a la función RPC `public.submit_contact_request`
con los parámetros `p_payload` y `p_fingerprint`. La migración SQL de esa función
no está incluida en este repositorio y su instalación en Supabase no se ha
verificado desde aquí. El formulario depende de que exista; sin ella, el guardado
falla y el visitante conserva los datos para volver a intentarlo.

La función debe:

- Detectar contenido idéntico durante 10 minutos mediante SHA-256.
- Admitir hasta 3 consultas nuevas por correo en 15 minutos.
- Admitir hasta 30 consultas nuevas globales en 15 minutos.
- Comprobar y guardar dentro de una transacción con advisory lock.
- Conceder permiso de ejecución solo a `service_role`.

Antes de publicar, incorporar la migración revisada al repositorio, aplicarla en
Supabase y comprobar los límites y la deduplicación bajo solicitudes concurrentes.

Estos controles no detienen todas las peticiones ni sustituyen protección
contra bots. El límite global puede afectar a visitantes legítimos.

## Variables de entorno

Crear `.env.local` en la raíz, sin subirlo a Git:

SUPABASE_URL=
SUPABASE_SECRET_KEY=
RESEND_API_KEY=
CONTACT_FROM_EMAIL="Futiana <onboarding@resend.dev>"
CONTACT_TO_EMAIL=

Actualmente se trabaja en desarrollo, sin dominio comprado.
Con el remitente de prueba de Resend, usar como destinatario el correo
asociado a la cuenta de Resend.

No utilizar `NEXT_PUBLIC_` para secretos.
Formspree fue sustituido; `CONTACT_FORM_ENDPOINT` ya no es necesario.

## Comandos

pnpm install
pnpm dev
pnpm exec eslint .
pnpm build

## Pendientes

- Verificar aplicación y pruebas de deduplicación y límites.
- Añadir protección contra bots antes de publicar.
- Implementar reintentos de notificaciones sin duplicar correos.
- Crear panel privado con autenticación y autorización.
- Completar y revisar los borradores legales: titular, domicilio, correo,
  conservación, proveedores, transferencias y consentimiento aplicable.
- Verificar integración del footer y enlaces legales.
- Comprar dominio y verificar remitente de producción en Resend.
- Revisar accesibilidad, móvil, rendimiento y despliegue.

## Instrucciones para el siguiente agente

- El usuario ejecuta los cambios localmente; no asumir acceso a su equipo.
- Revisar código, versiones y esquema reales antes de proponer cambios.
- Distinguir lo confirmado de lo únicamente propuesto.
- Mantener el diseño y explicar los cambios paso a paso en español.
- No inventar datos legales, clientes, métricas ni datos de contacto.
- No publicar borradores legales ni afirmar cumplimiento automático.
- Mantener validación en servidor y guardar antes de notificar.
- No afirmar pruebas o modificaciones que no se hayan realizado.
