import Image from "next/image";
import Link from "next/link";

export function Logo({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${tone === "dark" ? "text-ink" : "text-paper"} ${className}`}
      aria-label="T.adore — home"
    >
      <Image
        src={tone === "dark" ? "/media/mark-dark.png" : "/media/mark-light.png"}
        alt=""
        width={294}
        height={274}
        className="h-7 w-auto transition-transform duration-700 group-hover:rotate-[20deg]"
        priority
      />
      <span className="font-display text-2xl tracking-[0.28em]">T.ADORE</span>
    </Link>
  );
}
