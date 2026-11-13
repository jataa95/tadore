"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { nav, site, whatsappLink } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  // The menu stays open only on the path it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-5 md:px-10">
        <Logo />

        <button
          type="button"
          className="group flex h-10 items-center gap-3 text-[0.7rem] font-medium tracking-[0.18em] uppercase"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpenOn(open ? null : pathname)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span className="relative block h-2.5 w-6" aria-hidden>
            <span className={`absolute left-0 h-px w-6 bg-ink transition-all ${open ? "top-1 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-px w-6 bg-ink transition-all ${open ? "top-1 -rotate-45" : "top-2.5"}`} />
          </span>
        </button>
      </div>

      <div
        id="site-menu"
        className={`grid bg-paper transition-[grid-template-rows] duration-500 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        inert={!open}
      >
        <div className="overflow-hidden">
          <div className="mx-auto grid max-w-[90rem] gap-10 border-t border-line px-5 py-8 md:grid-cols-[1fr_auto] md:px-10 md:py-12">
            <nav aria-label="Main">
              <ul>
                {[{ href: "/", label: "Home" }, ...nav].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpenOn(null)}
                      className={`block py-1.5 font-display text-4xl uppercase transition-opacity hover:opacity-60 md:text-6xl ${
                        pathname === item.href ? "underline decoration-1 underline-offset-8" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col gap-6 text-sm md:items-end md:justify-end md:text-right">
              <div>
                <p className="text-[0.62rem] tracking-[0.18em] text-mute uppercase">Enquiries &amp; orders</p>
                <a href={site.phoneHref} className="mt-1 block hover:opacity-60">
                  Call {site.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-[0.62rem] tracking-[0.18em] text-mute uppercase">Follow</p>
                <a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="mt-1 block hover:opacity-60">
                  TikTok {site.tiktokHandle}
                </a>
              </div>
              <a
                href={whatsappLink("Hello T.adore, I'd like to make an enquiry.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center border border-ink bg-ink px-6 py-3.5 text-[0.7rem] font-medium tracking-[0.18em] text-paper uppercase transition-colors hover:bg-paper hover:text-ink"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
