"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function HeroBackground() {
  const layer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: layer,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-26%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div ref={layer} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-x-0 top-0 h-[136%] motion-reduce:h-full motion-reduce:transform-none!"
        style={{ y, scale }}
      >
        <Image
          src="/images/futiana-hero.jpg"
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          className="object-cover object-center"
        />
      </motion.div>
    </div>
  );
}
