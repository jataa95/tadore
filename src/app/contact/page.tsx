import type { Metadata } from "next";
import { Eyebrow, Title } from "@/components/ui";
import { EnquiryForm } from "@/components/enquiry-form";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Enquiries and orders for T.adore — call or text 0808 711 0432, or message us on WhatsApp.",
};

const channels = [
  { label: "Call or text", value: site.phoneDisplay, href: site.phoneHref, external: false },
  { label: "WhatsApp", value: site.phoneDisplay, href: whatsappLink("Hello T.adore!"), external: true },
  { label: "TikTok", value: site.tiktokHandle, href: site.tiktok, external: true },
  { label: "Academy on TikTok", value: site.tiktokAcademyHandle, href: site.tiktokAcademy, external: true },
];

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-[90rem] gap-14 px-5 py-16 md:grid-cols-[1fr_1.2fr] md:px-10 md:py-24">
      <div>
        <Eyebrow>Enquiries &amp; orders</Eyebrow>
        <Title as="h1" className="mt-6 text-6xl md:text-8xl">
          Let’s talk.
        </Title>
        <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-mute">
          Production, wholesale or training — reach out and our team will get back to you. WhatsApp is the fastest
          way to reach us.
        </p>
        <ul className="mt-10 border-t border-line">
          {channels.map((c) => (
            <li key={c.label} className="border-b border-line">
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center justify-between py-5"
              >
                <span>
                  <span className="block text-[0.6rem] tracking-[0.18em] text-mute uppercase">{c.label}</span>
                  <span className="mt-1 block font-display text-3xl">{c.value}</span>
                </span>
                <span className="transition group-hover:translate-x-1" aria-hidden>
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-mute">{site.company} · Nigeria</p>
      </div>
      <EnquiryForm />
    </section>
  );
}
