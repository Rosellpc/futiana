import Link from "next/link";
import Image from "next/image";
import CurrentYear from "@/components/CurrentYear";

const navigation = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Soluciones", href: "/#soluciones" },
  { label: "Cómo trabajamos", href: "/#como-trabajamos" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link
              href="/#inicio"
              aria-label="Futiana — inicio"
              className="inline-flex items-center"
            >
              <Image
                src="/brand/iconp.png"
                alt=""
                width={240}
                height={80}
                className="h-14 w-42 object-contain object-left"
              />
            </Link>

            <p className="mt-5 max-w-sm text-base leading-relaxed text-white/75">
              ADN de software.
              <br />
              Esencia gastronómica.
            </p>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              Diseño, desarrollo y automatización para conectar
              la operación y la experiencia de tu negocio.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
              Explora
            </h2>

            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 underline-offset-4 hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
              Conversemos
            </h2>

            <p className="mt-5 text-sm text-white/75">
              Perú
            </p>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">
              Cuéntanos qué quieres mejorar y exploremos juntos
              el siguiente paso para tu negocio.
            </p>

            <Link
              href="/#contacto"
              className="glass glass-button mt-5 inline-flex text-sm"
            >
              Hablemos de tu proyecto
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs leading-relaxed text-white/50">
            © <CurrentYear /> futiana.
            Todos los derechos reservados.
          </p>

          <nav
            aria-label="Información legal"
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            <Link
              href="/legal#terminos"
              className="text-xs text-white/65 underline-offset-4 hover:text-white hover:underline"
            >
              Términos y condiciones
            </Link>

            <Link
              href="/legal#privacidad"
              className="text-xs text-white/65 underline-offset-4 hover:text-white hover:underline"
            >
              Aviso de privacidad
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
