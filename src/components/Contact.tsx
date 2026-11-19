import Reveal from "@/components/Reveal";

const services = [
  "Desarrollo web",
  "Cartas digitales",
  "Reservas y pedidos",
  "Software a medida",
  "Automatización e IA",
  "Datos e integraciones",
];

export default function Contact() {
  const endpoint = process.env.CONTACT_FORM_ENDPOINT;

  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal className="min-w-0">
            <p className="section-label">Contacto · futiana</p>

            <h2
              id="contact-title"
              className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
            >
              Tu próximo paso
              <span className="block text-white/60">
                empieza con una conversación.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/75">
              Cuéntanos cómo funciona tu negocio, qué quieres mejorar
              y qué te gustaría construir. Empecemos por entender
              lo que necesitas.
            </p>

            <div className="mt-10 border-t border-white/15 pt-6">
              <p className="text-sm font-medium">
                ADN de software. Esencia gastronómica.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-white/60">
                No necesitas tener una solución definida.
                Puedes empezar por contarnos el problema.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="min-w-0">
            <form
              action={endpoint}
              method="POST"
              aria-label="Consulta sobre un proyecto"
              aria-describedby="contact-help"
              className="glass rounded-3xl p-6 md:p-9"
            >
              <input
                type="hidden"
                name="_subject"
                value="Nueva consulta desde futiana"
              />

              <p id="contact-help" className="mb-7 text-sm text-white/60">
                Los campos con * son obligatorios.
              </p>

              <fieldset disabled={!endpoint} className="min-w-0 space-y-7">
                <legend className="sr-only">
                  Datos de tu consulta
                </legend>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="contact-label" htmlFor="contact-name">
                      Nombre *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={100}
                      placeholder="Tu nombre"
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label className="contact-label" htmlFor="contact-email">
                      Correo electrónico *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      placeholder="nombre@tunegocio.com"
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label className="contact-label" htmlFor="contact-phone">
                      Teléfono — opcional
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={30}
                      placeholder="+51 ..."
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label className="contact-label" htmlFor="contact-business">
                      Nombre del negocio *
                    </label>
                    <input
                      id="contact-business"
                      name="business"
                      type="text"
                      autoComplete="organization"
                      required
                      maxLength={150}
                      placeholder="Tu restaurante o proyecto"
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label className="contact-label" htmlFor="contact-location">
                      Ciudad y país — opcional
                    </label>
                    <input
                      id="contact-location"
                      name="location"
                      type="text"
                      maxLength={150}
                      placeholder="Lima, Perú"
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label className="contact-label" htmlFor="contact-type">
                      Tipo de negocio *
                    </label>
                    <select
                      id="contact-type"
                      name="businessType"
                      required
                      defaultValue=""
                      className="contact-input"
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="restaurante">Restaurante</option>
                      <option value="cafeteria">Cafetería</option>
                      <option value="bar">Bar</option>
                      <option value="cadena">Cadena gastronómica</option>
                      <option value="nuevo">Proyecto por lanzar</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <fieldset>
                  <legend className="text-sm font-medium">
                    ¿Qué te gustaría explorar?
                  </legend>

                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    Puedes elegir varias opciones o explicarlo en tu mensaje.
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {services.map((service) => (
                      <label key={service} className="contact-service">
                        <input
                          type="checkbox"
                          name="services"
                          value={service}
                          className="h-4 w-4 shrink-0 accent-white"
                        />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label className="contact-label" htmlFor="contact-message">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={20}
                    maxLength={3000}
                    rows={5}
                    aria-describedby="message-help"
                    placeholder="¿Qué sucede hoy en tu negocio y qué te gustaría mejorar?"
                    className="contact-input resize-y"
                  />
                  <p
                    id="message-help"
                    className="mt-2 text-xs text-white/50"
                  >
                    Entre 20 y 3000 caracteres.
                  </p>
                </div>

                <p className="text-xs leading-relaxed text-white/60">
                  Comparte únicamente los datos necesarios para conversar
                  sobre tu proyecto. El formulario se procesa mediante
                  Formspree.
                </p>

                <button
                  type="submit"
                  className="glass glass-button w-full justify-center font-medium"
                >
                  Hablemos de tu proyecto
                  <span aria-hidden="true">↗</span>
                </button>
              </fieldset>

              {!endpoint && (
                <p role="status" className="mt-5 text-sm text-white/70">
                  El formulario estará disponible próximamente.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}