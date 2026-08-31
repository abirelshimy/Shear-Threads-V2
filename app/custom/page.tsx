import type { CSSProperties } from "react";
import type { Metadata } from "next";
import OrderForm from "@/components/OrderForm";
import SectionHeading from "@/components/SectionHeading";
import { INSTAGRAM_URL } from "@/lib/products";

export const metadata: Metadata = {
  title: "Custom Orders",
  description:
    "Custom embroidery for chapters, lines, crossings, and national boards. Woven lanyards, crewnecks, hoodies, and chapter drops, stitched in Delaware and shipped nationwide.",
};

const OFFERINGS = [
  {
    glyph: "Λ",
    tone: "text-orange",
    title: "Woven lanyards",
    copy: "Your letters woven edge to edge in your colors. The chapter staple, and the thing we run most.",
  },
  {
    glyph: "Σ",
    tone: "text-cyan",
    title: "Crewnecks & hoodies",
    copy: "Embroidered or tackle-twill, front, back, or sleeve. Built for the long walk across campus in February.",
  },
  {
    glyph: "Δ",
    tone: "text-purple",
    title: "Chapter merch drops",
    copy: "One design, one order, the whole chapter covered. Sizes sorted, pieces boxed, shipped together.",
  },
  {
    glyph: "Ψ",
    tone: "text-gold",
    title: "Crossing & big/little gifts",
    copy: "Small runs that carry weight. Line numbers, crossing dates, nicknames: stitched in, not stuck on.",
  },
] as const;

const STEPS = [
  {
    numeral: "01",
    title: "Reach out",
    copy: "Tell us your org, the piece, the quantity, and your colors. Send artwork if you have it. A napkin sketch counts.",
  },
  {
    numeral: "02",
    title: "Approve your mockup",
    copy: "We digitize your design and send it back. Thread colors, placement, sizing: you sign off before a needle moves.",
  },
  {
    numeral: "03",
    title: "We stitch in small batches",
    copy: "Your run goes on the machine here in Delaware and gets checked stitch by stitch on the way out.",
  },
  {
    numeral: "04",
    title: "Ships anywhere in the USA",
    copy: "Packed and out the door: the chapter house, the campus box, or straight to your national conference.",
  },
] as const;

const ASK_FOR = ["Your org", "The piece", "Quantity", "Colors"] as const;

const delay = (seconds: number) =>
  ({ "--rise-delay": `${seconds}s` }) as CSSProperties;

export default function CustomPage() {
  return (
    <>
      {/* ───────────────── Hero ───────────────── */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <p className="eyebrow anim-rise">Custom orders</p>

        <h1
          className="font-display anim-rise mt-6 max-w-3xl text-5xl md:text-7xl lg:text-8xl"
          style={delay(0.08)}
        >
          Let’s stitch your story
        </h1>

        <p
          className="anim-rise mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
          style={delay(0.16)}
        >
          Chapters, lines, crossing gifts, national boards. If you can sketch
          it, we can stitch it.
        </p>

        <div
          className="anim-rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
          style={delay(0.24)}
        >
          <a className="btn-varsity" href="#order-form">
            Start an order request
          </a>
          <a href="#process" className="link-quiet">
            See how it works
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <hr className="hairline" />
      </div>

      {/* ───────────────── What we make ───────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          label="What we make"
          title="What comes off the machine"
          align="left"
        />

        <ul className="mt-14 grid gap-px bg-seam sm:grid-cols-2">
          {OFFERINGS.map((item) => (
            <li key={item.title} className="bg-ivory p-8 md:p-10">
              <span
                aria-hidden="true"
                className={`font-display block text-xl ${item.tone}`}
              >
                {item.glyph}
              </span>
              <h3 className="font-display mt-4 text-2xl md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-3 max-w-sm leading-relaxed text-muted">
                {item.copy}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-xl leading-relaxed text-muted">
          Something not on the list? Ask anyway. Most of what we run started as
          a question.
        </p>
      </section>

      {/* ───────────────── Process ───────────────── */}
      <section id="process" className="scroll-mt-24 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading
            label="The process"
            title="Four steps, start to seam"
            align="left"
          />

          <ol className="mt-14 border-t border-seam">
            {STEPS.map((step) => (
              <li
                key={step.numeral}
                className="grid gap-3 border-b border-seam py-8 md:grid-cols-[4rem_1fr_1.4fr] md:items-baseline md:gap-8 md:py-10"
              >
                <span
                  aria-hidden="true"
                  className={`font-display text-2xl md:text-3xl ${
                    Number(step.numeral) % 2 === 1 ? "text-orange" : "text-cyan"
                  }`}
                >
                  {step.numeral}
                </span>
                <h3 className="font-display text-xl md:text-2xl">
                  {step.title}
                </h3>
                <p className="max-w-xl leading-relaxed text-muted">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─────────── Start your order - the one ink section, with the form ─────────── */}
      <section
        id="order-form"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-28"
      >
        <div className="texture-ink grid gap-12 rounded-3xl px-6 py-16 md:px-14 md:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <p className="eyebrow text-cyan">Orders &amp; inquiries</p>

            <h2 className="font-display mt-6 max-w-2xl text-3xl md:text-5xl">
              Ready when you are
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/70">
              Placing an order or just have a question? Fill out the form for
              all orders &amp; inquiries and we’ll come back with thread colors,
              a mockup, and a price.
            </p>

            <p className="mt-6 max-w-md border-l-2 border-cyan pl-4 text-sm leading-relaxed text-ivory/70">
              Due to high order volume, please allow 24–48 hours for a response.
            </p>

            <ul className="mt-8 flex flex-wrap items-center gap-y-2">
              {ASK_FOR.map((item, i) => (
                <li
                  key={item}
                  className="text-[0.72rem] font-semibold tracking-[0.22em] text-ivory/70 uppercase"
                >
                  {item}
                  {i < ASK_FOR.length - 1 ? (
                    <span aria-hidden="true" className="mx-3 text-cyan">
                      ·
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>

            <hr className="stitch-hr mt-10 w-full max-w-sm opacity-30" />

            <p className="mt-8 max-w-md text-sm leading-relaxed text-ivory/70">
              Prefer to keep it casual? Send us a message on Instagram instead.
              Photos of what you’re picturing welcome.
            </p>

            <a
              className="btn-outline text-ivory hover:border-ivory hover:bg-ivory hover:text-ink mt-6"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener"
            >
              DM @shearthreads_
              <span className="sr-only">(opens in a new tab)</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <OrderForm />
        </div>
      </section>
    </>
  );
}
