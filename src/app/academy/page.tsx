import type { Metadata } from "next";
import { Button, Eyebrow, Photo, SectionTitle, Title } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { EnquiryBand } from "@/components/enquiry-band";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Streetwear Academy",
  description:
    "Learn to make streetwear at the T.adore Signature Streetwear Academy in Nigeria — pattern drafting, cutting, sewing, finishing and production, on industrial machines.",
};

const enrol = "Hello T.adore, I'd like to enrol in the Streetwear Academy. When does the next class start?";

const modules = [
  { t: "Pattern drafting", d: "Take body measurements and draft clean, accurate patterns for streetwear pieces from scratch.", img: "/media/acad4.webp", alt: "Student drafting a pattern on paper" },
  { t: "Cutting", d: "Lay out and cut fabric with confidence — without the fear of wasting that expensive roll.", img: "/media/acad6.webp", alt: "Paper patterns taped and laid out for cutting" },
  { t: "Sewing & finishing", d: "Industrial straight-stitch and overlock machines, plus the finishing that makes a garment look premium.", img: "/media/student-sew2.webp", alt: "Student sewing on an industrial machine" },
  { t: "Practicals", d: "Real garments from early on — tank tops, t-shirts and more — sewn, fitted and finished by you.", img: "/media/studded-back.webp", alt: "Finished tank top worn by a student" },
];

const gallery = [
  { src: "/media/acad1.webp", alt: "Student drafting on a cutting table" },
  { src: "/media/acad2.webp", alt: "Student measuring a pattern on the floor" },
  { src: "/media/acad5.webp", alt: "Student marking a pattern piece" },
  { src: "/media/acad7.webp", alt: "Students working on patterns together" },
  { src: "/media/class2.webp", alt: "Student presenting in front of the class" },
  { src: "/media/acad3.webp", alt: "Student cutting a pattern at a table" },
];

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="T.adore Signature Streetwear Academy"
        title="Learn the craft. Build the brand."
        intro="Hands-on fashion training inside a working streetwear studio. Learn pattern drafting, cutting, sewing and finishing on the same industrial machines we use for production."
        image="/media/class.webp"
        alt="Instructor teaching a class at the T.adore Signature studio"
        badge="Draft · Cut · Sew · Finish ·"
      >
        <Button href={whatsappLink(enrol)} external>
          Enquire about classes
        </Button>
        <Button href={site.tiktokAcademy} variant="outline" external>
          Behind the scenes
        </Button>
      </PageHero>

      {/* MODULES */}
      <section className="mx-auto max-w-[90rem] px-5 py-24 md:px-10 md:py-32">
        <SectionTitle
          center
          title="What you’ll learn."
          intro="Fine girl, fine boy — leave love, let us put you on this one. Practical, patient classes built around real garments."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {modules.map((m, i) => (
            <Reveal key={m.t} delay={i * 90}>
              <article>
                <Photo src={m.img} alt={m.alt} sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-[3/4]" />
                <p className="mt-4 text-[0.6rem] tracking-[0.18em] text-mute uppercase">Module 0{i + 1}</p>
                <h3 className="mt-1 font-display text-3xl uppercase">{m.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{m.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="grid bg-ink text-paper md:grid-cols-2">
        <div className="px-5 py-20 md:px-16 lg:px-20">
          <Eyebrow light>Why train with us</Eyebrow>
          <Title className="mt-5 text-4xl md:text-6xl">Taught by people who produce every day.</Title>
          <ul className="mt-10 divide-y divide-paper/15 border-y border-paper/15">
            {[
              ["A real production studio", "You learn where garments are actually made — not in a theory classroom."],
              ["Industrial machines", "Straight-stitch and overlock machines, the tools the industry runs on."],
              ["Hands-on classes", "Plenty of practicals, and instructors who make time for your questions."],
              ["A path into the industry", "Make for yourself, start your own label, or work in production."],
            ].map(([t, d]) => (
              <li key={t} className="py-5">
                <h3 className="text-[0.7rem] font-medium tracking-[0.18em] uppercase">{t}</h3>
                <p className="mt-2 text-sm text-paper/70">{d}</p>
              </li>
            ))}
          </ul>
        </div>
        <Photo src="/media/studio-sew.webp" alt="Student sewing in the T.adore Signature studio" sizes="(min-width: 768px) 50vw, 100vw" className="min-h-[28rem]" />
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-[90rem] px-5 py-24 md:px-10 md:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle eyebrow="Behind the scenes" title="A day at the academy." />
          <Button href={site.tiktokAcademy} variant="outline" external>
            {site.tiktokAcademyHandle}
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 90}>
              <Photo src={g.src} alt={g.alt} className="aspect-square" />
            </Reveal>
          ))}
        </div>
      </section>

      <EnquiryBand
        eyebrow="Enrol"
        title="Your fashion journey starts here."
        text="Ask about the next class, schedule and fees — we’ll reply on WhatsApp."
        placeholder="e.g. I’m a beginner — when is the next class?"
      />
    </>
  );
}
