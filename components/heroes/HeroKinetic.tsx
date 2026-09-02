import Image from "next/image";
import Link from "next/link";

const STRIP_IMAGES = [
  { src: "/hero/new-model.png", alt: "Model wearing a custom embroidered Shear Threads sweatshirt" },
  { src: "/hero/instagram-stitching.jpg", alt: "Embroidery machine stitching a custom garment" },
  { src: "/variation/lanyard-lifestyle.png", alt: "Purple woven lanyard worn outdoors" },
  { src: "/hero/instagram-chapter-order.jpg", alt: "Finished custom chapter apparel" },
  { src: "/hero/instagram-apparel.jpg", alt: "Custom embroidered sweatshirt detail" },
  { src: "/hero/purple-family-reunion-shirts.png", alt: "Coordinated purple family-reunion T-shirts" },
];

export default function HeroKinetic() {
  return (
    <section className="hero-kinetic px-5 md:px-8 lg:px-12" aria-label="Custom apparel printing and embroidery">
      <div className="mx-auto max-w-[1240px]">
        <p className="eyebrow anim-rise">Custom apparel printing and embroidery</p>

        <h1 className="hk-title font-display" aria-label="Where memories meet thread">
          <span className="hk-line">
            <span className="hk-word" style={{ "--hk-delay": "80ms" } as React.CSSProperties}>Where</span>
            <span className="hk-word" style={{ "--hk-delay": "200ms" } as React.CSSProperties}>memories</span>
          </span>
          <span className="hk-line">
            <span className="hk-word hk-word-accent" style={{ "--hk-delay": "320ms" } as React.CSSProperties}>meet</span>
            <span className="hk-word" style={{ "--hk-delay": "440ms" } as React.CSSProperties}>thread</span>
          </span>
        </h1>

        <svg
          className="hk-stitch"
          viewBox="0 0 1200 12"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="hk-stitch-path"
            d="M0 6 H1200"
            fill="none"
            stroke="var(--st-brick)"
            strokeWidth="2"
            strokeDasharray="14 10"
          />
        </svg>

        <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
          <p className="anim-rise max-w-sm text-sm leading-relaxed md:text-base" style={{ "--rise-delay": "700ms" } as React.CSSProperties}>
            Woven lanyards, embroidered apparel, and chapter drops designed
            around the memories your organization keeps.
          </p>
          <div className="anim-rise flex flex-wrap items-center gap-6" style={{ "--rise-delay": "820ms" } as React.CSSProperties}>
            <Link href="/shop" className="btn-ink">
              Shop the collection
            </Link>
            <Link href="/custom" className="link-quiet">
              Start a custom order
            </Link>
          </div>
        </div>
      </div>

      <div className="hk-strip anim-rise" style={{ "--rise-delay": "900ms" } as React.CSSProperties}>
        {STRIP_IMAGES.map((image, index) => (
          <div key={image.src} className="hk-strip-item">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              preload={index === 0}
              sizes="(min-width: 768px) 17vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
