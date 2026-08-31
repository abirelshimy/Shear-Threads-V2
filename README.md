# Shear Threads — Website

Marketing + storefront site for [Shear Threads](https://shearthreads.com) — custom Greek embroidery and woven lanyards, born at the University of Delaware, shipping nationwide.

Built with Next.js (App Router) + Tailwind CSS v4. Fully static — every route prerenders. Checkout stays on the existing Shopify store; product cards deep-link to live product pages, so no cart/checkout code lives here.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, featured products, categories, custom-order pitch |
| `/shop` | All products with category filter tabs (supports `?category=fraternity` etc.) |
| `/about` | Brand story, values, orgs stitched for |
| `/custom` | Custom order process + inquiry CTAs (links to store contact form & Instagram) |

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Design system

See `DESIGN-BRIEF.md` for the full "Varsity Stitch" design system: palette (drawn from the ST monogram logo), Anton + Archivo typography, and the stitch/patch utility classes in `app/globals.css`.

Product data lives in `lib/products.ts` — update prices/images/links there when the Shopify catalog changes.
