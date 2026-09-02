import Image from "next/image";
import Link from "next/link";
import HeroSwitcher from "@/components/HeroSwitcher";
import ProductCard from "@/components/ProductCard";
import { INSTAGRAM_URL, products, type Product } from "@/lib/products";

const productsBySlug = new Map(products.map((product) => [product.slug, product]));

const FEATURED_SLUGS = [
  "sigma-iota-alpha-lanyard",
  "sigma-lambda-beta-lanyard",
  "chi-upsilon-sigma-lanyard",
  "alpha-kappa-psi-lanyard",
];

const featured: Product[] = FEATURED_SLUGS.map((slug) =>
  productsBySlug.get(slug),
).filter((product): product is Product => product !== undefined);

const VALUES = [
  { number: "01", title: "Small-batch", body: "Made in focused runs, not anonymous bulk." },
  { number: "02", title: "Thread-first", body: "Woven and embroidered for lasting color." },
  { number: "03", title: "Chapter-ready", body: "Built for drops, gifts, and line moments." },
  { number: "04", title: "Nationwide", body: "Packed in Newark and shipped across the USA." },
];

const GREEK_LETTERS = [
  "ΑΚΨ",
  "ΑΨΛ",
  "ΒΚΣ",
  "ΧΥΣ",
  "ΣΙΑ",
  "ΛΣΥ",
  "ΛΠΥ",
  "ΛΘΑ",
  "ΛΥΛ",
  "ΜΣΥ",
  "ΩΦΧ",
  "ΣΒΡ",
  "ΣΛΒ",
];

const TESTIMONIALS = [
  {
    quote: "The colors came out exactly how our chapter pictured them, and every detail felt intentional.",
    name: "Chapter order",
    place: "Newark, Delaware",
  },
  {
    quote: "From the first sketch to the finished stitch, the process felt personal and easy.",
    name: "Custom embroidery",
    place: "Made for your letters",
  },
  {
    quote: "The kind of piece you keep using long after the event is over.",
    name: "Woven lanyards",
    place: "Shipped nationwide",
  },
];

export default function Home() {
  return (
    <>
      {/* ======================= HERO (Classic / Kinetic, selector) ======================= */}
      <HeroSwitcher />

      {/* ========================= VALUE STRIP ========================= */}
      <section className="bg-warm border-y border-seam px-5 md:px-8 lg:px-12" aria-label="Why Shear Threads">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 md:grid-cols-4">
          {VALUES.map((item) => (
            <article
              key={item.number}
              className="border-seam px-0 py-8 even:border-l even:pl-5 md:border-l md:px-7 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-brick text-sm">{item.number}</span>
                <h2 className="text-sm font-semibold">{item.title}</h2>
              </div>
              <p className="text-muted mt-2 max-w-[14rem] text-xs leading-relaxed md:text-sm">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ====================== GREEK LETTER MARQUEE ====================== */}
      <section className="letters-marquee" aria-label="Organizations we create for">
        <div className="marquee-track">
          {[0, 1].map((set) => (
            <div
              key={set}
              className="letters-marquee-set"
              aria-hidden={set === 1 ? "true" : undefined}
            >
              {GREEK_LETTERS.map((letters) => (
                <span
                  key={`${set}-${letters}`}
                  className="text-paper"
                >
                  {letters}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ==================== FEATURED COLLECTIONS ==================== */}
      <section className="editorial-section mx-auto max-w-[1240px] px-5 md:px-8 lg:px-12">
        <div className="grid items-end gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div className="pb-2">
            <span className="eyebrow">Featured collections</span>
            <h2 className="font-display mt-5 max-w-xl text-5xl leading-[0.92] uppercase md:text-7xl">
              The pieces behind the moments.
            </h2>
            <p className="text-muted mt-7 max-w-sm leading-relaxed">
              From everyday woven straps to limited chapter apparel, each run
              begins with your colors and ends with something worth keeping.
            </p>
            <Link href="/shop" className="btn-outline-v2 mt-8">
              Explore everything
            </Link>
          </div>

          <div className="grid grid-cols-2 items-end gap-4 md:gap-6">
            <Link href="/shop" className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                <Image
                  src="/variation/lanyard-lifestyle.png"
                  alt="Purple woven lanyard worn outdoors"
                  fill
                  sizes="(min-width: 1024px) 23rem, 48vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <span className="font-display text-xl uppercase">Woven essentials</span>
                <span aria-hidden="true">↗</span>
              </div>
            </Link>

            <Link href="/custom" className="group md:mb-16">
              <div className="relative aspect-[3/4] overflow-hidden bg-surface">
                <Image
                  src="/hero/instagram-apparel.jpg"
                  alt="Custom embroidered sweatshirt detail"
                  fill
                  sizes="(min-width: 1024px) 20rem, 48vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <span className="font-display text-xl uppercase">Custom apparel</span>
                <span aria-hidden="true">↗</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ======================= POPULAR PRODUCTS ====================== */}
      <section className="mx-auto max-w-[1240px] px-5 pb-24 md:px-8 md:pb-36 lg:px-12">
        <div className="flex items-end justify-between gap-8 border-b border-seam pb-6">
          <div>
            <span className="eyebrow">Popular now</span>
            <h2 className="font-display mt-3 text-4xl uppercase md:text-6xl">Fresh from the machine</h2>
          </div>
          <Link href="/shop" className="link-quiet hidden sm:inline-flex">
            View all
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-6 lg:grid-cols-4">
          {featured.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              eager={index === 0}
              riseDelay={index * 70}
            />
          ))}
        </div>
      </section>

      {/* ======================== PROCESS BANNER ======================= */}
      <section className="relative min-h-[34rem] overflow-hidden bg-ink text-paper md:min-h-[42rem]">
        <Image
          src="/variation/made-close-to-home-embroidery.png"
          alt="Clean embroidery machine stitching a dark-purple design into cream fabric"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,20,19,0.7),rgba(20,20,19,0.08)_65%)]" />
        <div className="relative mx-auto flex min-h-[34rem] max-w-[1240px] items-end px-5 py-8 md:min-h-[42rem] md:px-8 md:py-12 lg:px-12">
          <div className="bg-paper text-ink max-w-sm p-7 md:p-10">
            <span className="eyebrow">Made close to home</span>
            <h2 className="font-display mt-4 text-4xl leading-[0.95] uppercase md:text-5xl">
              Your idea, translated into thread.
            </h2>
            <p className="text-muted mt-5 leading-relaxed">
              We digitize, sample, stitch, and check every custom run from our
              Newark workspace.
            </p>
            <Link href="/custom" className="btn-ink mt-7">
              Start a custom order
            </Link>
          </div>
        </div>
      </section>

      {/* ========================== STORY BAND ========================= */}
      <section className="bg-warm editorial-section overflow-hidden">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 md:px-8 lg:grid-cols-[0.75fr_1.25fr_0.75fr] lg:px-12">
          <div className="relative hidden aspect-[4/5] overflow-hidden lg:block lg:-rotate-3">
            <Image
              src="/hero/purple-family-reunion-shirts.png"
              alt="Coordinated purple family-reunion T-shirts"
              fill
              sizes="18rem"
              className="object-cover"
            />
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our point of view</span>
            <h2 className="font-display mt-5 text-5xl leading-[0.9] uppercase md:text-7xl">
              Less merch. More meaning.
            </h2>
            <p className="text-muted mx-auto mt-7 max-w-lg leading-relaxed">
              Shear Threads started inside University of Delaware Greek life
              with one machine and a simple goal: make chapter pieces feel as
              personal as the memories attached to them.
            </p>
            <Link href="/about" className="btn-outline-v2 mt-8">
              Read our story
            </Link>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-3/4 overflow-hidden lg:w-full lg:rotate-3">
            <Image
              src="/hero/mom-life-tshirt.png"
              alt="Black embroidered Mom Life T-shirt"
              fill
              sizes="(min-width: 1024px) 18rem, 70vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===================== ASYMMETRIC COLLECTIONS ================== */}
      <section className="editorial-section mx-auto max-w-[1240px] px-5 md:px-8 lg:px-12">
        <div className="mb-10 flex items-end justify-between gap-8">
          <div>
            <span className="eyebrow">Top collections</span>
            <h2 className="font-display mt-3 text-5xl uppercase md:text-7xl">Made to be seen</h2>
          </div>
          <Link href="/shop" className="link-quiet hidden md:inline-flex">Shop all</Link>
        </div>

        <div className="collection-mosaic">
          <Link href="/shop" className="collection-tile collection-tile-main group">
            <Image
              src="/products/alpha-kappa-psi-2.png"
              alt="Blue-and-gold Alpha Kappa Psi lanyard hanging from a tan backpack"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <span>Woven lanyards</span>
          </Link>

          <Link href="/custom" className="collection-tile group">
            <Image
              src="/hero/instagram-chapter-order.jpg"
              alt="Finished custom chapter sweatshirts"
              fill
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <span>Chapter orders</span>
          </Link>

          <Link href="/custom" className="collection-tile group">
            <Image
              src="/hero/instagram-apparel.jpg"
              alt="Detailed embroidery on a custom sweatshirt"
              fill
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <span>Custom stitch</span>
          </Link>
        </div>
      </section>

      {/* ========================= TESTIMONIALS ======================== */}
      <section className="bg-warm border-y border-seam py-20 md:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 md:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
          <div>
            <span className="eyebrow">Why they come back</span>
            <h2 className="font-display mt-4 max-w-sm text-5xl leading-[0.92] uppercase md:text-6xl">
              Care is part of the craft.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <blockquote key={testimonial.name} className="bg-paper flex min-h-64 flex-col p-6 md:p-7">
                <span className="font-display text-brick text-lg">0{index + 1}</span>
                <p className="mt-10 text-base leading-relaxed">“{testimonial.quote}”</p>
                <footer className="text-muted mt-auto pt-8 text-xs leading-relaxed uppercase tracking-[0.12em]">
                  {testimonial.name}<br />{testimonial.place}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== INSTAGRAM / SIGN-OFF =================== */}
      <section className="editorial-section mx-auto max-w-[1240px] px-5 md:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <span className="eyebrow">Follow the thread</span>
            <h2 className="font-display mt-4 text-5xl leading-[0.92] uppercase md:text-7xl">
              New work lands on Instagram first.
            </h2>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="btn-ink mt-8">
              @shearthreads_
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src="/hero/instagram-color-block-shirt.png" alt="Green-and-black custom color-block shirt" fill sizes="24vw" className="object-cover" />
            </div>
            <div className="relative mt-10 aspect-[3/4] overflow-hidden">
              <Image src="/hero/instagram-pink-ribbon-beanies.png" alt="Embroidered pink-ribbon knit beanies" fill sizes="24vw" className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src="/hero/instagram-rod-father-shirts.png" alt="Custom Rodfather fishing shirts" fill sizes="24vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
