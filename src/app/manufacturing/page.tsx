import type { Metadata } from "next";
import { Button, Eyebrow, Photo, SectionTitle, Title } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";
import { EnquiryBand } from "@/components/enquiry-band";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Manufacturing & Wholesale",
  description:
    "Cut-and-sew streetwear production and wholesale basics in Nigeria. Tees, tanks, hoodies, tracksuits, jerseys and more — made with your label.",
};

const products = [
  { name: "Tank tops", img: "/media/tank-yellow.webp", alt: "Yellow ribbed tank top with the T.adore mark" },
  { name: "T-shirts", img: "/media/tee.webp", alt: "Graphic t-shirt on a mannequin" },
  { name: "Track jackets", img: "/media/jacket.webp", alt: "Red zip-up track jacket" },
  { name: "Jerseys", img: "/media/jersey.webp", alt: "Custom sports-style jersey" },
  { name: "Track pants", img: "/media/trackpants.webp", alt: "Red track pants with side stripes" },
  { name: "Snapback caps", img: "/media/cap-snapback.webp", alt: "Embroidered snapback caps" },
  { name: "Trucker caps", img: "/media/cap-trucker.webp", alt: "Trucker cap with embroidered logo" },
  { name: "Custom finishing", img: "/media/rib.webp", alt: "Contrast binding on a red ribbed garment" },
];

const steps = [
  ["Consultation", "Send your designs, tech pack or reference photos. We’ll talk fabrics, sizes, quantities and timelines."],
  ["Pattern & sample", "We draft the pattern and make a sample so you can check fit, feel and finishing before bulk."],
  ["Bulk production", "Cutting, sewing and finishing on industrial machines, with quality checks at every stage."],
  ["Labels & delivery", "Your brand labels attached, pieces folded and packed — ready for your customers."],
];

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Production · Wholesale"
        title="Your brand. Our floor."
        intro="T.adore Manufacturing Company produces streetwear for emerging and established brands. Bring a sketch or a full tech pack — we’ll handle pattern, sample and bulk production."
        image="/media/floor.webp"
        alt="T.adore production floor with team members finishing garments"
        badge="Cut · Sew · Finish · Deliver ·"
      >
        <Button href={whatsappLink("Hello T.adore, I'd like a production quote.")} external>
          Get a quote
        </Button>
        <Button href="#wholesale" variant="outline">
          Wholesale basics
        </Button>
      </PageHero>

      <Marquee items={["Knits", "Fleece", "Rib", "Denim", "Embroidery", "Custom labels"]} />

      {/* WHAT WE MAKE */}
      <section className="mx-auto max-w-[90rem] px-5 py-24 md:px-10 md:py-32">
        <SectionTitle
          center
          title="What we make."
          intro="If it’s streetwear, there’s a good chance we can make it. Here’s some of what has come off our floor."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={(i % 4) * 80}>
              <figure>
                <Photo src={p.img} alt={p.alt} sizes="(min-width: 768px) 25vw, 50vw" className="aspect-[3/4]" />
                <figcaption className="mt-3 text-sm">{p.name}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="grid bg-ink text-paper md:grid-cols-2">
        <Photo src="/media/cutting-banner.webp" alt="Fabric pieces cut and laid out on a table" sizes="(min-width: 768px) 50vw, 100vw" className="min-h-[22rem]" />
        <div className="px-5 py-20 md:px-16 lg:px-20">
          <Eyebrow light>The process</Eyebrow>
          <Title className="mt-5 text-4xl md:text-6xl">Four steps to your finished order.</Title>
          <ol className="mt-10 divide-y divide-paper/15 border-y border-paper/15">
            {steps.map(([t, d], i) => (
              <li key={t} className="grid grid-cols-[3.5rem_1fr] py-6">
                <span className="font-display text-3xl">0{i + 1}</span>
                <div>
                  <h3 className="text-[0.7rem] font-medium tracking-[0.18em] uppercase">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/70">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHOLESALE */}
      <section id="wholesale" className="mx-auto max-w-[90rem] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-14 md:grid-cols-[1fr_1.15fr] md:items-center">
          <Reveal>
            <Eyebrow>Wholesale</Eyebrow>
            <Title className="mt-5 text-4xl md:text-6xl">Ribbed tanks in every colour.</Title>
            <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-mute">
              Our best-selling ribbed tank tops are available in bulk — orange, pink, yellow, white, black, burgundy,
              lime, brown and more. Perfect for resellers, boutiques and brands ready to add their own label.
            </p>
            <ul className="mt-8 grid max-w-md border-t border-line text-sm sm:grid-cols-2">
              {["Soft, stretchy rib fabric", "Clean, neat finishing", "Range of sizes", "Custom labels available"].map((f) => (
                <li key={f} className="border-b border-line py-3">
                  ✦ <span className="ml-2">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button href={whatsappLink("Hello T.adore, I'd like wholesale prices for your tank tops.")} external>
                Request wholesale prices
              </Button>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            <Reveal className="row-span-2">
              <Photo src="/media/tanks-stack2.webp" alt="Stack of ribbed tank tops in many colours" className="h-full min-h-[24rem]" />
            </Reveal>
            <Reveal delay={100}>
              <Photo src="/media/tank-orange.webp" alt="Orange ribbed tank top" className="aspect-[3/4]" />
            </Reveal>
            <Reveal delay={200}>
              <Photo src="/media/tanks-stack1.webp" alt="Folded orange, pink and black tank tops" className="aspect-[3/4]" />
            </Reveal>
          </div>
        </div>
      </section>

      <EnquiryBand
        eyebrow="Get a quote"
        title="Ready to produce?"
        text="Tell us the piece, quantity and deadline. We’ll reply on WhatsApp with pricing and next steps."
      />
    </>
  );
}
