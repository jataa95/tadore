import Image from "next/image";

export function SpinBadge({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div
      className={`flex h-28 w-28 items-center justify-center rounded-full border border-ink bg-paper ${className}`}
      aria-hidden
    >
      <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full animate-[spin_22s_linear_infinite]">
        <defs>
          <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-ink text-[8.4px] tracking-[0.24em] uppercase">
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink">
        <Image src="/media/mark-light.png" alt="" width={294} height={274} className="w-6" />
      </span>
    </div>
  );
}
