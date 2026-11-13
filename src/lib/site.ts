export const site = {
  name: "T.adore",
  fullName: "T.adore Signature",
  company: "T.adore Manufacturing Company",
  tagline: "Streetwear Manufacturer · Nigeria",
  phoneDisplay: "0808 711 0432",
  phoneHref: "tel:+2348087110432",
  whatsappNumber: "2348087110432",
  tiktok: "https://www.tiktok.com/@tadorestreetwear",
  tiktokHandle: "@tadorestreetwear",
  tiktokAcademy: "https://www.tiktok.com/@tadore_signature1",
  tiktokAcademyHandle: "@tadore_signature1",
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const nav = [
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/manufacturing#wholesale", label: "Wholesale" },
  { href: "/academy", label: "Academy" },
  { href: "/contact", label: "Contact" },
] as const;
