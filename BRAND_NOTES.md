# Wellness Getaways — Brand Notes

## Positioning
"Sophisticated, modern Bohemian" (Amy Johnson, 4/12/2024).
Logo direction: clean, commercial, room for off-shoot branding.

## Brand spec (source: `Wellness Getaways Logo Brand Guide.pdf`, Amy Johnson, March 2025)

| Element | Value | Use |
|---|---|---|
| Primary color | `#8ba77d` | Lighter sage green — "the" and "getaways" in the wordmark |
| Accent color | `#465745` | Dark forest green — "wellness" in the wordmark |
| Display font | **Branch Regular** | Set Sail Studios. Used for hero h1 and brand-callout moments |
| Logo (color) | `public/brand/logo-color.png` | Default on light backgrounds |
| Logo (black) | `public/brand/logo-black.png` | Watermarks, dark text overlays |
| Logo (white) | `public/brand/logo-white.png` | Dark hero, footer, photo overlays |
| Logo (source) | `public/brand/logo-source.ai` | Adobe Illustrator master — do not modify in repo |
| Font file | `app/fonts/branch-regular.ttf` | Loaded via `next/font/local` in `app/layout.tsx` |

These values are also reflected in `tailwind.config.ts` as the **default `forest` and `sage`** color tokens (so existing `text-forest`, `bg-sage`, etc. utilities pick them up automatically). Don't introduce a separate `brand-*` palette — keep one source of truth.

## Font licensing — ⚠️ verify before going to production
**Branch Regular is a commercial display font (Set Sail Studios).** Amy purchased it for the brand build. Confirm Kelly's license covers **web/@font-face embedding** (not just print/logo use). Most Set Sail licenses allow web embedding, but a small number restrict it.

If web rights aren't covered, fallback options:
1. Ask Amy to upgrade Kelly's license (preferred — Branch is core to brand)
2. Use Branch Regular **only** in static logo artwork (already done) and pick a similar Google Font (e.g., Cormorant Garamond, Playfair Display) for live h1 rendering

The `app/fonts/branch-regular.ttf` file in this repo is committed for staging review. Remove or replace before production cutover if licensing doesn't cover web use.

## Long-term vision (per Kelly's 5/21/2026 forwards)
Per Amy's mind map, the staged roll-up beyond launch:

1. **YouTube how-to videos** for rental properties — coffee machine, hot tub, washer/dryer, dumbwaiter, oven, in-ceiling Bluetooth speakers, etc.
2. **QR code stickers** in the rentals, linking to the YouTube videos
3. **Services landing page** (currently this site — informational, plus contact/book by email)
4. **Physical product line** — Kelly's step-mom's coffee mugs, salt lamps, in-home merchandise
5. **E-commerce on the site** — booking + product sales

Architectural implication: leave room for `/shop`, `/learn` (or similar) routes; don't lock the site into a property-listing-only IA. Not actionable now.

## Source of truth
Brand assets live in Google Drive: `/auroquix/clients/wellness getaways/Wellness Getaways/`
- Drive folder ID: `1E4sSsXlxZR_Hx9oI6rLuHvBnH4By0th8`
- Brand Guide PDF ID: `1CuBhbRRyv362wFzuND9KFKJwdtskRya1`
- Logo Assets ZIP ID: `1hDe-CudFl0NFe7QXVyhro7nvDQ2a3_lX`

Repo copies under `public/brand/` and `app/fonts/` are derivatives. If the brand is updated, re-export from Drive and replace.

## Contacts
- **Client**: Kelly McDade — `reikitummo.clt@gmail.com` / `info@thewellnessgetaways.com`
- **Branding partner**: Amy Johnson — `aweavil.johnson@gmail.com` (produced brand guide + logo package)
- **Property manager**: Yonder — Melissa Frellick (COO), Mark (`yondernc.com`)
