"use client";

import { useState, type FormEvent } from "react";
import { whatsappLink } from "@/lib/site";

const topics = ["Production order", "Wholesale", "Academy / training", "Something else"];

export function EnquiryForm() {
  const [topic, setTopic] = useState(topics[0]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Hello T.adore! New enquiry: ${topic}`,
      `Name: ${data.get("name")}`,
      data.get("quantity") ? `Quantity: ${data.get("quantity")}` : null,
      "",
      String(data.get("message") ?? ""),
    ].filter((l) => l !== null);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  const field =
    "mt-2 w-full border border-line bg-paper px-4 py-3 text-ink outline-none transition placeholder:text-mute/60 focus:border-ink";

  return (
    <form onSubmit={onSubmit} className="bg-stone p-7 md:p-12">
      <fieldset>
        <legend className="text-[0.65rem] font-medium tracking-[0.18em] uppercase">I’m interested in</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {topics.map((t) => (
            <label
              key={t}
              className={`cursor-pointer border px-4 py-2 text-xs transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ink/30 ${
                topic === t ? "border-ink bg-ink text-paper" : "border-ink/25 text-ink hover:border-ink"
              }`}
            >
              <input
                type="radio"
                name="topic"
                value={t}
                checked={topic === t}
                onChange={() => setTopic(t)}
                className="sr-only"
              />
              {t}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-[0.65rem] font-medium tracking-[0.18em] uppercase">
          Your name
          <input name="name" required autoComplete="name" className={field} placeholder="e.g. Ada" />
        </label>
        <label className="block text-[0.65rem] font-medium tracking-[0.18em] uppercase">
          Quantity <span className="text-mute normal-case tracking-normal">(optional)</span>
          <input name="quantity" className={field} placeholder="e.g. 50 tank tops" />
        </label>
      </div>

      <label className="mt-5 block text-[0.65rem] font-medium tracking-[0.18em] uppercase">
        Tell us more
        <textarea
          name="message"
          required
          rows={5}
          className={field}
          placeholder="Describe your design, colours, sizes, deadline — or ask about our next class."
        />
      </label>

      <button
        type="submit"
        className="mt-6 w-full border border-ink bg-ink px-8 py-4 text-[0.7rem] font-medium tracking-[0.18em] text-paper uppercase transition-colors hover:bg-paper hover:text-ink sm:w-auto"
      >
        Send via WhatsApp
      </button>
      <p className="mt-3 text-xs text-mute">
        This opens WhatsApp with your message ready to send.
      </p>
    </form>
  );
}
