import Link from "next/link";
import { Button, Eyebrow, Photo, SectionTitle, TextLink, Title } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";
import { SpinBadge } from "@/components/spin-badge";
import { HeroVideo } from "@/components/hero-video";
import { EnquiryBand } from "@/components/enquiry-band";
import { site, whatsappLink } from "@/lib/site";

const stats = [
  ["3-in-1", "Training, production & wholesale"],
  ["29K+", "Followers on TikTok"],
  ["298K+", "Likes from the community"],
];

const made = [
  { tag: "Most loved", cat: "Tops", name: "Ribbed tank top", img: "/media/tank-orange.webp", alt: "Orange ribbed tank top with the T.adore mark" },
  { tag: "Made to order", cat: "Tees", name: "Graphic t-shirt", img: "/media/tee.webp", alt: "Graphic print t-shirt on a gold mannequin" },
  { tag: "Made to order", cat: "Outerwear", name: "Track jacket", img: "/media/jacket.webp", alt: "Red zip-up track jacket with white stripes" },
  { tag: "Made to order", cat: "Sportswear", name: "Custom jersey", img: "/media/jersey.webp", alt: "Custom sports-style jersey on a mannequin" },
];

const paths = [
  { title: "Training", text: "Learn to draft, cut and sew streetwear.", href: "/academy", cta: "Join the academy", img: "/media/acad4.webp", alt: "Academy student drafting a pattern" },
  { title: "Production", text: "Cut-and-sew manufacturing for your brand.", href: "/manufacturing", cta: "Start production", img: "/media/floor.webp", alt: "Production floor with garments being finished" },
  { title: "Wholesale", text: "Ribbed basics in bulk, ready for your label.", href: "/manufacturing#wholesale", cta: "Shop wholesale", img: "/media/tanks-stack1.webp", alt: "Stack of ribbed tank tops" },
  { title: "Custom", text: "Studs, trims and finishing that stand out.", href: "/contact", cta: "Talk to us", img: "/media/studded-back.webp", alt: "Customised white tank top" },
];

const notes = [
  {
    cat: "Studio notes",
    title: "That design you saw online and said “I can make this”…",
    text: "…until you actually start. Every piece begins on paper — a sketch, a tech sheet and a tape measure.",
    img: "/media/sketch-banner.webp",
    alt: "Hoodie sketches, a tech pack and a tape measure on grey fleece",
  },
  {
    cat: "Studio notes",
    title: "That fear when cutting expensive fabric",
    text: "One mistake and your mood changes. It’s why we teach careful layout and confident cutting.",
    img: "/media/cutting-banner.webp",
    alt: "Grey fabric pieces and yellow scissors on a cutting table",
  },
  {
    cat: "Studio notes",
    title: "Fashion will teach you patience",
    text: "Whether you like it or not. Swatches, notes, samples — the quiet work behind every finished drop.",
    img: "/media/swatches-banner.webp",
    alt: "Hands noting fabric swatches in a notebook",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO
          Mobile (< md): video first, then centred headline, intro and actions.
          Tablet (md–lg): centred stack with the video in the middle.
          Large screens (lg+): three columns — headline | video | intro + actions — kept compact in height. */}
      <section>
        <div className="mx-auto grid max-w-[90rem] px-5 pt-10 pb-16 md:gap-10 md:px-10 md:pt-12 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-10 lg:pt-10 lg:pb-14 xl:gap-14">
          <div className="order-2 mt-14 text-center md:order-1 md:mt-0 lg:text-left">
            <Eyebrow>{site.tagline}</Eyebrow>
            <Title as="h1" className="mt-6 text-[3.4rem] sm:text-7xl lg:mt-5 lg:text-[3.5rem] xl:text-[4.3rem] 2xl:text-[4.8rem]">
              Made in Nigeria. <br className="hidden lg:block" />
              Built for streetwear.
            </Title>
          </div>

          <div className="relative order-1 w-full md:order-2 md:mx-auto md:max-w-md lg:w-[min(26vw,20rem)] 2xl:w-[22rem]">
            <HeroVideo className="aspect-[4/5] max-h-[78vh] w-full md:max-h-none" />
            <SpinBadge
              text="Training · Production · Wholesale ·"
              className="absolute -bottom-10 left-1/2 -translate-x-1/2"
            />
          </div>

          <div className="order-3 mt-10 text-center md:mt-0 md:pt-8 lg:self-end lg:pt-0 lg:pb-2 lg:text-left">
            <p className="mx-auto max-w-md text-[0.95rem] leading-relaxed text-mute md:max-w-sm lg:mx-0">
              T.adore trains the next generation of fashion makers, produces for growing brands, and supplies
              quality basics at wholesale — all from one studio.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3 md:mt-8 lg:justify-start">
              <Button href={whatsappLink("Hello T.adore, I'd like to start a production order.")} external>
                Start an order
              </Button>
              <Button href="/academy" variant="outline">
                Join the academy
              </Button>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <dl className="grid border-y border-line sm:grid-cols-3">
            {stats.map(([k, v]) => (
              <div key={v} className="flex items-center gap-5 border-line py-6 sm:justify-center not-last:border-b sm:not-last:border-r sm:not-last:border-b-0">
                <dt className="sr-only">{v}</dt>
                <dd className="font-display text-5xl">{k}</dd>
                <dd className="max-w-[9rem] text-xs leading-snug text-mute">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Marquee items={["Tank tops", "T-shirts", "Hoodies", "Tracksuits", "Jerseys", "Caps", "Private label"]} />

      {/* BANNER */}
      <section className="mx-auto max-w-[90rem] px-5 py-16 md:px-10 md:py-24">
        <div className="relative flex min-h-[32rem] items-center justify-center overflow-hidden px-6 text-center text-paper md:min-h-[38rem]">
          <Photo src="/media/sketch-banner.webp" alt="" sizes="100vw" className="absolute inset-0" />
          <div className="absolute inset-0 bg-ink/55" />
          <Reveal className="relative max-w-2xl">
            <Eyebrow light>From sketch to stitch</Eyebrow>
            <Title className="mt-5 text-4xl md:text-6xl">Your idea, made properly.</Title>
            <p className="mx-auto mt-5 max-w-md text-[0.95rem] leading-relaxed text-paper/85">
              Bring a sketch, a reference photo or a full tech pack. We draft the pattern, make the sample and run
              your production.
            </p>
            <div className="mt-8">
              <Button href="/manufacturing" variant="outline-light">
                How production works
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MADE AT T.ADORE */}
      <section className="mx-auto max-w-[90rem] px-5 pb-24 md:px-10 md:pb-32">
        <SectionTitle center title="Fresh off our floor." intro="A few pieces recently cut, sewn and finished at T.adore." />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {made.map((m, i) => (
            <Reveal key={m.name} delay={i * 90}>
              <Link href="/manufacturing" className="group block">
                <div className="relative">
                  <Photo src={m.img} alt={m.alt} sizes="(min-width: 768px) 25vw, 50vw" className="aspect-[3/4]" />
                  <span className="absolute top-3 left-3 bg-paper px-2.5 py-1.5 text-[0.6rem] tracking-[0.16em] uppercase">
                    {m.tag}
                  </span>
                </div>
                <p className="mt-3 text-[0.6rem] tracking-[0.18em] text-mute uppercase">{m.cat}</p>
                <p className="mt-1 text-sm group-hover:underline">{m.name}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHOLESALE SPLIT */}
      <section className="mx-auto max-w-[90rem] px-5 pb-24 md:px-10 md:pb-32">
        <div className="grid md:grid-cols-[1fr_1.25fr]">
          <Photo src="/media/tanks-stack2.webp" alt="Stack of ribbed tank tops in many colours" sizes="(min-width: 768px) 40vw, 100vw" className="aspect-[4/5]" />
          <Reveal className="flex h-full flex-col justify-center bg-stone px-8 py-14 md:px-16">
            <Eyebrow>Wholesale</Eyebrow>
            <Title className="mt-5 text-4xl md:text-6xl">Ribbed tanks in every colour.</Title>
            <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-mute">
              Orange, pink, yellow, white, black, burgundy, lime, brown and more. Our best-selling ribbed tank tops
              are available in bulk for resellers, boutiques and brands — ready for your own label.
            </p>
            <div className="mt-8">
              <Button href={whatsappLink("Hello T.adore, I'd like wholesale prices for your tank tops.")} external>
                Request wholesale prices
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PATHS */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[90rem] px-5 py-24 md:px-10 md:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Title className="text-4xl md:text-6xl">Find your way in.</Title>
            <Button href="/contact" variant="outline">
              Contact us
            </Button>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {paths.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <Link href={p.href} className="group relative block aspect-[3/5] overflow-hidden text-paper">
                  <Photo src={p.img} alt={p.alt} sizes="(min-width: 1024px) 25vw, 50vw" className="absolute inset-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-4xl uppercase">{p.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-paper/80">{p.text}</p>
                    <span className="mt-4 inline-block border-b border-paper pb-1 text-[0.62rem] tracking-[0.18em] uppercase">
                      {p.cta}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMY */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[90rem] gap-14 px-5 py-24 md:grid-cols-[1fr_1.2fr] md:items-center md:px-10 md:py-32">
          <Reveal>
            <Eyebrow>T.adore Signature Streetwear Academy</Eyebrow>
            <Title className="mt-5 text-4xl md:text-6xl">Learn the craft. Build the brand.</Title>
            <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-mute">
              Hands-on classes inside a working streetwear studio — pattern drafting, cutting, sewing and finishing on
              the same industrial machines we produce on.
            </p>
            <div className="mt-8">
              <Button href="/academy" variant="outline">
                Explore the academy
              </Button>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 items-end gap-4">
            <Reveal>
              <Photo src="/media/class.webp" alt="Instructor teaching a class at T.adore" className="aspect-[3/4]" />
            </Reveal>
            <Reveal delay={150}>
              <Photo src="/media/student-sew1.webp" alt="Student sewing on an industrial machine" className="aspect-square" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* NOTE */}
      <section className="grid bg-ink text-paper md:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-20 md:px-16 lg:px-24">
          <Reveal>
            <Eyebrow light>A note from T.adore</Eyebrow>
            <Title className="mt-5 text-4xl md:text-6xl">Patience, precision &amp; a love for the craft.</Title>
            <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-paper/75">
              From the first sketch to the final stitch, every T.adore piece passes through careful hands. The same
              studio where we produce is where we train — so what our students learn is exactly what the industry
              needs.
            </p>
            <div className="mt-8">
              <Button href={site.tiktok} variant="outline-light" external>
                Follow on TikTok
              </Button>
            </div>
          </Reveal>
        </div>
        <Photo src="/media/cutting-banner.webp" alt="Fabric pieces cut and laid out on a table" sizes="(min-width: 768px) 50vw, 100vw" className="min-h-[24rem] md:min-h-[38rem]" />
      </section>

      {/* STUDIO NOTES */}
      <section className="mx-auto max-w-[90rem] px-5 py-24 md:px-10 md:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            title="Things you’ll understand when you’re learning fashion."
            intro="Real moments from the studio — the struggles, the small wins and the finishing that makes it all worth it."
          />
          <Button href={site.tiktok} variant="outline" external>
            Watch on TikTok
          </Button>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-5">
          {notes.map((n, i) => (
            <Reveal key={n.title} delay={i * 90}>
              <article>
                <Photo src={n.img} alt={n.alt} className="aspect-[4/3]" />
                <p className="mt-4 text-[0.6rem] tracking-[0.18em] uppercase">
                  {n.cat} <span className="mx-1.5 text-mute">•</span> <span className="text-mute">0{i + 1}</span>
                </p>
                <h3 className="mt-2 font-display text-2xl leading-tight uppercase">{n.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{n.text}</p>
                <div className="mt-4">
                  <TextLink href={site.tiktok}>Watch more</TextLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <EnquiryBand />
    </>
  );
}
