export default function Navbar() {
  return (
    <header className="relative z-10 px-5 pt-5 md:px-10 md:pt-7">
      <nav
        aria-label="Navegación principal"
        className="glass mx-auto flex max-w-7xl flex-wrap items-center
                   justify-between gap-4 rounded-2xl px-5 py-4 md:px-7"
      >
        <a
          href="#inicio"
          aria-label="Futiana — inicio"
          className="brand-wordmark text-3xl font-semibold tracking-tight"
        >
          futiana
        </a>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
          <a className="nav-link" href="#soluciones">
            Soluciones
          </a>

          <a className="nav-link" href="#como-trabajamos">
            Cómo trabajamos
          </a>

          <a className="nav-link" href="#nosotros">
            Nosotros
          </a>
        </div>

        <a className="nav-cta hidden sm:inline-flex" href="#contacto">
          Hablemos
        </a>
      </nav>
    </header>
  );
}
