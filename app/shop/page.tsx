import { Suspense } from "react";
import type { Metadata } from "next";
import ShopGrid from "@/components/ShopGrid";
import { products } from "@/lib/products";

export const metadata: Metadata = { title: "Shop" };

const TAB_SKELETONS = ["w-16", "w-28", "w-24", "w-24", "w-20"];
const CARD_SKELETONS = [0, 1, 2, 3, 4, 5];

/** Prerendered stand-in while the search-param-aware grid hydrates. */
function ShopGridFallback() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <p className="sr-only" role="status">
        Loading the collection…
      </p>
      <div
        className="flex flex-wrap items-center gap-x-8 gap-y-1 pt-10 md:pt-14"
        aria-hidden="true"
      >
        {TAB_SKELETONS.map((width) => (
          <div key={width} className="flex min-h-11 items-center">
            <div className={`${width} h-3 bg-surface`} />
          </div>
        ))}
      </div>
      <div className="mt-6 border-t border-seam pt-5" aria-hidden="true">
        <div className="h-3 w-40 bg-surface" />
      </div>
      <ul
        className="mt-12 grid list-none grid-cols-1 gap-x-8 gap-y-14 p-0 sm:grid-cols-2 lg:grid-cols-3"
        aria-hidden="true"
      >
        {CARD_SKELETONS.map((slot) => (
          <li key={slot}>
            <div className="aspect-square w-full rounded-2xl bg-surface" />
            <div className="mt-5 h-2.5 w-24 bg-surface" />
            <div className="mt-3 h-3.5 w-3/4 bg-surface" />
            <div className="mt-3 h-2.5 w-16 bg-surface" />
          </li>
        ))}
      </ul>
      <div className="h-24" />
    </div>
  );
}

export default function ShopPage() {
  return (
    <>
      {/* ---- Ivory page header ---- */}
      <section className="max-w-6xl mx-auto px-6 pt-16 md:pt-24">
        <p className="eyebrow anim-rise">The shop</p>
        <h1 className="font-display mt-5 max-w-3xl text-5xl md:text-7xl anim-rise [--rise-delay:0.08s]">
          Every stitch in stock
        </h1>
        <p className="mt-6 max-w-xl text-muted anim-rise [--rise-delay:0.16s]">
          Woven lanyards, $18–22. Stitched in small batches, shipped nationwide,
          and checked out on our secure store.
        </p>
        <hr className="hairline mt-12 md:mt-16" />
      </section>

      {/* ---- Filterable collection ---- */}
      <Suspense fallback={<ShopGridFallback />}>
        <ShopGrid products={products} />
      </Suspense>
    </>
  );
}
