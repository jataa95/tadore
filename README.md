# T.adore

Website for **T.adore** (T.adore Manufacturing Company / T.adore Signature), a streetwear manufacturer in Nigeria offering **training, production and wholesale**.

## Pages

- `/`: home (hero, stats, banner, recent pieces, wholesale, service cards, academy, studio notes, enquiry)
- `/manufacturing`: production, the four-step process and wholesale (`#wholesale`)
- `/academy`: T.adore Signature Streetwear Academy
- `/contact`: contact channels plus an enquiry form that opens WhatsApp with the message pre-filled

## Stack

Next.js 16 (App Router, Cache Components), React 19, Tailwind CSS v4. Fonts: Italiana (display) and Inter (body) via `next/font`.

Brand palette (defined in `src/app/globals.css`):

| Token   | Hex       | Use                                  |
| ------- | --------- | ------------------------------------ |
| `ink`   | `#2b1a12` | Espresso brown: logo, text, dark sections |
| `paper` | `#f7f1e6` | Cream background                     |
| `stone` | `#ece2d0` | Deeper cream panels                  |
| `mute`  | `#7a6352` | Secondary text                       |

Contact details and social links are in `src/lib/site.ts`.

## Development

```bash
npm install
npm run dev
```

## Images

The home hero is a looping, muted production video (`public/media/hero.mp4` and `hero.webm`, poster `hero-poster.webp`), trimmed before the TikTok outro with the TikTok watermark masked. Visitors who prefer reduced motion get it paused, and there is a play/pause button.

Other photos in `public/media` are frames taken from T.adore's TikTok videos, so some still show a TikTok watermark. Replace them with original photos when available, keeping the same file names, or update the paths in the pages.
