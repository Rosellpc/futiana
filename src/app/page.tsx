import HeroBackground from "@/components/HeroBackground";
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
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar />
      <main className="site-shell text-white">
      <section id="inicio" className="hero-section relative isolate flex min-h-svh flex-col">
        <HeroBackground />

        <div
          id="contenido"
          className="hero-content mx-auto my-auto grid w-[calc(100%-2rem)] max-w-3xl gap-4 sm:w-[calc(100%-4rem)] lg:max-w-[90rem]"
        >

          <div className="hero-panel glass grid w-full grid-cols-1 rounded-[2rem] p-3 sm:p-6 lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)] lg:gap-x-8 lg:p-8">
            <Reveal className="hero-card glass min-w-0 lg:col-start-1 lg:row-start-2">
              <h1
                className="hero-title max-w-2xl text-5xl font-semibold leading-[1.02]
                          tracking-tight sm:text-6xl xl:text-7xl"
              >
                El futuro empieza con Software en el núcleo de tu empresa.
              </h1>

              <p className="hero-copy mt-7 max-w-xl text-lg leading-relaxed">
                Diseñamos software, experiencias y automatizaciones con modelos de LLMs
                que conectan tu operación y cuidan cada momento del servicio.
              </p>
            </Reveal>

            <BrandVideo />

            <p className="hero-label hero-caption w-full rounded-full text-center uppercase lg:col-start-2 lg:row-start-1">
              Diseño <span>·</span> Desarrollo <span>·</span> Automatización
            </p>

            <a href="#contacto" className="hero-meeting glass-button button-primary mt-4 justify-self-center self-center lg:col-start-2 lg:row-start-3">
              Agendar una reunión
            </a>
          </div>
        </div>
      </section>

      <section
        id="soluciones"
        aria-labelledby="solutions-title"
        className="solutions-section mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:py-32"
      >
        <p className="section-label">Lo que hacemos</p>

        <h2
          id="solutions-title"
          className="section-title mt-4 text-4xl font-semibold tracking-tight md:text-5xl"
        >
          Cada detalle, conectado.
        </h2>

        <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))] gap-5 md:mt-12">
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
