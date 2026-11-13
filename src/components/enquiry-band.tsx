import { Eyebrow, Title } from "./ui";
import { QuickEnquiry } from "./quick-enquiry";

export function EnquiryBand({
  eyebrow = "Start an order",
  title = "Tell us what you want to make.",
  text = "Share the piece, quantity and timeline — we’ll reply on WhatsApp with next steps. No long forms, just a conversation.",
  placeholder,
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  placeholder?: string;
}) {
  return (
    <section className="bg-stone">
      <div className="mx-auto max-w-[90rem] px-5 py-24 text-center md:px-10 md:py-32">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Title className="mx-auto mt-5 max-w-3xl text-4xl md:text-6xl">{title}</Title>
        <p className="mx-auto mt-5 max-w-lg text-[0.95rem] leading-relaxed text-mute">{text}</p>
        <QuickEnquiry placeholder={placeholder} />
      </div>
    </section>
  );
}
