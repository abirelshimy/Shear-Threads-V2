export interface WordmarkProps {
  className?: string;
}

/**
 * Purple wordmark with a black center star.
 */
export default function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <span
      className={`font-display inline-flex items-center leading-none font-semibold tracking-[0.18em] uppercase ${className}`}
    >
      <span className="text-[#3f1b63]">Shear</span>
      <span
        aria-hidden="true"
        className="text-ink mx-[0.35em] inline-block text-[0.55em] leading-none"
      >
        ✦
      </span>
      <span className="text-[#3f1b63]">Threads</span>
    </span>
  );
}
