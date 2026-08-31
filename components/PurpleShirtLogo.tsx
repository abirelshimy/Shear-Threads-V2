interface PurpleShirtLogoProps {
  id: string;
  className?: string;
}

export default function PurpleShirtLogo({
  id,
  className = "",
}: PurpleShirtLogoProps) {
  return (
    <svg
      viewBox="0 0 788 856"
      aria-hidden="true"
      focusable="false"
      data-logo-id={id}
      className={className}
    >
      <image
        href="/logo-st-purple-s-black-t-v3.png"
        width="788"
        height="856"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
}
