"use client";

import { useRef, useState, type FormEvent } from "react";
import Reveal from "@/components/Reveal";
import { submitContact } from "@/app/actions/contact";

const services = [
  "Desarrollo web",
  "Cartas digitales",
  "Reservas y pedidos",
  "Software a medida",
  "Automatización e IA",
  "Datos e integraciones",
];

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<{
    ok: boolean;
    message: string;
  } | null>(null);

  const sendingRef = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (sendingRef.current) return;

    const form = event.currentTarget;

    // Capturamos los valores antes de deshabilitar los campos.
    const formData = new FormData(form);

    sendingRef.current = true;
    setIsSending(true);
    setFeedback(null);

    try {
      const result = await submitContact(formData);

      setFeedback(result);

      if (result.ok) {
        form.reset();
      }
    } catch {
      setFeedback({
        ok: false,
        message:
          "No pudimos confirmar el resultado del envío. Tus datos siguen en el formulario.",
      });
    } finally {
      sendingRef.current = false;
      setIsSending(false);
    }
  }

  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="contact-section border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:py-32">
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
              onSubmit={handleSubmit}
              aria-label="Consulta sobre un proyecto"
              aria-describedby="contact-help"
              aria-busy={isSending}
              className="glass contact-panel rounded-3xl p-6 md:p-9"
            >
              <div hidden>
                <label htmlFor="contact-website">
                  Deja este campo vacío
                </label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <fieldset disabled={isSending} className="min-w-0 space-y-7">
                <legend className="sr-only">
                  Datos de tu consulta
                </legend>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="contact-label" htmlFor="contact-name">
                      Nombre
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
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      placeholder="nombre@email.com"
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label className="contact-label" htmlFor="contact-phone">
                      Teléfono
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={30}
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label className="contact-label" htmlFor="contact-business">
                      Nombre del negocio
                    </label>
                    <input
                      id="contact-business"
                      name="business"
                      type="text"
                      autoComplete="organization"
                      required
                      maxLength={150}
                      placeholder="Tu marca"
                      className="contact-input"
                    />
                  </div>



                  <div>
                    <label className="contact-label" htmlFor="contact-type">
                      Tipo de negocio
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
                    Puedes elegir varias opciones.
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
                    Cuéntanos sobre tu proyecto
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

                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="glass-button button-primary w-full justify-center font-medium disabled:cursor-wait"
                >
                  {isSending ? "Enviando consulta…" : "Hablemos de tu proyecto"}

                </button>
              </fieldset>

              <div aria-live="polite" aria-atomic="true">
                {feedback && (
                  <p className="mt-5 rounded-xl border border-white/20 p-4 text-sm leading-relaxed text-white/85">
                    {feedback.message}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
