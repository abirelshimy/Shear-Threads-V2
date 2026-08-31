import type { CSSProperties } from "react";
import type { Product } from "@/lib/products";

export interface ProductCardProps {
  product: Product;
  eager?: boolean;
  riseDelay?: number;
}

export default function ProductCard({
  product,
  eager = false,
  riseDelay,
}: ProductCardProps) {
  const [front, back] = product.images;
  const backIsLifestyle = back?.startsWith("/products/") ?? false;
  const style =
    riseDelay === undefined
      ? undefined
      : ({ "--rise-delay": `${riseDelay}ms` } as CSSProperties);

  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener"
      style={style}
      className="anim-rise group text-ink flex flex-col"
    >
      <div className="bg-warm relative aspect-[3/4] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.025] group-focus-within:scale-[1.025]">
          <img
            src={front}
            alt={product.name}
            width={800}
            height={800}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            className={`h-full w-full object-contain p-5 transition-opacity duration-500 sm:p-7 ${
              back ? "group-hover:opacity-0 group-focus-within:opacity-0" : ""
            }`}
          />
          {back ? (
            <img
              src={back}
              alt=""
              aria-hidden="true"
              width={800}
              height={800}
              loading="lazy"
              decoding="async"
              className={`absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100 ${
                backIsLifestyle ? "object-cover" : "object-contain p-7"
              }`}
            />
          ) : null}
        </div>
      </div>

      <span className="eyebrow text-muted mt-4 leading-tight tracking-[0.16em]">
        {product.org}
      </span>

      <h3 className="mt-2 text-[0.94rem] leading-snug font-medium transition-colors group-hover:text-brick">
        {product.name}
      </h3>

      <span className="text-muted mt-1.5 text-sm">${product.price}</span>

      <span className="sr-only">View product (opens in a new tab)</span>
    </a>
  );
}
