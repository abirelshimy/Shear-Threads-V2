"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { categoryLabels, type Category, type Product } from "@/lib/products";

type Filter = "all" | Category;

interface Tab {
  value: Filter;
  label: string;
}

/** Tab order is deliberate: All → Fraternities → Sororities → Co-ed Orgs → Apparel */
const CATEGORY_ORDER: Category[] = ["fraternity", "sorority", "coed", "apparel"];

const TABS: Tab[] = [
  { value: "all", label: "All" },
  ...CATEGORY_ORDER.map((value) => ({ value, label: categoryLabels[value] })),
];

const CATEGORY_SET: ReadonlySet<string> = new Set<string>(CATEGORY_ORDER);

/** `?category=sorority` → "sorority"; anything unknown falls back to "all". */
function toFilter(raw: string | null): Filter {
  return raw !== null && CATEGORY_SET.has(raw) ? (raw as Category) : "all";
}

/** One pass over the catalog for every tab count. */
function countByFilter(items: readonly Product[]): Record<Filter, number> {
  const counts: Record<Filter, number> = {
    all: items.length,
    fraternity: 0,
    sorority: 0,
    coed: 0,
    apparel: 0,
  };
  for (const item of items) {
    counts[item.category] += 1;
  }
  return counts;
}

export interface ShopGridProps {
  products: Product[];
}

export default function ShopGrid({ products }: ShopGridProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  // The URL is the single source of truth, so filtered views are shareable,
  // bookmarkable, and restored by back/forward.
  const active = toFilter(searchParams.get("category"));
  const setActive = (filter: Filter) => {
    router.replace(filter === "all" ? "/shop" : `/shop?category=${filter}`, {
      scroll: false,
    });
  };

  const counts = countByFilter(products);
  const visible =
    active === "all"
      ? products
      : products.filter((product) => product.category === active);

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* ---- Quiet text filter tabs ---- */}
      <div className="pt-10 md:pt-14">
        <h2 className="sr-only">Filter the catalog</h2>
        <div
          role="group"
          aria-label="Filter products by category"
          className="flex flex-wrap items-center gap-x-8 gap-y-1"
        >
          {TABS.map((tab) => {
            const isActive = tab.value === active;
            return (
              <button
                key={tab.value}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(tab.value)}
                className={`inline-flex min-h-11 cursor-pointer items-center gap-2 border-b-2 text-[0.76rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-200 ${
                  isActive
                    ? "border-brick text-ink"
                    : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {tab.label}
                <span className="tabular-nums text-[0.68rem] font-normal text-muted">
                  {counts[tab.value]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ---- Hairline + live count ---- */}
      <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-seam pt-5">
        <p
          aria-live="polite"
          className="text-[0.72rem] uppercase tracking-[0.2em] text-muted"
        >
          <span className="font-display mr-1.5 align-baseline text-base text-brick">
            {visible.length}
          </span>{" "}
          {visible.length === 1 ? "piece" : "pieces"}{" "}
          {active === "all" ? "in the collection" : `in ${categoryLabels[active]}`}
        </p>
        <p className="text-[0.7rem] uppercase tracking-[0.2em] text-muted">
          Checkout on our secure store
          <span aria-hidden="true"> ↗</span>
        </p>
      </div>

      {/* ---- The collection ---- */}
      {visible.length === 0 ? (
        <div className="mt-12 rounded-3xl bg-surface px-6 py-20 text-center">
          <p className="font-display text-3xl md:text-4xl text-ink">
            Nothing here yet
          </p>
          <p className="mx-auto mt-4 max-w-sm text-muted">
            This section is between drops. Tell us your letters and we’ll stitch
            them.
          </p>
          <Link href="/custom" className="btn-varsity mt-9">
            Request a stitch
          </Link>
        </div>
      ) : (
        <ul className="mt-12 grid list-none grid-cols-1 gap-x-8 gap-y-14 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product, index) => (
            // Keyed by filter so a tab switch replays the staggered rise-in;
            // `grid` stretches the card to the full column + row height.
            <li key={`${active}-${product.slug}`} className="grid">
              <ProductCard
                product={product}
                eager={index < 3}
                riseDelay={Math.min(index, 8) * 60}
              />
            </li>
          ))}
        </ul>
      )}

      {/* ---- Stitch-by-request closing note ---- */}
      <div className="mt-20 mb-24 border-t border-seam pt-10 md:mt-28">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="eyebrow text-muted">By request</p>
            <p className="font-display mt-4 text-2xl md:text-4xl text-balance">
              Don’t see your org? We stitch by request.
            </p>
            <p className="mt-5 max-w-md text-muted">
              Send your letters, colors, and a rough idea. We digitize it, stitch
              it in small batches, and ship it anywhere in the USA.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link href="/custom" className="link-quiet">
              Start a custom order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
