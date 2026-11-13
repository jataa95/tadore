import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-[0.68rem] font-medium tracking-[0.22em] uppercase ${light ? "text-paper/80" : "text-ink"}`}>
      {children}
    </p>
  );
}

export function Title({
  as: Tag = "h2",
  children,
  className = "",
}: {
  as?: "h1" | "h2" | "h3";
  children: ReactNode;
  className?: string;
}) {
  return <Tag className={`font-display leading-[1.05] uppercase ${className}`}>{children}</Tag>;
}

export function SectionTitle({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <Title className={`${eyebrow ? "mt-5" : ""} text-4xl md:text-6xl ${light ? "text-paper" : "text-ink"}`}>
        {title}
      </Title>
      {intro && (
        <p className={`mt-5 text-[0.95rem] leading-relaxed ${light ? "text-paper/75" : "text-mute"}`}>{intro}</p>
      )}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light" | "outline-light";
  external?: boolean;
};

export function Button({ href, children, variant = "solid", external }: ButtonProps) {
  const styles = {
    solid: "border-ink bg-ink text-paper hover:bg-paper hover:text-ink",
    outline: "border-ink text-ink hover:bg-ink hover:text-paper",
    light: "border-paper bg-paper text-ink hover:bg-transparent hover:text-paper",
    "outline-light": "border-paper/80 text-paper hover:bg-paper hover:text-ink",
  }[variant];
  const cls = `inline-flex items-center justify-center border px-6 py-3.5 text-[0.7rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300 ${styles}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function TextLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  const cls = `inline-block border-b pb-1 text-[0.68rem] font-medium tracking-[0.18em] uppercase transition-opacity hover:opacity-60 ${
    light ? "border-paper text-paper" : "border-ink text-ink"
  }`;
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Photo({
  src,
  alt,
  className = "",
  sizes = "(min-width: 768px) 33vw, 100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`group/photo overflow-hidden bg-stone ${className.includes("absolute") ? "" : "relative"} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition duration-700 group-hover/photo:scale-[1.04]"
      />
    </div>
  );
}
