"use client";

import { useEffect, useRef } from "react";

export function HeroVideo({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  // Respect reduced-motion preferences: those visitors see the still poster frame.
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }, []);

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
      >
        <source src="/media/hero.webm" type="video/webm" />
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
