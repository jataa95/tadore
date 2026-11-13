import type { ReactNode } from "react";
import { Eyebrow, Photo, Title } from "./ui";
import { SpinBadge } from "./spin-badge";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  alt,
  badge,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  image: string;
  alt: string;
  badge: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-14 md:grid-cols-2 md:items-center md:px-10 md:py-20">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Title as="h1" className="mt-6 text-5xl sm:text-6xl lg:text-[5.5rem]">
            {title}
          </Title>
          <p className="mt-8 max-w-md text-[0.95rem] leading-relaxed text-mute">{intro}</p>
          {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
        </div>
        <div className="relative md:pl-10">
          <Photo src={image} alt={alt} priority sizes="(min-width: 768px) 45vw, 100vw" className="aspect-[4/5]" />
          <SpinBadge text={badge} className="absolute -bottom-8 left-4 md:top-1/2 md:bottom-auto md:left-0 md:-translate-y-1/2" />
        </div>
      </div>
    </section>
  );
}
