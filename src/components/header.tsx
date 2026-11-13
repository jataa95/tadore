"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./logo";
import { nav, site, whatsappLink } from "@/lib/site";

const linkCls = "text-[0.8rem] text-ink/80 transition-colors hover:text-ink";

export function Header() {
  const pathname = usePathname();
  // The menu stays open only on the path it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto grid h-16 max-w-[90rem] grid-cols-[1fr_auto_1fr] items-center px-5 md:px-10">
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${linkCls} ${pathname === item.href ? "underline underline-offset-[6px]" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-start lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpenOn(open ? null : pathname)}
        >
          <span className="relative block h-2.5 w-6">
            <span className={`absolute left-0 h-px w-6 bg-ink transition-all ${open ? "top-1 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-px w-6 bg-ink transition-all ${open ? "top-1 -rotate-45" : "top-2.5"}`} />
          </span>
        </button>

        <Logo />

        <div className="flex items-center justify-end gap-7">
          <a href={site.tiktok} target="_blank" rel="noopener noreferrer" className={`${linkCls} hidden lg:block`}>
            TikTok
          </a>
          <a href={site.phoneHref} className={`${linkCls} hidden lg:block`}>
            Call
          </a>
          <a
            href={whatsappLink("Hello T.adore, I'd like to make an enquiry.")}
            target="_blank"
            rel="noopener noreferrer"
            className={linkCls}
          >
            Order <span className="hidden sm:inline">(WhatsApp)</span>
          </a>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={`overflow-hidden bg-paper transition-[max-height] duration-500 lg:hidden ${open ? "max-h-[28rem]" : "max-h-0"}`}
      >
        <ul className="border-t border-line px-5 py-6">
          {[{ href: "/", label: "Home" }, ...nav].map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block py-2.5 font-display text-3xl uppercase">
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-4 flex gap-6 text-sm text-mute">
            <a href={site.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href={site.phoneHref}>Call {site.phoneDisplay}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
