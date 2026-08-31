export interface SectionHeadingProps {
  label?: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Tiny letterspaced eyebrow over a big sentence-case Oswald headline.
 *
 * The eyebrow colour follows the `--label-color` custom property when a parent
 * sets one (e.g. `[--label-color:var(--st-cyan)]` on the ink section) and
 * otherwise falls back to brick, the working accent.
 */
export default function SectionHeading({
  label,
  title,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col ${
        centered ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {label ? (
        <span className="eyebrow text-[color:var(--label-color,var(--st-brick))]">
          {label}
        </span>
      ) : null}

      <h2 className="font-display mt-4 max-w-4xl text-3xl text-balance md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
