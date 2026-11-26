"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const VIDEO_ID = "v5VoMAm4Lec";

export default function BrandVideo() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function openPlayer() {
    dialog.current?.showModal();
    setIsPlaying(true);
  }

  return (
    <figure className="relative aspect-video w-full min-w-0 overflow-hidden rounded-[1.75rem] bg-black max-lg:order-first max-lg:mb-4 lg:col-start-2 lg:row-start-2 lg:aspect-auto lg:min-h-64 lg:self-stretch">
      <button
        ref={trigger}
        type="button"
        onClick={openPlayer}
        aria-haspopup="dialog"
        aria-label="Descubre Futiana: reproducir la presentación"
        className="absolute inset-0 grid w-full cursor-pointer place-items-center
                   focus-visible:outline-2 focus-visible:outline-white
                   focus-visible:outline-offset-[-6px]"
      >
        <Image
          src="/images/futiana-hero.jpg"
          alt=""
          fill
          loading="eager"
          sizes="(min-width: 1024px) min(42vw, 944px), (min-width: 768px) 688px, calc(100vw - 48px)"
          className="object-cover"
        />

        <span
          aria-hidden="true"
          className="absolute inset-0 bg-black/45"
        />

        <span className="hero-play glass relative grid size-12 place-items-center rounded-full sm:size-14">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="ml-1 h-7 w-7"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <span className="absolute top-full mt-2 w-max text-base font-medium text-white sm:text-lg">
            Descubre Futiana
          </span>
        </span>
      </button>
      <dialog
        ref={dialog}
        aria-label="Presentación de futiana"
        className="video-lightbox"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        onClose={() => {
          setIsPlaying(false);
          trigger.current?.focus({ preventScroll: true });
        }}
      >
        <div className="video-lightbox-player">
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            className="absolute right-0 bottom-full mb-2 min-h-11 cursor-pointer rounded-full bg-black/80 px-4 text-sm text-white"
          >
            Cerrar video
          </button>
          {isPlaying && (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&playsinline=1&hl=es`}
              title="Presentación de futiana"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full border-0"
            />
          )}
        </div>
      </dialog>
    </figure>
  );
}
