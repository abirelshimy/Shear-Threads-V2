"use client";

import { useEffect, useState } from "react";
import HeroClassic from "@/components/heroes/HeroClassic";
import HeroKinetic from "@/components/heroes/HeroKinetic";

const VARIANTS = [
  { id: "classic", label: "Classic" },
  { id: "kinetic", label: "Kinetic" },
] as const;

type VariantId = (typeof VARIANTS)[number]["id"];

const STORAGE_KEY = "st-hero-variant";

function isVariantId(value: string | null): value is VariantId {
  return VARIANTS.some((variant) => variant.id === value);
}

export default function HeroSwitcher() {
  const [variant, setVariant] = useState<VariantId>("classic");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isVariantId(stored)) setVariant(stored);
    } catch {
      // localStorage unavailable — keep the default.
    }
  }, []);

  const select = (id: VariantId) => {
    setVariant(id);
    try {
      window.localStorage.setItem(STORAGE_KEY, id);
    } catch {
      // Non-fatal.
    }
  };

  return (
    <>
      {variant === "classic" && <HeroClassic />}
      {variant === "kinetic" && <HeroKinetic />}

      <div className="hero-selector" role="group" aria-label="Hero variation preview selector">
        <span className="hero-selector-label" aria-hidden="true">
          Hero
        </span>
        {VARIANTS.map((option) => (
          <button
            key={option.id}
            type="button"
            aria-pressed={variant === option.id}
            className="hero-selector-btn"
            onClick={() => select(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </>
  );
}
