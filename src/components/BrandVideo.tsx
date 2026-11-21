"use client";

import Image from "next/image";
import { useState } from "react";

const VIDEO_ID = "v5VoMAm4Lec";

export default function BrandVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <figure className="relative aspect-video w-full min-w-0 max-w-[44rem] overflow-hidden bg-black lg:w-[88%]">
          {isPlaying ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&playsinline=1&hl=es`}
              title="Presentación de futiana"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full border-0"
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label="Reproducir la presentación de futiana en YouTube"
              className="group absolute inset-0 flex w-full cursor-pointer
                         items-center justify-center
                         focus-visible:outline-2 focus-visible:outline-white
                         focus-visible:outline-offset-[-6px]"
            >
              <Image
                src="/images/futiana.png"
                alt=""
                fill
                sizes="(min-width: 1600px) 704px, (min-width: 1024px) 44vw, (min-width: 784px) 704px, 100vw"
                className="object-cover"
              />

              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20
                           transition-colors group-hover:from-black/65
                           motion-reduce:transition-none"
              />

              <span className="relative flex flex-col items-center gap-2 px-4 sm:gap-4">
                <span
                  className="glass flex h-12 w-12 items-center sm:h-16 sm:w-16
                             justify-center rounded-full text-white"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-1 h-7 w-7"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>

                <span className="text-lg font-medium text-white">
                  Descubre futiana
                </span>

                <span className="text-sm text-white/80">
                  Ver presentación en YouTube
                </span>
              </span>
            </button>
          )}
    </figure>
  );
}
