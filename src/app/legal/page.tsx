import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Información legal",
  description:
    "Términos de uso y aviso de privacidad de futiana.",
  // Mantener mientras el documento sea un borrador.
  robots: {
    index: false,
    follow: false,
  },
};

export default function LegalPage() {
  return (
    <>
      <main className="min-h-screen bg-neutral-950 px-6 py-16 text-white md:px-10">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="text-sm text-white/70 underline underline-offset-4 hover:text-white"
          >
            ← Volver a futiana
          </Link>

          <header className="mt-10">
            <p className="section-label">Información legal · Perú</p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Términos y privacidad.
            </h1>

            <p className="mt-5 text-sm text-white/60">
              Versión de trabajo: 19 de noviembre de 2026.
            </p>

            <div className="mt-6 rounded-2xl border border-white/20 p-5 text-sm leading-relaxed text-white/75">
              Borrador para desarrollo. Los campos entre corchetes
              deben completarse y las condiciones deben revisarse
              antes de publicar este documento.
            </div>
          </header>

          <nav
            aria-label="Índice legal"
            className="mt-8 flex flex-wrap gap-5 text-sm"
          >
            <a href="#terminos" className="underline underline-offset-4">
              Términos y condiciones
            </a>
            <a href="#privacidad" className="underline underline-offset-4">
              Aviso de privacidad
            </a>
          </nav>

          <div className="legal-copy">
            <section id="terminos" aria-labelledby="terms-title">
              <h2 id="terms-title">Términos y condiciones de uso</h2>

              <h3>1. Identificación del titular</h3>
              <p>
                Este sitio presenta los servicios de futiana, marca
                utilizada por [NOMBRE COMPLETO O RAZÓN SOCIAL],
                con [RUC, SI CORRESPONDE], domicilio en
                [DOMICILIO DEL TITULAR, PERÚ] y correo de contacto
                [CORREO PÚBLICO DE CONTACTO].
              </p>

              <h3>2. Finalidad del sitio</h3>
              <p>
                El sitio proporciona información sobre servicios de
                diseño, desarrollo de software, automatización e
                integración de tecnología para negocios gastronómicos.
                El formulario permite realizar consultas y solicitar
                propuestas.
              </p>

              <h3>3. Consultas y contratación</h3>
              <p>
                Enviar una consulta no genera una contratación ni una
                obligación de pago. El alcance, los entregables, los
                plazos, el precio, el soporte y las condiciones de cada
                proyecto se establecerán en una propuesta o contrato
                específico aceptado por las partes.
              </p>

              <h3>4. Uso del sitio</h3>
              <p>
                El usuario debe utilizar el sitio de forma lícita y
                proporcionar información pertinente para su consulta.
                No está permitido intentar acceder sin autorización
                a sistemas o datos, introducir contenido malicioso
                ni interferir con el funcionamiento del sitio.
              </p>

              <h3>5. Contenidos y propiedad intelectual</h3>
              <p>
                Los contenidos propios de futiana y los materiales
                de terceros están sujetos a los derechos de sus
                respectivos titulares. Su disponibilidad en este
                sitio no implica una cesión de derechos.
                La titularidad y las licencias de los entregables
                de cada proyecto se regularán en su contrato.
              </p>

              <h3>6. Información y servicios externos</h3>
              <p>
                Las descripciones del sitio son generales y no
                garantizan resultados económicos determinados.
                Los enlaces y contenidos de terceros, incluidos
                los videos, pueden estar sujetos a sus propias
                condiciones y políticas.
              </p>

              <h3>7. Disponibilidad y responsabilidad</h3>
              <p>
                El sitio puede experimentar interrupciones por
                mantenimiento o incidencias técnicas. Esta disposición
                no excluye las responsabilidades que correspondan al
                titular ni limita los derechos reconocidos por normas
                imperativas.
              </p>

              <h3>8. Legislación y cambios</h3>
              <p>
                Estos términos se interpretan conforme a la legislación
                peruana, respetando los derechos y mecanismos de
                protección que resulten aplicables. Sus actualizaciones
                se publicarán con una fecha de revisión y no modificarán
                por sí solas contratos ya celebrados.
              </p>
            </section>

            <section id="privacidad" aria-labelledby="privacy-title">
              <h2 id="privacy-title">Aviso de privacidad</h2>

              <h3>1. Responsable del tratamiento</h3>
              <p>
                [NOMBRE COMPLETO O RAZÓN SOCIAL], titular de la marca
                futiana, con domicilio en [DOMICILIO DEL TITULAR],
                es responsable del tratamiento descrito en este aviso.
                Puedes contactarlo en [CORREO PARA PRIVACIDAD].
              </p>
              <p>
                Marco normativo: Ley N.º 29733, Ley de Protección de
                Datos Personales, y su Reglamento aprobado por
                Decreto Supremo N.º 016-2024-JUS.
              </p>

              <h3>2. Datos solicitados</h3>
              <p>
                El formulario solicita nombre, correo electrónico,
                nombre del negocio, tipo de negocio y descripción
                del proyecto. El teléfono, la ubicación y los
                servicios de interés son opcionales.
              </p>
              <p>
                Los campos obligatorios permiten gestionar la consulta.
                Si no se proporcionan, no será posible enviarla mediante
                el formulario. No incluyas datos sensibles ni información
                personal de terceros que no sea necesaria.
              </p>

              <h3>3. Finalidades y fundamento</h3>
              <p>
                Los datos se utilizarán para responder consultas,
                comprender las necesidades del proyecto, preparar
                propuestas solicitadas y dar seguimiento a esa
                comunicación. También se realizarán controles para
                detectar consultas repetidas y limitar envíos abusivos.
              </p>
              <p>
                [CONFIRMAR Y DOCUMENTAR LA BASE LEGAL APLICABLE A CADA
                FINALIDAD Y, CUANDO CORRESPONDA, EL MECANISMO DE
                CONSENTIMIENTO PREVIO.]
              </p>
              <p>
                El envío de una consulta no constituye autorización
                para recibir campañas publicitarias. Cualquier uso
                promocional adicional deberá contar con la habilitación
                que corresponda y un mecanismo independiente.
              </p>

              <h3>4. Almacenamiento y proveedores</h3>
              <p>
                Las consultas se almacenan en Supabase. Resend se
                utiliza para enviar una notificación al correo
                administrado por futiana. Según la implementación
                actual, esa notificación contiene los datos de la
                consulta y también queda almacenada en el servicio
                de correo receptor.
              </p>
              <p>
                Banco de datos: [DENOMINACIÓN Y DATOS DE INSCRIPCIÓN].
                Proveedores adicionales: [ALOJAMIENTO WEB Y SERVICIO
                DE CORREO RECEPTOR].
              </p>

              <h3>5. Tratamiento fuera del Perú</h3>
              <p>
                [IDENTIFICAR LAS ENTIDADES RECEPTORAS, LOS PAÍSES,
                LAS FINALIDADES Y LAS GARANTÍAS APLICABLES A LOS
                FLUJOS TRANSFRONTERIZOS, SEGÚN LA REGIÓN CONTRATADA
                Y LOS ACUERDOS DE LOS PROVEEDORES.]
              </p>

              <h3>6. Plazo de conservación</h3>
              <p>
                [ESTABLECER EL PLAZO O CRITERIO DE CONSERVACIÓN DE
                CONSULTAS SIN CONTRATACIÓN, CONTADO DESDE EL ÚLTIMO
                CONTACTO, Y LOS PLAZOS APLICABLES SI SE CONTRATA.]
              </p>
              <p>
                La política de conservación debe contemplar la base
                de datos, las notificaciones por correo y las copias
                de respaldo, así como los supuestos de conservación
                exigidos por ley.
              </p>

              <h3>7. Derechos y solicitudes</h3>
              <p>
                Puedes solicitar información sobre el tratamiento
                y ejercer los derechos de acceso, rectificación,
                cancelación y oposición que correspondan, así como
                revocar tu consentimiento cuando sea aplicable,
                escribiendo a [CORREO PARA PRIVACIDAD].
              </p>
              <p>
                Indica tu solicitud y un medio de respuesta.
                Se podrá solicitar la información estrictamente
                necesaria para verificar tu identidad. Las solicitudes
                se atenderán dentro de los plazos legales aplicables.
                También puedes acudir a la Autoridad Nacional de
                Protección de Datos Personales.
              </p>

              <h3>8. Videos y tecnologías de terceros</h3>
              <p>
                El sitio incorpora un video de YouTube que se carga
                cuando el visitante activa el reproductor. Al hacerlo,
                el navegador se conecta con el proveedor, que puede
                tratar información técnica conforme a sus políticas.
              </p>
              <p>
                [COMPLETAR EL INVENTARIO REAL DE COOKIES, ANALÍTICA
                Y OTRAS TECNOLOGÍAS, JUNTO CON SUS FINALIDADES,
                DURACIONES Y OPCIONES DE CONTROL.]
              </p>

              <h3>9. Seguridad y actualizaciones</h3>
              <p>
                [DESCRIBIR LAS MEDIDAS DE SEGURIDAD EFECTIVAMENTE
                IMPLEMENTADAS Y EL PROCEDIMIENTO DE ATENCIÓN
                DE INCIDENTES, SIN EXPONER INFORMACIÓN SENSIBLE.]
              </p>
              <p>
                Las modificaciones de este aviso se publicarán
                indicando su fecha de actualización. Cuando un cambio
                requiera información adicional o nuevo consentimiento,
                se aplicará el procedimiento correspondiente antes
                del nuevo tratamiento.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
