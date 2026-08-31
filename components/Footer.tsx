import Link from "next/link";
import PurpleShirtLogo from "@/components/PurpleShirtLogo";
import { INSTAGRAM_URL, STORE_URL } from "@/lib/products";

const EXPLORE = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/custom", label: "Custom Orders" },
];

const CONNECT = [
  { href: INSTAGRAM_URL, label: "Instagram" },
  { href: STORE_URL, label: "Live store" },
];

const linkClass =
  "text-muted text-sm transition-colors hover:text-brick";

const columnHeadingClass =
  "eyebrow text-muted";

export default function Footer() {
  return (
    <footer className="bg-warm border-seam border-t">
      <div className="mx-auto max-w-[1240px] px-5 pt-20 pb-10 md:px-8 md:pt-28 lg:px-12">
        <div className="grid gap-14 md:grid-cols-[1.6fr_1fr_1fr]">
          <div className="flex flex-col items-start gap-4 md:-mt-4 lg:-mt-6">
            <PurpleShirtLogo id="footer" className="brand-logo-footer text-[#3f1b63]" />
            <p className="text-muted max-w-sm leading-relaxed">
              Custom apparel printing and embroidery
            </p>
            <p className="eyebrow text-muted">
              Newark, DE <span className="text-orange">→</span> the USA
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-5">
            <h2 className={columnHeadingClass}>Explore</h2>
            <ul className="flex flex-col gap-3">
              {EXPLORE.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-5">
            <h2 className={columnHeadingClass}>Connect</h2>
            <ul className="flex flex-col gap-3">
              {CONNECT.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener"
                    className={linkClass}
                  >
                    {item.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
              <li>
                <Link href="/custom#order-form" className={linkClass}>
                  Contact
                </Link>
              </li>
            </ul>
            <p className="text-muted max-w-[15rem] text-sm leading-relaxed">
              Checkout happens on our secure Shopify store.
            </p>
          </div>
        </div>

        {/* Ghost wordmark - a quiet fashion-house sign-off */}
        <div aria-hidden="true" className="mt-20 flex justify-center overflow-hidden opacity-35">
          <p className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.86] font-semibold tracking-[0.01em] whitespace-nowrap text-center uppercase select-none">
            <span className="text-brick">Shear</span>{" "}
            <span className="text-brick">Threads</span>
          </p>
        </div>

        <div className="border-seam mt-10 flex flex-col gap-2 border-t border-b py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted text-sm">© 2026 Shear Threads</p>
          <p className="text-muted text-sm">
            Stitched with pride at the University of Delaware
          </p>
        </div>
      </div>
    </footer>
  );
}
