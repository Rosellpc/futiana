import Image from "next/image";
import Navbar from "@/components/Navbar";
import BrandVideo from "@/components/BrandVideo";
import Reveal from "@/components/Reveal";
import HowWeWork from "@/components/HowWeWork";
import About from "@/components/About";
import Contact from "@/components/Contact";

const solutions = [
  {
    number: "01",
    title: "Experiencia digital",
    description:
      "Sitios web, cartas digitales y reservas que conectan tu marca con tus clientes.",
  },
  {
    number: "02",
    title: "Operación conectada",
    description:
      "Software e integraciones diseñados alrededor de la forma en que trabaja tu equipo.",
  },
  {
    number: "03",
    title: "Datos y automatización",
    description:
      "Información clara y menos tareas repetitivas para gestionar mejor tu negocio.",
  },
];

export default function Home() {
  return (
    <main id="inicio" className="bg-neutral-950 text-white">
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>

      <section className="relative isolate min-h-svh">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <Image
            src="/images/futiana.jpeg"
            alt=""
            fill
            sizes="100vw"
            loading="eager"
            className="object-cover object-center"
          />
          <div className="hero-shade absolute inset-0" />
        </div>

        <Navbar />

        <div
          id="contenido"
          className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-10 lg:pt-24"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">

            {/* Columna izquierda: presentación */}
            <Reveal className="min-w-0">
              <p className="mb-7 text-xs uppercase tracking-[0.22em] text-white/75">
                Tecnología con criterio gastronómico
              </p>

              <h1
                className="max-w-2xl text-4xl font-semibold leading-[1.08]
                          tracking-tight sm:text-5xl xl:text-6xl"
              >
                El futuro empieza con un ADN de Software en el núcleo de tu empresa.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">
                Diseñamos software, experiencias y automatizaciones con modelos de LLMs
                que conectan tu operación y cuidan cada momento del servicio.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#soluciones" className="glass glass-button">
                  Explorar soluciones <span aria-hidden="true">↗</span>
                </a>

                <a href="#nosotros" className="glass glass-button">
                  Conocer futiana
                </a>
              </div>
            </Reveal>

            {/* Columna derecha: video */}
            <BrandVideo />
          </div>

          <p className="mt-16 text-xs uppercase tracking-[0.18em] text-white/60">
            Diseño · Desarrollo · Automatización
          </p>
        </div>
      </section>

      <section
        id="soluciones"
        aria-labelledby="solutions-title"
        className="mx-auto max-w-7xl px-6 py-24 md:px-10"
      >
        <p className="section-label">Soluciones a tu medida</p>

        <h2
          id="solutions-title"
          className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl"
        >
          Cada detalle, conectado.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <Reveal
              key={solution.number}
              delay={index * 0.1}
              className="h-full min-w-0"
            >
              <article
                className="h-full rounded-2xl border border-white/15
                          bg-white/5 p-8"
              >
                <p className="text-sm text-white/50">
                  {solution.number}
                </p>

                <h3 className="mt-6 text-2xl font-medium">
                  {solution.title}
                </h3>

                <p className="mt-4 leading-relaxed text-white/70">
                  {solution.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <HowWeWork />

      <About />

      <Contact />


      <footer className="border-t border-white/10 px-6 py-8">
        <p className="mx-auto max-w-7xl text-sm text-white/50">
          futiana · Tecnología para la gastronomía
        </p>
      </footer>
    </main>
  );
}