export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="overflow-hidden border-b border-line py-6" aria-hidden>
      <div className="marquee flex w-max whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center font-display text-3xl uppercase md:text-4xl">
            <span className="px-8 md:px-12">{t}</span>
            <span className="text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
