"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PurpleShirtLogo from "@/components/PurpleShirtLogo";
import Wordmark from "@/components/Wordmark";
import { categoryLabels, products } from "@/lib/products";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
];

function isActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLocaleLowerCase();
  const matches = products.filter((product) => {
    if (!normalizedQuery) return true;

    const searchable = [
      product.name,
      product.org,
      product.letters,
      categoryLabels[product.category],
    ]
      .join(" ")
      .toLocaleLowerCase();

    return searchable.includes(normalizedQuery);
  });

  // Escape-to-close + scroll lock: all DOM subscriptions, so an effect is the
  // right tool. Nothing here is derivable during render.
  useEffect(() => {
    if (!open && !searchOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setSearchOpen(false);
      }
    };
    const previousOverflow = document.body.style.overflow;
    // The dialog overlay lives inside <header>; main and footer are siblings,
    // so they must be inerted here to keep focus inside the open menu.
    const outside = document.querySelectorAll("main, footer");

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    outside.forEach((el) => el.setAttribute("inert", ""));

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      outside.forEach((el) => el.removeAttribute("inert"));
    };
  }, [open, searchOpen]);

  const openSearch = () => {
    setOpen(false);
    setSearchOpen(true);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <header className="sticky top-0 z-50">
      <div
        // Painted under the open overlay (z-50 vs z-60) - inert removes its
        // controls (hamburger, logo, CTA) from the tab order while open.
        inert={open || searchOpen || undefined}
        className="bg-ivory"
      >
        {/* Announcement rule - the one dark band in the shell */}
        <div className="bg-ink text-ivory">
          <p className="mx-auto max-w-[1240px] px-5 py-2.5 text-center text-[0.64rem] tracking-[0.2em] uppercase md:px-8 lg:px-12">
            Custom orders open · ships nationwide from Newark, Delaware
          </p>
        </div>

        <div className="border-seam border-b">
          <div className="mx-auto flex max-w-[1336px] items-center gap-6 px-5 py-4 md:px-8 lg:px-12">
            <Link
              href="/"
              className="flex shrink-0 items-center justify-center gap-3"
              onClick={() => setOpen(false)}
            >
              <PurpleShirtLogo id="header" className="brand-logo-header text-[#3f1b63]" />
              <Wordmark className="translate-y-[2px] text-lg md:text-xl lg:text-2xl" />
            </Link>

            <nav
              aria-label="Primary"
              className="ml-auto hidden items-center gap-9 lg:flex"
            >
              {NAV.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-[0.76rem] tracking-[0.18em] uppercase transition-colors hover:text-brick ${
                      active ? "text-brick" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <button
              type="button"
              onClick={openSearch}
              aria-haspopup="dialog"
              className="border-seam ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors hover:border-brick hover:text-brick lg:ml-0 lg:w-auto lg:gap-2 lg:rounded-none lg:border-0 lg:px-1"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-[1.15rem] w-[1.15rem]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="10.75" cy="10.75" r="6.75" />
                <path d="m16 16 4 4" />
              </svg>
              <span className="sr-only lg:not-sr-only lg:text-[0.7rem] lg:font-semibold lg:tracking-[0.18em] lg:uppercase">
                Search
              </span>
            </button>

            <Link
              href="/custom"
              className="btn-ink hidden shrink-0 lg:inline-flex"
            >
              Start a Custom Order
            </Link>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls={open ? "mobile-menu" : undefined}
              className="border-seam flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border lg:hidden"
            >
              <span className="sr-only">Open menu</span>
              <span aria-hidden="true" className="bg-ink h-px w-5" />
              <span aria-hidden="true" className="bg-ink h-px w-5" />
              <span aria-hidden="true" className="bg-ink h-px w-5" />
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="bg-ivory text-ink fixed inset-0 z-60 flex flex-col overflow-y-auto overscroll-contain lg:hidden"
        >
          <div className="border-seam flex items-center justify-between border-b px-6 py-4">
            <Wordmark className="text-lg" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              autoFocus
              className="border-seam flex h-11 w-11 items-center justify-center rounded-full border text-2xl leading-none"
            >
              <span className="sr-only">Close menu</span>
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-1 flex-col px-6">
            {NAV.map((item, index) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  style={
                    { "--rise-delay": `${index * 60}ms` } as CSSProperties
                  }
                  className={`font-display anim-rise border-seam border-b py-6 text-4xl transition-colors hover:text-brick sm:text-5xl ${
                    active ? "text-brick" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col items-start gap-4 px-6 pt-10 pb-12">
            <span className="eyebrow text-muted">
              Have something specific in mind?
            </span>
            <Link
              href="/custom"
              onClick={() => setOpen(false)}
              className="btn-varsity w-full"
            >
              Start a Custom Order
            </Link>
          </div>
        </div>
      ) : null}

      {searchOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-search-title"
          className="bg-ivory text-ink fixed inset-0 z-70 overflow-y-auto overscroll-contain"
        >
          <div className="border-seam border-b">
            <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-4 md:px-8 lg:px-12">
              <div>
                <p className="eyebrow">Find your letters</p>
                <h2 id="product-search-title" className="font-display mt-1 text-2xl">
                  Search the collection
                </h2>
              </div>
              <button
                type="button"
                onClick={closeSearch}
                className="border-seam flex h-11 w-11 items-center justify-center rounded-full border text-2xl leading-none transition-colors hover:border-brick hover:text-brick"
              >
                <span className="sr-only">Close search</span>
                <span aria-hidden="true">×</span>
              </button>
            </div>
          </div>

          <div className="mx-auto max-w-[1240px] px-5 pt-10 pb-16 md:px-8 md:pt-14 lg:px-12">
            <label htmlFor="product-search-input" className="sr-only">
              Search by product, organization, category, or Greek letters
            </label>
            <div className="border-ink flex items-center gap-4 border-b-2 pb-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                className="text-brick shrink-0"
                style={{ width: 32, height: 32, minWidth: 32, maxWidth: 32 }}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <circle cx="10.75" cy="10.75" r="6.75" />
                <path d="m16 16 4 4" />
              </svg>
              <input
                id="product-search-input"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                autoFocus
                autoComplete="off"
                placeholder="Try “Sigma” or “lanyard”"
                className="font-display placeholder:text-muted/45 min-w-0 flex-1 bg-transparent text-2xl outline-none md:text-3xl"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="text-muted shrink-0 text-[0.68rem] font-semibold tracking-[0.18em] uppercase transition-colors hover:text-brick"
                >
                  Clear
                </button>
              ) : null}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-muted text-[0.7rem] tracking-[0.18em] uppercase">
                Search by product, organization, category, or Greek letters
              </p>
              <p aria-live="polite" className="text-muted text-sm">
                {normalizedQuery
                  ? `${matches.length} ${matches.length === 1 ? "match" : "matches"}`
                  : `${products.length} pieces in the collection`}
              </p>
            </div>

            {matches.length > 0 ? (
              <ul className="mt-10 grid list-none grid-cols-1 gap-x-8 gap-y-3 p-0 md:grid-cols-2">
                {matches.map((product) => (
                  <li key={product.slug}>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener"
                      onClick={closeSearch}
                      className="group border-seam flex items-center gap-5 border-b py-4"
                    >
                      <div className="bg-warm relative h-24 w-20 shrink-0 overflow-hidden md:h-28 md:w-24">
                        <Image
                          src={product.images[0]}
                          alt=""
                          fill
                          sizes="96px"
                          className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="eyebrow text-muted truncate leading-tight tracking-[0.14em]">
                          {product.org}
                        </p>
                        <h3 className="mt-2 leading-snug transition-colors group-hover:text-brick">
                          {product.name}
                        </h3>
                        <p className="text-muted mt-1 text-sm">${product.price}</p>
                      </div>
                      <span
                        aria-hidden="true"
                        className="text-brick shrink-0 text-xl transition-transform group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="bg-warm mt-10 px-6 py-16 text-center md:py-20">
                <p className="font-display text-3xl md:text-4xl">
                  No matching stitches
                </p>
                <p className="text-muted mx-auto mt-4 max-w-md">
                  We may still be able to make it. Send us your organization,
                  colors, and idea for a custom piece.
                </p>
                <Link href="/custom" onClick={closeSearch} className="btn-varsity mt-8">
                  Request a custom item
                </Link>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}
