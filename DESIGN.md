# DESIGN.md: KnitKnot-Inspired Shear Threads Variation

## Source

- URL: https://knitknots.framer.website/
- Capture date: 2026-08-30
- Evidence: Firecrawl branding + image inventory, rendered page markdown, and full-page screenshot
- Scope: visual inspiration only; do not copy KnitKnot copy, images, logos, or proprietary Framer implementation

## Reference Screenshot

![Full-page screenshot of the source site](../.firecrawl/knitknots/screenshot-full.png)

Use this screenshot as evidence for hierarchy, density, section rhythm, and editorial composition. The build must remain an original Shear Threads design.

## Design Summary

A quiet editorial-commerce page built from oversized condensed typography, abundant white space, warm neutral section bands, cropped fashion imagery, and asymmetric grids. The visual rhythm alternates between sparse product-led sections and denser image mosaics. Shear Threads' own products, copy, and brand colors replace all source-site assets and messaging.

## Design Tokens

### Colors

- `paper`: `#fbfbf8` — inferred primary canvas
- `warm`: `#efeee8` — inferred editorial section band
- `ink`: `#20201f` — observed near-black text treatment
- `muted`: `#6d6b67` — inferred secondary copy
- `line`: `#deddd7` — inferred hairlines and dividers
- `signal`: `#b41503` — Shear Threads brick red; original brand accent
- `thread`: `#03a0cb` — Shear Threads cyan; micro accent only

Firecrawl reported `#FFFFFF` and `#1B1B1B` with high confidence. Its reported blue/orange accents appear to come from linked/interactive artifacts and are not visually dominant in the screenshot, so they are intentionally excluded.

### Typography

- Display: condensed sans serif, modeled with local Anton; uppercase or tightly set title case
- Body: local Archivo; 400–600 weights
- Editorial accent: serif fallback only for brief labels or quotes
- Desktop hero: approximately `clamp(4.5rem, 10vw, 8.75rem)`
- Section headings: `clamp(2.25rem, 5vw, 4.5rem)`
- Body: `0.95rem–1.05rem`, relaxed `1.6` line height
- Utility labels: `0.68rem–0.75rem`, uppercase, `0.16em–0.24em` tracking

### Spacing And Layout

- Maximum content width: `1180–1240px`
- Page gutters: `20px` mobile, `32px` tablet, `48px` desktop
- Section rhythm: `80px` mobile, `120–160px` desktop
- Grid gaps: `12px`, `20px`, `32px`, and `56px`
- Corners: mostly square; selective `20–28px` rounding for Shear Threads imagery
- Shadows: none
- Borders: one-pixel warm-gray hairlines

## Components

### Header

Slim announcement bar, compact wordmark, centered navigation, and one understated utility action. Keep it airy and avoid a heavy dark navigation shell.

### Hero

Oversized display headline arranged as a visual object. Place one fashion image through or beside the type, with a small supporting paragraph and compact black or brick CTA. Avoid reproducing the source headline wording.

### Trust Strip

Four equal cells with a small icon/number, short title, and one-line supporting text. Warm neutral background.

### Collection Tiles

Asymmetric editorial image grid with minimal labels placed below or over the image edge. Use Shear Threads product/process photography only.

### Product Cards

Portrait product image, organization/category label, product name, and price/status. No shadow, minimal chrome, hover image movement only.

### Feature Banner

Wide photographic band with a small inset paper card. Use brand-owned workshop or product photography rather than source-site imagery.

### Story Band

Warm neutral background, scattered product/workshop images, central text block, and a small outline CTA.

### Testimonial Cards

Paper cards on a warm background with restrained typography and subtle indexing.

### Footer

Newsletter field, compact link groups, then an oversized low-contrast Shear Threads wordmark along the bottom edge.

## Page Patterns

1. Announcement and minimal header
2. Type-led fashion hero
3. Trust/value strip
4. Featured collections editorial split
5. Four-up popular product grid
6. Full-width brand/process banner
7. Warm story band
8. Asymmetric top-collections mosaic
9. Testimonials or social proof
10. Instagram/image mosaic and newsletter footer

On mobile, stack text before imagery, keep the hero type large but readable, collapse four-column areas to two columns, and preserve generous vertical rhythm.

## Content Style

- Short fashion-editorial headlines
- Concrete product/process supporting copy
- Lowercase or short imperative CTAs: `shop the collection`, `start your order`, `see the process`
- No source-site marketing phrases, testimonials, names, or product descriptions

## Agent Build Instructions

- Build a new Next.js variation in `site-v2`; never modify `site`.
- Reuse Shear Threads' product data and owned imagery from the current project.
- Use local fonts and local image assets where possible.
- Preserve accessible heading hierarchy, descriptive alt text, keyboard focus states, and reduced-motion support.
- Treat the source screenshot as composition inspiration, not a pixel-perfect target.
- Do not download or redistribute KnitKnot photography, logo, copy, or private Framer code.

## Rerun Inputs

```text
workflow: firecrawl-website-design-clone
source_url: https://knitknots.framer.website/
target_stack: Next.js 16 + React 19 + Tailwind CSS 4
output: site-v2/DESIGN.md
```
