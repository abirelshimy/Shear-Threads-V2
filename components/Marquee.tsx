export interface MarqueeProps {
  items: string[];
  className?: string;
}

/**
 * Quiet word ribbon between hairlines. The track holds the item list twice and
 * the keyframe travels -50%, so the loop is seamless; the second copy is hidden
 * from assistive tech.
 */
export default function Marquee({ items, className = "" }: MarqueeProps) {
  return (
    <div
      className={`border-seam overflow-hidden border-y py-4 ${className}`}
    >
      <div className="marquee-track">
        <MarqueeRun items={items} />
        <MarqueeRun items={items} duplicate />
      </div>
    </div>
  );
}

function MarqueeRun({
  items,
  duplicate = false,
}: {
  items: string[];
  duplicate?: boolean;
}) {
  return (
    <ul
      aria-hidden={duplicate ? "true" : undefined}
      className="text-muted flex shrink-0 items-center gap-10 pr-10 text-[0.76rem] tracking-[0.24em] uppercase"
    >
      {items.map((item, i) => (
        <li key={item} className="flex shrink-0 items-center gap-10">
          <span className="whitespace-nowrap">{item}</span>
          <span
            aria-hidden="true"
            className={`block h-1 w-1 shrink-0 ${i % 2 === 0 ? "bg-orange" : "bg-cyan"}`}
          />
        </li>
      ))}
    </ul>
  );
}
