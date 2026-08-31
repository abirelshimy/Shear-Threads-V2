import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center gap-6 px-6 py-24">
      <span className="eyebrow">Dropped a stitch</span>
      <h1 className="font-display text-6xl md:text-8xl">
        This page unraveled.
      </h1>
      <p className="text-muted max-w-md text-lg">
        Nothing is stitched at this address. The good stuff is one click away.
      </p>
      <div className="mt-2 flex flex-wrap gap-6">
        <Link href="/" className="btn-varsity">
          Back home
        </Link>
        <Link href="/shop" className="link-quiet self-center">
          Shop lanyards
        </Link>
      </div>
    </section>
  );
}
