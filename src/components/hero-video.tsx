"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideo({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  // Respect reduced-motion preferences: start paused and let the visitor opt in.
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }, []);

  function toggle() {
    const video = ref.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  }

  return (
    <div className={`relative overflow-hidden bg-stone ${className}`}>
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        poster="/media/hero-poster.webp"
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Garments being produced and finished at the T.adore studio: track jackets, jerseys, t-shirts and more"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src="/media/hero.webm" type="video/webm" />
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute right-4 bottom-4 flex h-10 w-10 items-center justify-center rounded-full bg-paper/85 text-ink backdrop-blur transition hover:bg-paper"
      >
        {playing ? (
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
            <rect x="3" y="2" width="3.5" height="12" />
            <rect x="9.5" y="2" width="3.5" height="12" />
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" className="ml-0.5 h-3.5 w-3.5" fill="currentColor" aria-hidden>
            <path d="M4 2l10 6-10 6z" />
          </svg>
        )}
      </button>
    </div>
  );
}
