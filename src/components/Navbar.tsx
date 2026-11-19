export default function Navbar() {
  return (
    <header className="relative z-10 px-5 pt-5 md:px-10 md:pt-8">
      <nav
        aria-label="Navegación principal"
        className="glass mx-auto flex max-w-7xl flex-wrap items-center
                   justify-between gap-4 rounded-2xl px-6 py-5"
      >
        <a
          href="#inicio"
          aria-label="Futiana — inicio"
          className="text-3xl font-semibold tracking-tight"
        >
          futiana
        </a>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
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
      </nav>
    </header>
  );
}