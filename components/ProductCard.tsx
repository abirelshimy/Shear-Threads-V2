"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import type { Product } from "@/lib/products";

export interface ProductCardProps {
  product: Product;
  eager?: boolean;
  riseDelay?: number;
}

const PRODUCT_IMAGE_SIZES =
  "(max-width: 639px) calc(100vw - 3rem), (max-width: 1023px) calc(50vw - 3rem), 352px";

export default function ProductCard({
  product,
  eager = false,
  riseDelay,
}: ProductCardProps) {
  const [showAlternate, setShowAlternate] = useState(false);
  const [front, back] = product.images;
  const backIsLifestyle = back?.startsWith("/products/") ?? false;
  const style =
    riseDelay === undefined
      ? undefined
      : ({ "--rise-delay": `${riseDelay}ms` } as CSSProperties);

  const externalLinkProps = {
    href: product.url,
    target: "_blank",
    rel: "noopener",
  } as const;

  return (
    <article style={style} className="anim-rise group text-ink flex flex-col">
      <div className="bg-warm relative aspect-[3/4] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 ease-out sm:group-hover:scale-[1.025] sm:group-focus-within:scale-[1.025]">
          <Image
            src={front}
            alt={product.name}
            fill
            sizes={PRODUCT_IMAGE_SIZES}
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : "auto"}
            className={`object-contain p-5 transition-opacity duration-500 sm:p-7 ${
              back
                ? `${
                    showAlternate ? "opacity-0" : "opacity-100"
                  } sm:opacity-100 sm:group-hover:opacity-0 sm:group-focus-within:opacity-0`
                : ""
            }`}
          />
          {back ? (
            <Image
              src={back}
              alt=""
              fill
              sizes={PRODUCT_IMAGE_SIZES}
              loading="lazy"
              className={`transition-opacity duration-500 ${
                backIsLifestyle ? "object-cover" : "object-contain p-7"
              } ${
                showAlternate ? "opacity-100" : "opacity-0"
              } sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100`}
            />
          ) : null}
        </div>

        {back ? (
          <button
            type="button"
            aria-pressed={showAlternate}
            aria-label={
              showAlternate
                ? `Show the product-only image for ${product.name}`
                : `Show ${product.name} in use`
            }
            onClick={() => setShowAlternate((current) => !current)}
            className="absolute inset-0 z-10 cursor-pointer sm:hidden"
          >
            <span className="bg-ink/85 absolute right-3 bottom-3 px-3 py-2 text-[0.62rem] font-semibold tracking-[0.16em] text-white uppercase">
              {showAlternate ? "Product view" : "View in use"}
            </span>
          </button>
        ) : (
          <a
            {...externalLinkProps}
            aria-label={`Shop ${product.name} (opens in a new tab)`}
            className="absolute inset-0 z-10"
          />
        )}

        {back ? (
          <a
            {...externalLinkProps}
            aria-label={`Shop ${product.name} (opens in a new tab)`}
            className="absolute inset-0 z-10 hidden sm:block"
          />
        ) : null}
      </div>

      <a {...externalLinkProps} className="flex flex-1 flex-col">
        <span className="eyebrow text-muted mt-4 leading-tight tracking-[0.16em]">
          {product.org}
        </span>

        <h3 className="mt-2 text-[0.94rem] leading-snug font-medium transition-colors group-hover:text-brick">
          {product.name}
        </h3>

        <span className="text-muted mt-1.5 text-sm">${product.price}</span>

        <span className="sr-only">View product (opens in a new tab)</span>
      </a>
    </article>
  );
}
