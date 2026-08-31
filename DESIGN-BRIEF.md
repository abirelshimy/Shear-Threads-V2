# Shear Threads — Design & Build Brief v2.1 ("Atelier Varsity")

> **v2.1 blend (Tapstitch influence):** the editorial v2 bones stay, with a modern-commerce layer folded in — `.btn-varsity`/`.btn-outline` are now **pills** (999px), product image mats and skeletons are `rounded-2xl`, hero/ink CTA panels are **inset `rounded-3xl` blocks** inside the content column (not full-bleed), display weight is Oswald 600, and the ground brightened to `#fcfaf6`. Full-bleed `surface` bands (founder, orgs) stay square; hairlines, eyebrows, and sentence case are unchanged. Greek monogram strips (colored letters, `|` separators, gold→brick→cyan→purple rotation) live in the home hero and the About orgs band, sourced from `products[].letters`.

**This replaces v1.** The varsity-maximalist look (patches, zigzags, tilts, hard shadows, glows, ALL-CAPS Anton) is retired. The new register is **elegant, editorial, flat** — modeled on quiet premium e-commerce (reference: novamedicalwearables.com): warm ivory ground, ONE working accent, sharp corners, zero box-shadows, sentence-case condensed headlines, tiny letterspaced eyebrows, generous whitespace, hairline dividers. The collegiate soul survives in the typography (condensed Oswald), the crest logo used sparingly, and a single running-stitch hairline motif.

Business context unchanged: custom Greek embroidery born at the University of Delaware, woven lanyards $18–22, ships nationwide, checkout on the live Shopify store, founder-led (never invent her name/dates, never fabricate quotes).

## Foundation (already updated — do not recreate)

- `app/fonts.ts` — **Fraunces** (`--font-display`, variable with `opsz` axis, used at weight 600 — warm optical serif display; replaced Oswald at the user's pick) + **Archivo** (`--font-body`, crisp UI/body for buttons, labels, forms, prose).
- `app/globals.css` v2 — new tokens and utilities:
  - Colors (Tailwind): `ivory` (page bg), `surface` (alt panels/image mats), `ink` (warm near-black), `muted` (secondary text), `seam` (hairlines), `brick` (**the** accent), plus micro-accents `orange`, `cyan`, `gold`, `purple` — micro means: a 4px rule, a small glyph, a hover. Never large fills.
  - `.font-display` — Oswald 500, tight leading, **sentence case** (no forced uppercase; do NOT add `uppercase` to headings).
  - `.eyebrow` / `.label-tag` (same style): 11px, 0.26em tracking, uppercase, brick. Use `text-muted` variant via Tailwind when quieter.
  - `.btn-varsity` (flat brick → ink on hover), `.btn-outline` (1px current-color → ink fill on hover), `.link-quiet` (small tracked uppercase underlined link).
  - `.stitch-hr` (1px dashed hairline — the one embroidery nod), `.hairline` (1px solid).
  - `.texture-canvas` (plain ivory), `.texture-ink` (flat ink — use for AT MOST one section per page).
  - `.marquee-track` (40s, pauses on hover), `.anim-rise` (subtle 14px rise; stagger via `--rise-delay`).
  - Focus: brick ring on light, cyan on ink — global. Radius: **0 everywhere. No rounded corners, no box-shadows, no rotations, no glows, anywhere.**
- `lib/products.ts`, `public/logo*.png` unchanged.

## Layout language

- Ivory dominant. `surface` for image mats and alternate panels. At most ONE ink section per page.
- Headlines: Oswald sentence case, big — hero `text-5xl md:text-7xl lg:text-8xl`; section h2 `text-3xl md:text-5xl`. Eyebrow above every section heading.
- Section pattern (Nova-style): eyebrow top-left + h2 below it + optional `.link-quiet` action top-right on the same baseline row.
- Whitespace is the luxury: sections `py-20 md:py-28`; content `max-w-6xl mx-auto px-6` (hero and image bands may go full-bleed).
- Dividers: `.hairline` between sections, `.stitch-hr` only where a craft nod is wanted. No zigzags.
- Motion: only `.anim-rise` staggers on the hero and product grids, and gentle image hover states (opacity/scale-[1.02] with slow ease). Nothing bobs, tilts, or floats.
- The embroidered crest logo: small in header (~36px), and as an art object on a `surface` mat where a visual is needed. Never with glows.

## Component contracts (Agent A rebuilds; same names/exports/props as v1)

```tsx
// components/Header.tsx — default export, no props, client (mobile menu).
// Structure: (1) announcement bar: bg-ink text-ivory, one line, text-[0.68rem] tracking-[0.22em] uppercase:
//   "Custom orders open — ships nationwide from Newark, Delaware".
// (2) main bar on ivory with .hairline bottom: crest logo (36px) + "Shear Threads" wordmark
//   (font-display font-semibold uppercase tracking-[0.18em] — the wordmark is the ONE uppercase display use),
//   nav right: Home/Shop/About/Custom Orders as small tracked uppercase text links (text-[0.76rem] tracking-[0.18em],
//   active = text-brick, hover = text-brick), then "Shop the Store" as .link-quiet external.
// Mobile: keep ALL existing a11y behavior (dialog role, aria-modal, inert on main/footer + top bar, Escape, scroll lock,
//   toggle, overflow-y-auto) — restyle overlay: bg-ivory, ink text, big Oswald sentence-case links, hairline separators.

// components/Footer.tsx — server. IVORY footer, .hairline top (not ink).
// Grid: brand column (crest + short line + "Newark, DE → the USA" in muted), Explore nav, Connect
// (Instagram, live store, contact — external links keep the sr-only new-tab note). Bottom row between hairlines:
// "© 2026 Shear Threads" + "Stitched with pride at the University of Delaware" in muted small text.
// Oversized muted wordmark moment welcome (e.g. text-[18vw] leading-none text-surface select-none) like premium fashion footers.

// components/ProductCard.tsx — server. SAME props: { product: Product; eager?: boolean; riseDelay?: number }
// Flat editorial card, no border, no shadow, no tilt: image in aspect-square bg-surface mat (object-contain, generous p-6),
// CSS-only hover/focus-within swap to images[1] kept, plain <img> kept (never next/image for Shopify CDN).
// Below, left-aligned stack: org as .eyebrow text-muted (tracking tightened to 0.18em ok), name (Archivo font-medium),
// price in muted. A "View product" .link-quiet line with sr-only "(opens in a new tab)". Whole card is the external <a>.
// Hover: image scale-[1.02] duration-500, name → text-brick.

// components/SectionHeading.tsx — server. SAME props { label?, title, align?, className? }.
// label → .eyebrow; title → h2 .font-display text-3xl md:text-5xl, sentence case. Keep --label-color hook.

// components/Marquee.tsx — server. SAME props { items, className? }.
// Quiet ribbon: .hairline top+bottom, py-4, items in text-[0.76rem] tracking-[0.24em] uppercase text-muted,
// separator a small "·" or 4px square in brick. Duplicate run aria-hidden. No bg fill.
```

## Pages & file ownership (STRICT — same as v1)

### Agent A — shell + home
Files: the five components above, `app/page.tsx`, and `app/layout.tsx` (keep skip link/main/Header/Footer/JSON-LD/preconnect; body stays `texture-canvas`).

Home, in order:
1. **Hero** — ivory, `pt-16 md:pt-24 pb-20`, split: left = eyebrow "Custom Greek embroidery", h1 sentence case e.g. "Stitched for the letters you love." (a single word may be `text-brick`), one short Archivo paragraph in muted, CTA row: `.btn-varsity` "Shop the collection" → /shop + `.link-quiet` "Our story" → /about. Right = crest logo (logo-st-purple-s-black-t-v3.png, ~380–460px) centered on a full-height `surface` mat — flat, like a pressed crest plate; `eager`/`preload`. Staggered `.anim-rise`.
2. **Word ribbon** — Marquee: "Woven, not printed · Small batches · Chapter drops · Crossing gifts · Newark, DE → the USA · Est. at UDel".
3. **The collection** — eyebrow "The collection" / h2 "Fresh off the machine" / `.link-quiet` "Shop all" right. 4 ProductCards (sigma-iota-alpha, sigma-lambda-beta, chi-upsilon-sigma, alpha-kappa-psi; first eager) in a 2/4-col grid, generous gaps.
4. **Craft triplet** — hairline-topped: eyebrow "Why woven" + 3 columns, each h3 (Oswald, text-xl) + short muted body: "Stitched, not printed" / "Small batches, checked by hand" / "Anywhere in the USA".
5. **Founder band** — surface bg, editorial statement (NOT a quotation): large Oswald text-2xl md:text-4xl statement about being founded inside UDel Greek life and still founder-run, attribution line "Founder-led — Newark, Delaware" in eyebrow-muted, `.link-quiet` "Read our story" → /about. May pair with crest at small scale.
6. **Custom orders** — THE one ink section: eyebrow (gold or cyan on ink), h2 "Your letters. Your colors. Your stitch.", numbered editorial list 01/02/03 (number in Oswald text-brick→ on ink use `text-cyan`, title + one line each), `.btn-varsity` (on ink give it `bg-ivory text-ink hover:bg-cyan hover:text-ink`? No — keep brick bg, it passes on ink) "Start a custom order" → /custom.
7. **Instagram** — eyebrow "@shearthreads_", h2 "Come say hi", one line, `.btn-outline` "Follow on Instagram" external.

### Agent B — shop
Files: `app/shop/page.tsx`, `components/ShopGrid.tsx`. Keep ALL v1 behavior (Suspense + skeleton, URL-driven filter via router.replace, aria-pressed, counts, aria-live, empty state, 44px targets) — restyle only:
- Page header on ivory (not ink): eyebrow "The shop" + h1 sentence case "Every stitch in stock" + muted line, hairline below.
- Tabs: quiet text buttons (uppercase 0.76rem tracked, `min-h-11`): inactive `text-muted hover:text-ink`; active `text-ink` with a 2px solid brick underline (`border-b-2 border-brick`) — no pills, no fills, no translate.
- Count line stays; skeleton restyle to flat surface blocks (no .patch).
- Closing note: hairline, statement + `.link-quiet` to /custom.

### Agent C — about + custom
Files: `app/about/page.tsx`, `app/custom/page.tsx`. Same content truths, restyled flat/editorial:
- **/about**: ivory hero (eyebrow "Our story", h1 "Thread by thread", intro); story in a 2-col editorial grid (large lead paragraph + body columns, hairlines); values as 3 hairline-topped columns (no patches); orgs-we've-stitched-for as a wrapped list of muted tracked-uppercase names separated by "·" on a surface band; CTA row.
- **/custom**: ivory hero (eyebrow "Custom orders", h1 "Let's stitch your story"); offerings as a 2×2 hairline grid (title + line each, tiny Greek glyph in a micro-accent color allowed at small scale); process as numbered 01–04 editorial list (Oswald numbers in brick); the ONE ink panel: "Start your order" with `.btn-varsity` → CONTACT_URL and `.btn-outline text-ivory` → INSTAGRAM_URL (keep sr-only new-tab notes), quote-turnaround line in muted-on-ink (`text-ivory/70`).

## Engineering rules (unchanged from v1)

Server components by default ("use client" only Header + ShopGrid); no useEffect beyond Header's existing subscriptions; next/link internal, `target="_blank" rel="noopener"` + sr-only note external; plain `<img>` w/ dims for Shopify CDN, next/image for local logo; semantic landmarks, one h1/page, alt text; AA contrast — muted #6f675c on ivory passes for body; brick on ivory passes at all sizes; `text-ivory/70` on ink passes; never gold/orange/cyan for small text on ivory. Everything responsive 360–1440. Must pass `npx tsc --noEmit`.

## Voice

Same facts, calmer delivery. Short declarative sentences, sentence case. Craft words stay ("stitched", "woven", "letters", "chapter") — drop the swagger and exclamation. Think garment label, not pep rally.
