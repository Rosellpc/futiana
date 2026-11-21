import Image from "next/image";

export default function Navbar() {
  return (
    <header className="relative z-10 px-5 pt-5 md:px-10 md:pt-7">
      <nav
        aria-label="Navegación principal"
        className="navbar-glass mx-auto flex max-w-7xl flex-wrap items-center
                   justify-between gap-4 rounded-3xl px-5 py-4 md:px-7"
      >
        <a
          href="#inicio"
          aria-label="Futiana — inicio"
          className="inline-flex min-h-11 shrink-0 items-center"
        >
          <Image
            src="/brand/Black%20Futiana-Logo.png"
            alt=""
            width={180}
            height={60}
            priority
            className="h-9 w-[108px] object-contain"
          />
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
