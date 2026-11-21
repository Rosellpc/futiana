import Image from "next/image";
import Navbar from "@/components/Navbar";
import BrandVideo from "@/components/BrandVideo";
import Reveal from "@/components/Reveal";
import HowWeWork from "@/components/HowWeWork";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
    <>
      <main id="inicio" className="site-shell text-white">
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>

      <section className="hero-section relative isolate min-h-svh">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <Image
            src="/images/futiana.png"
            alt=""
            fill
            sizes="100vw"
            loading="eager"
            className="object-cover object-center"
          />
          <div className="hero-shade absolute inset-0" />
          <div className="hero-glow absolute inset-0" />
        </div>

        <Navbar />

        <div
          id="contenido"
          className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-10 lg:pt-24"
        >
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

            {/* Columna izquierda: presentación */}
            <Reveal className="min-w-0">
              <p className="hero-kicker mb-7 text-xs uppercase tracking-[0.22em]">
                Tecnología para la gastronomía
              </p>

              <h1
                className="hero-title max-w-2xl text-5xl font-semibold leading-[1.02]
                          tracking-tight sm:text-6xl xl:text-7xl"
              >
                El futuro empieza con un ADN de Software en el núcleo de tu empresa.
              </h1>

              <p className="hero-copy mt-7 max-w-xl text-lg leading-relaxed text-white/80">
                Diseñamos software, experiencias y automatizaciones con modelos de LLMs
                que conectan tu operación y cuidan cada momento del servicio.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                  <a href="#soluciones" className="glass-button button-primary">
                    Explorar soluciones
                </a>

                <a href="#nosotros" className="glass-button button-secondary">
                  Conocer futiana
                </a>
              </div>
            </Reveal>

            {/* Columna derecha: video */}
            <BrandVideo />
          </div>

          <p className="hero-caption mt-16 text-xs uppercase tracking-[0.18em]">
            Diseño <span>·</span> Desarrollo <span>·</span> Automatización
          </p>
        </div>
      </section>

      <section
        id="soluciones"
        aria-labelledby="solutions-title"
        className="solutions-section mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32"
      >
        <p className="section-label">Lo que hacemos</p>

        <h2
          id="solutions-title"
          className="section-title mt-4 text-4xl font-semibold tracking-tight md:text-5xl"
        >
          Cada detalle, conectado.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <Reveal
              key={solution.number}
              delay={index * 0.1}
              className="h-full min-w-0"
            >
              <article className="solution-card h-full rounded-2xl p-8">
                <span className="solution-mark" aria-hidden="true" />

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
      </main>
      <Footer />
    </>

  );
}
