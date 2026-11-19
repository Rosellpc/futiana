"use client";

import { useEffect, useRef, useState } from "react";
import { processSteps } from "@/data/process";

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = listRef.current;

    if (!list) return;

    const cards = Array.from(
      list.querySelectorAll<HTMLElement>("[data-process-step]")
    );

    let frameId: number | null = null;

    const updateActiveStep = () => {
      frameId = null;

      // La etapa más cercana al centro de la pantalla se destaca.
      const viewportCenter = window.innerHeight * 0.5;

      let nearestIndex = 0;
      let nearestDistance = Infinity;

      cards.forEach((card, index) => {
        const bounds = card.getBoundingClientRect();
        const cardCenter = bounds.top + bounds.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActiveStep(nearestIndex);
    };

    const scheduleUpdate = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(updateActiveStep);
    };

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    cards.forEach((card) => resizeObserver.observe(card));

    scheduleUpdate();

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      resizeObserver.disconnect();

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const currentStep = processSteps[activeStep];

  return (
    <section
      id="como-trabajamos"
      aria-labelledby="process-title"
      className="border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
        <header className="max-w-3xl">
          <p className="section-label">Cómo trabajamos</p>

          <h2
            id="process-title"
            className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
          >
            Primero entendemos tu restaurante.
            <span className="block text-white/60">
              Después diseñamos su siguiente paso.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            La tecnología empieza por escuchar. Conectamos las
            necesidades de tu negocio con soluciones que tienen sentido
            para tu equipo y tus clientes.
          </p>
        </header>

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
          {/* Indicador visual: las etapas también aparecen en la lista. */}
          <aside
            aria-hidden="true"
            className="sticky top-28 hidden text-center lg:block"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              Nuestro proceso
            </p>

            <p className="mt-5 text-[140px] font-semibold leading-none tracking-tighter tabular-nums">
              {currentStep.number}
            </p>

            <p className="mt-4 text-xl font-medium">
              {currentStep.title}
            </p>

            <div className="mt-8 flex justify-center gap-2">
              {processSteps.map((step, index) => (
                <span
                  key={step.number}
                  className={`h-1 w-8 rounded-full transition-colors motion-reduce:transition-none ${
                    index === activeStep ? "bg-white" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </aside>

          <ol
            ref={listRef}
            role="list"
            className="m-0 min-w-0 list-none space-y-5 p-0"
          >
            {processSteps.map((step, index) => (
              <li
                key={step.number}
                data-process-step
                className="min-w-0"
              >
                <article
                  aria-labelledby={`process-step-${step.number}`}
                  className={`process-card rounded-3xl p-7 md:p-10 ${
                    index === activeStep
                      ? "process-card--active"
                      : ""
                  }`}
                >
                  <p className="text-sm tracking-[0.15em] text-white/60">
                    {step.number}
                  </p>

                  <h3
                    id={`process-step-${step.number}`}
                    className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl"
                  >
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-2xl leading-relaxed text-white/75">
                    {step.description}
                  </p>

                  <div className="mt-7 border-t border-white/10 pt-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                      Qué obtienes
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-white/85">
                      {step.result}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}