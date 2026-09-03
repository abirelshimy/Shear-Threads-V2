import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

function rise(ms: number): CSSProperties {
  return { "--rise-delay": `${ms}ms` } as CSSProperties;
}

export default function HeroClassic() {
  return (
    <section className="px-5 pt-6 md:px-8 lg:px-12">
      <div className="hero-stage mx-auto max-w-[1240px] overflow-hidden border-b border-seam">
        <p className="hero-eyebrow eyebrow anim-rise absolute top-5 left-0 z-20" style={rise(0)}>
          Custom apparel printing and embroidery
        </p>

        <h1
          className="hero-title font-display"
          aria-label="Where Memories Meet Thread"
        >
          <span className="hero-word" style={rise(90)}>Where</span>
          <span className="hero-word" style={rise(180)}>Memories</span>
          <span className="hero-word hero-title-accent" style={rise(270)}>Meet</span>
          <span className="hero-word" style={rise(360)}>Thread</span>
        </h1>

        <div className="hero-gallery anim-rise" style={rise(160)}>
          <div className="hero-gallery-main">
            <Image
              src="/hero/hero-model-braids-african-american-v3.png"
              alt="African American model wearing a custom printed Shear Threads sweatshirt"
              fill
              preload
              sizes="(min-width: 1024px) 36rem, 66vw"
              className="object-cover object-center"
            />
          </div>

          <div className="hero-gallery-side">
            <div>
              <Image
                src="/hero/hero-machine-purple-stitch-v2.png"
                alt="Embroidery machine stitching purple thread into grey fabric"
                fill
                sizes="(min-width: 1024px) 14rem, 30vw"
                className="object-cover"
              />
            </div>
            <div>
              <Image
                src="/hero/instagram-apparel.jpg"
                alt="Custom embroidered sweatshirt detail"
                fill
                sizes="(min-width: 1024px) 14rem, 30vw"
                className="object-cover"
              />
            </div>
            <div>
              <Image
                src="/hero/instagram-chapter-order.jpg"
                alt="Finished custom chapter apparel"
                fill
                sizes="(min-width: 1024px) 14rem, 30vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="hero-copy anim-rise" style={rise(230)}>
          <p className="max-w-[20rem] text-sm leading-relaxed md:text-base">
            Woven lanyards, embroidered apparel, and chapter drops designed
            around the memories
            <br className="hidden md:block" />
            your organization keeps.
          </p>
          <Link href="/shop" className="btn-ink mt-7">
            Shop the collection
          </Link>
        </div>
      </div>
    </section>
  );
}
