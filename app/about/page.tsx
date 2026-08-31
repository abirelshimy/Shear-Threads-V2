import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "About",
  description:
    "Shear Threads started at the University of Delaware, inside its Greek community. Founder-led, small-batch custom embroidery and woven lanyards, stitched in Delaware and shipped nationwide.",
};

/** Static, module-level so nothing is recomputed per render. */
const ORGS: readonly { org: string; letters: string }[] = Array.from(
  new Map(
    products
      .filter((p) => p.category !== "apparel")
      .map((p) => [p.org, { org: p.org, letters: p.letters }]),
  ).values(),
);

/** Accent rotation for the Greek monograms - mirrors the brand strip. */
const LETTER_COLORS = [
  "text-gold",
  "text-brick",
  "text-cyan",
  "text-purple",
] as const;

const HALLMARKS = ["Founder-led", "Small-batch", "Ships nationwide"] as const;

const CRAFT = [
  "Digitized by hand.",
  "Stitched in small batches.",
  "Checked before it ships.",
] as const;

const VALUES = [
  {
    numeral: "01",
    rule: "border-orange",
    tone: "text-orange",
    title: "Stitched, not printed",
    copy: "Thread has weight. It catches the light, survives the wash, and still reads sharp four semesters later. Vinyl peels. Letters shouldn’t.",
  },
  {
    numeral: "02",
    rule: "border-cyan",
    tone: "text-cyan",
    title: "By Greek life, for Greek life",
    copy: "We know what a probate looks like, why line numbers matter, and how fast a chapter needs forty lanyards. You never have to explain it twice.",
  },
  {
    numeral: "03",
    rule: "border-purple",
    tone: "text-purple",
    title: "Delaware roots, national reach",
    copy: "Still stitched out of Delaware. Boxed and shipped to chapters, lines, and national boards clear across the USA.",
  },
] as const;

const delay = (seconds: number) =>
  ({ "--rise-delay": `${seconds}s` }) as CSSProperties;

export default function AboutPage() {
  return (
    <>
      {/* ───────────────── Hero ───────────────── */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <p className="eyebrow anim-rise">Our story</p>

        <h1
          className="font-display anim-rise mt-6 max-w-3xl text-5xl md:text-7xl lg:text-8xl"
          style={delay(0.08)}
        >
          Thread by thread
        </h1>

        <p
          className="anim-rise mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
          style={delay(0.16)}
        >
          Shear Threads started at the University of Delaware, inside its Greek
          community. Chapters wanted their letters done right: not pressed on,
          not peeling by spring. So we stitched them.
        </p>

        <ul
          className="anim-rise mt-10 flex flex-wrap items-center gap-y-2"
          style={delay(0.24)}
        >
          {HALLMARKS.map((item, i) => (
            <li
              key={item}
              className="text-[0.72rem] font-semibold tracking-[0.22em] text-muted uppercase"
            >
              {item}
              {i < HALLMARKS.length - 1 ? (
                <span aria-hidden="true" className="mx-3 text-brick">
                  ·
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <hr className="hairline" />
      </div>

      {/* ───────────────── The long version ───────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          label="The long version"
          title="Born in a college town"
          align="left"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="font-display max-w-xl text-2xl leading-snug md:text-3xl">
              It began at the University of Delaware, in the middle of its Greek
              community: crossings, probates, tables on the Green. Letters
              everywhere, and almost nowhere to get them stitched properly.
            </p>

            <div className="mt-12 space-y-10">
              <article>
                <h3 className="font-display text-xl md:text-2xl">
                  She still runs it
                </h3>
                <p className="mt-3 max-w-xl leading-relaxed text-muted">
                  Shear Threads is founder-led and small-batch. She takes the
                  order, digitizes the artwork, sets the thread colors, and runs
                  the machine. Nothing gets handed off to a faceless print shop,
                  because there isn’t one.
                </p>
              </article>

              <hr className="stitch-hr max-w-xl" />

              <article>
                <h3 className="font-display text-xl md:text-2xl">
                  Word moves the way it does in Greek life
                </h3>
                <p className="mt-3 max-w-xl leading-relaxed text-muted">
                  Line by line, chapter by chapter, campus by campus. What
                  started as orders for orgs down the street now leaves Delaware
                  for chapters across the country.
                </p>
              </article>
            </div>
          </div>

          <aside className="border-t border-seam pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
            <p className="eyebrow text-muted">How it works</p>

            <ul className="mt-6 divide-y divide-seam border-y border-seam">
              {CRAFT.map((line) => (
                <li key={line} className="font-display py-4 text-xl md:text-2xl">
                  {line}
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
              Every order goes through the same set of hands, from the first
              mockup to the box on your doorstep.
            </p>
          </aside>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <hr className="hairline" />
      </div>

      {/* ───────────────── Values ───────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          label="What holds"
          title="Three things we don’t bend on"
          align="left"
        />

        <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {VALUES.map((value) => (
            <li
              key={value.numeral}
              className={`border-t-2 pt-6 ${value.rule}`}
            >
              <span
                aria-hidden="true"
                className={`font-display block text-2xl ${value.tone}`}
              >
                {value.numeral}
              </span>
              <h3 className="font-display mt-4 text-xl md:text-2xl">
                {value.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{value.copy}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ───────────────── Orgs we've stitched for ───────────────── */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading
            label="Orgs we’ve stitched for"
            title="Letters we’ve run"
            align="left"
          />

          <ul className="mt-12 flex max-w-4xl flex-wrap items-baseline gap-y-5">
            {ORGS.map(({ org, letters }, i) => (
              <li key={org} className="flex items-baseline">
                <span className="flex items-baseline gap-2.5">
                  <span
                    aria-hidden="true"
                    className={`font-display text-xl tracking-[0.14em] md:text-2xl ${LETTER_COLORS[i % LETTER_COLORS.length]}`}
                  >
                    {letters}
                  </span>
                  <span className="text-[0.7rem] font-semibold tracking-[0.18em] text-muted uppercase">
                    {org}
                  </span>
                </span>
                {i < ORGS.length - 1 ? (
                  <span aria-hidden="true" className="text-seam mx-4 md:mx-5">
                    |
                  </span>
                ) : null}
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-xl leading-relaxed text-muted">
            Not up there yet? That’s just a matter of time.{" "}
            <Link
              href="/custom"
              className="text-ink underline decoration-seam underline-offset-4 transition-colors hover:text-brick hover:decoration-brick"
            >
              Send us your letters.
            </Link>
          </p>
        </div>
      </section>

      {/* ───────────────── CTA row ───────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow">What’s next</p>
            <h2 className="font-display mt-6 max-w-2xl text-3xl md:text-5xl">
              Shop the drop, or start your own.
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-muted">
              Lanyards ready to ship, or a run stitched from scratch for your
              chapter. Either way, it comes off the same machine.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/shop" className="btn-varsity">
              Shop the lanyards
            </Link>
            <Link href="/custom" className="btn-outline text-ink">
              Start a custom order
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
