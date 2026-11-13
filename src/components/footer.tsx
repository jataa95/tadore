import Link from "next/link";
import { Logo } from "./logo";
import { site, whatsappLink } from "@/lib/site";

const cols = [
  {
    title: "Services",
    links: [
      { label: "Production", href: "/manufacturing" },
      { label: "Wholesale", href: "/manufacturing#wholesale" },
      { label: "Academy", href: "/academy" },
    ],
  },
  {
    title: "Discover",
    links: [
      { label: "Home", href: "/" },
      { label: "How it works", href: "/manufacturing#process" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Enquiries & Orders",
    links: [
      { label: `Call ${site.phoneDisplay}`, href: site.phoneHref },
      { label: "WhatsApp", href: whatsappLink(), external: true },
      { label: site.tiktokHandle, href: site.tiktok, external: true },
      { label: site.tiktokAcademyHandle, href: site.tiktokAcademy, external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="overflow-hidden bg-ink text-paper">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 pt-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] md:px-10">
        <div className="max-w-xs">
          <Logo tone="light" />
          <p className="mt-5 text-sm leading-relaxed text-paper/60">
            {site.company} — streetwear manufacturing, training and wholesale. Proudly made in Nigeria.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h2 className="text-[0.7rem] font-medium tracking-[0.2em] uppercase">{c.title}</h2>
            <ul className="mt-5 space-y-3 text-sm text-paper/60">
              {c.links.map((l) => (
                <li key={l.label}>
                  {"external" in l ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-paper">
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href} className="transition hover:text-paper">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p
        aria-hidden
        className="mt-10 text-center font-display text-[24vw] leading-[0.8] tracking-[0.02em] whitespace-nowrap text-paper/95 select-none md:text-[22vw]"
      >
        T.ADORE
      </p>

      <div className="mx-auto mt-6 flex max-w-[90rem] flex-col gap-3 border-t border-paper/15 px-5 py-6 text-xs text-paper/50 md:flex-row md:justify-between md:px-10">
        <p>
          © <CurrentYear /> {site.company}. All rights reserved.
        </p>
        <p>Training · Production · Wholesale</p>
        <a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
          TikTok
        </a>
      </div>
    </footer>
  );
}

async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}
