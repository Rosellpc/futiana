import Image from "next/image";
import Reveal from "@/components/Reveal";

const principles = [
  {
    number: "01",
    title: "Pensamos desde el servicio",
    description:
      "Partimos de lo que ocurre en cocina, sala y administración para diseñar herramientas que tengan sentido en el día a día.",
  },
  {
    number: "02",
    title: "Trabajamos con claridad",
    description:
      "Explicamos las decisiones, definimos prioridades y compartimos los avances para que sepas qué estamos construyendo y por qué.",
  },
  {
    number: "03",
    title: "Innovamos con propósito",
    description:
      "Elegimos cada tecnología por su utilidad: simplificar una tarea, conectar información o mejorar una experiencia.",
  },
];

export default function About() {
    return (
        <section
            id="nosotros"
            aria-labelledby="about-title"
            className="about-section border-t border-white/10"
        >
            <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:py-32">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <Reveal className="min-w-0">
                        <p className="section-label">Nosotros · Futiana</p>

                        <h2
                            id="about-title"
                            className="section-title mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
                        >
                            La tecnología empieza
                            <span className="block text-white/60">
                                por entender la acción humana.
                            </span>
                        </h2>

                        <div className="mt-7 space-y-5 text-base leading-relaxed text-white/75 md:text-lg">
                            <p>
                                Futiana nace para implementar optimización en el sector de la gastronomía, sirviéndose del 
                                desarrollo de software e integrando IA en la era exponencial.
                            </p>

                            <p>
                                Nos interesa aplicar un ADN de software al núcleo de tu negocio para un crecimiento sostenido con infinitas posibilidades de mejora.
                            </p>

                            <p>
                                Nuestro propósito es convertir el producto y servicio en información útil y de fácil acceso para el consumidor en el saturado mercado, y así cubrir los requerimientos y apetencias de los consumidores.
                            </p>

                        </div>

                        <a href="#como-trabajamos" className="glass glass-button mt-8 inline-flex text-sm font-medium">Conoce nuestro proceso</a>
                    </Reveal>

                    <Reveal delay={0.1} className="min-w-0">
                        <figure>
                            <div className="relative isolate aspect-[4/5] overflow-hidden rounded-3xl border border-white/15">
                                <Image
                                    src="/images/futiana-nosotros.webp"
                                    alt="Interior de una oficina de inspiración con mesas de madera y divisiones de cristal."
                                    fill
                                    sizes="(min-width: 1280px) 560px, (min-width: 1024px) 50vw, 100vw"
                                    className="object-cover"
                                />

                                <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                                />

                                <div className="absolute inset-x-5 bottom-5 md:inset-x-7 md:bottom-7">
                                    <div className="glass about-photo-card rounded-2xl p-5 md:p-6">
                                        <p className="text-xs uppercase tracking-[0.2em] text-white/70">Nuestra perspectiva</p>

                                        <p className="mt-3 text-2xl font-medium leading-snug tracking-tight">Criterio de innovación.
                                        </p>
                                        <p className="text-xs mt-3 text-white/70">Empujando fronteras de mercado</p>
                                       
                                    </div>
                                </div>
                            
                            </div>

                            <figcaption className="mt-3 px-1 text-xs leading-relaxed text-white/50">
                                Imagen conceptual de la identidad de Futiana.
                            </figcaption>
                        </figure>
                    </Reveal>
                </div>

                <div className="mt-20">
                    <Reveal>
                        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                            Lo que guía cada decisión
                        </h3>
                    </Reveal>

                    <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))] gap-5">
                        {principles.map((principle, index) => (
                            <Reveal
                                key={principle.number}
                                delay={index * 0.08}
                                className="h-full min-w-0"
                            >
                                <article className="about-principle h-full rounded-2xl p-7">
                                    <p className="text-xs tracking-[0.18em] text-white/50">
                                        {principle.number}
                                    </p>

                                    <h4 className="mt-5 text-xl font-medium tracking-tight">
                                        {principle.title}
                                    </h4>

                                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                                        {principle.description}
                                    </p>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <Reveal className="mt-16">
                    <div className="grid gap-6 border-t border-white/15 pt-10 md:grid-cols-[1fr_2fr] md:gap-12">
                        <div>
                            <p className="section-label">Nuestro origen</p>

                            <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                                El software entre
                                <br />
                                tu producto y servicio
                            </h3>
                        </div>

                        <div>
                            <p className="max-w-2xl text-lg leading-relaxed text-white/75">
                                Futiana surge de una inquietud: cómo aplicar ADN de software a las tareas para optimizar tu sistema de operación durante la experiencia inmersiva de tu marca, mostrando todo el potencial e identidad que quieres transmitir a tu cliente.
                            </p>

                            <a href="#inicio" className="mt-6 inline-flex items-center gap-2 text-sm text-white/85 underline underline-offset-4 hover:text-white">
                                Ver la presentación de Futiana
                            </a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
