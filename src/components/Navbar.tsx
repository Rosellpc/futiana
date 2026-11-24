"use client";

import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const navFont = DM_Sans({ subsets: ["latin"], preload: false });

const contact = { id: "contacto", label: "Hablemos", path: "M21 11a8 8 0 0 1-8 8H8l-5 3 1.3-5.5A8 8 0 0 1 11 3h2a8 8 0 0 1 8 8Z" };
const items = [
  { id: "inicio", label: "Inicio", path: "m3 10 9-7 9 7 M5 9v12h5v-7h4v7h5V9" },
  { id: "soluciones", label: "Soluciones", path: "m3 9 9-5 9 5-9 5-9-5Zm0 6 9 5 9-5" },
  contact,
  { id: "como-trabajamos", label: "Proceso", path: "M7 5.5h8.5a3.25 3.25 0 0 1 0 6.5h-7a3.25 3.25 0 0 0 0 6.5H17 M7 5.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0Z M21 18.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0Z" },
  { id: "nosotros", label: "Nosotros", path: "M12 8a3 3 0 1 1-6 0 3 3 0 1 1 6 0Z M3 19a6 6 0 0 1 12 0 M16 5a3 3 0 0 1 0 6 M17 14a5.5 5.5 0 0 1 4 5" },
];

const desktopItems = [...items.filter((item) => item !== contact), contact];

export default function Navbar() {
  const [active, setActive] = useState("inicio");
  const destination = useRef<string | null>(null);

  useEffect(() => {
    const sections = items.map(({ id }) => document.getElementById(id));
    let observer: IntersectionObserver | undefined;

    function updateLocation() {
      const line = Math.floor(window.innerHeight / 3);
      const current = sections.find((section) => {
        const rect = section?.getBoundingClientRect();
        return rect && rect.top <= line + 1 && rect.bottom > line;
      });
      // Al navegar por ancla, las secciones intermedias pasan por el visor.
      if (destination.current && destination.current !== current?.id) return;
      destination.current = null;
      setActive(current?.id ?? "");
    }

    function resumeTracking() {
      destination.current = null;
      updateLocation();
    }

    function observeSections() {
      observer?.disconnect();
      // La sección que cruza el tercio superior marca la ubicación de lectura.
      const line = Math.floor(window.innerHeight / 3);
      const bottom = window.innerHeight - line - 1;
      observer = new IntersectionObserver(updateLocation, { rootMargin: `-${line}px 0px -${bottom}px 0px` });
      sections.forEach((section) => { if (section) observer?.observe(section); });
    }

    observeSections();
    document.addEventListener("scrollend", resumeTracking);
    document.addEventListener("touchstart", resumeTracking, { passive: true });
    document.addEventListener("wheel", resumeTracking, { passive: true });
    window.addEventListener("popstate", resumeTracking);
    window.addEventListener("resize", observeSections);
    return () => {
      document.removeEventListener("scrollend", resumeTracking);
      document.removeEventListener("touchstart", resumeTracking);
      document.removeEventListener("wheel", resumeTracking);
      window.removeEventListener("popstate", resumeTracking);
      window.removeEventListener("resize", observeSections);
      observer?.disconnect();
    };
  }, []);

  function renderLinks(links: typeof items, desktop = false) {
    return links.map(({ id, label, path }) => (
        <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}
          aria-label={id === "contacto" ? label : desktop && id === "inicio" ? "Futiana — inicio" : undefined}
          onClick={(event) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            if (active !== id) destination.current = id;
            setActive(id);
          }}
          className={id === "contacto" ? "dock-contact" : id === "inicio" ? "dock-home" : "dock-section-link"}>
          {desktop && id === "inicio" && (
            <Image src="/brand/Black%20Futiana-Logo.png" alt="" width={108} height={36}
              className="h-9 w-[108px] object-contain" />
          )}
          {(!desktop || id !== "inicio") && (
            <span className="dock-icon">
              <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22" fill="none"
                stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d={path} />
              </svg>
            </span>
          )}
          {id !== "contacto" && !(desktop && id === "inicio") && (
            <span className="dock-label">{desktop && id === "como-trabajamos" ? "Procesos" : label}</span>
          )}
        </a>
    ));
  }

  return (
    <nav aria-label="Navegación principal" className="site-nav glass">
      <div className="dock-mobile-links">{renderLinks(items)}</div>
      <div className={`dock-desktop-links ${navFont.className}`}>{renderLinks(desktopItems, true)}</div>
    </nav>
  );
}
