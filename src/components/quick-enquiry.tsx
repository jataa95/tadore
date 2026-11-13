"use client";

import { useState, type FormEvent } from "react";
import { whatsappLink } from "@/lib/site";

export function QuickEnquiry({ placeholder = "e.g. 100 ribbed tank tops, 5 colours" }: { placeholder?: string }) {
  const [value, setValue] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const text = value.trim()
      ? `Hello T.adore! I'd like to make: ${value.trim()}`
      : "Hello T.adore, I'd like to make an enquiry.";
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-9 flex max-w-xl flex-col sm:flex-row">
      <label htmlFor="quick-enquiry" className="sr-only">
        What would you like to make?
      </label>
      <input
        id="quick-enquiry"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="h-13 flex-1 border border-ink bg-paper px-4 text-sm text-ink outline-none placeholder:text-mute/70 focus:ring-2 focus:ring-ink/20"
      />
      <button
        type="submit"
        className="h-13 border border-ink bg-ink px-8 text-[0.7rem] font-medium tracking-[0.18em] text-paper uppercase transition-colors hover:bg-paper hover:text-ink"
      >
        Send on WhatsApp
      </button>
    </form>
  );
}
