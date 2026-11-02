"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "white" | "dark";
  layout?: "horizontal" | "stacked" | "emblem-only" | "wordmark-only";
  className?: string;
  priority?: boolean;
}

export default function Logo({
  variant = "white",
  layout = "horizontal",
  className = "",
  priority = false
}: LogoProps) {
  if (layout === "stacked") {
    return (
      <div className={`relative flex flex-col items-center select-none ${className}`}>
        <div className="relative w-full aspect-[2726/942]">
          <Image
            src={variant === "white" ? "/images/elyne-luxe-logo-white.png" : "/images/elyne-luxe-logo-dark.png"}
            alt="ELYNE LUXE — A Signature of Elegance"
            fill
            priority={priority}
            className="object-contain object-center"
          />
        </div>
      </div>
    );
  }

  if (layout === "emblem-only") {
    return (
      <div className={`relative aspect-[1678/550] select-none ${className}`}>
        <Image
          src={variant === "white" ? "/images/elyne-luxe-emblem-white.png" : "/images/elyne-luxe-emblem-dark.png"}
          alt="ELYNE LUXE Emblem"
          fill
          priority={priority}
          className="object-contain"
        />
      </div>
    );
  }

  if (layout === "wordmark-only") {
    return (
      <div className={`relative aspect-[2726/390] select-none ${className}`}>
        <Image
          src={variant === "white" ? "/images/elyne-luxe-wordmark-white.png" : "/images/elyne-luxe-wordmark-dark.png"}
          alt="ELYNE LUXE"
          fill
          priority={priority}
          className="object-contain"
        />
      </div>
    );
  }

  // Default: Horizontal Lockup (Emblem + Wordmark)
  return (
    <div className={`relative aspect-[1548/140] select-none ${className}`}>
      <Image
        src={variant === "white" ? "/images/elyne-luxe-horizontal-white.png" : "/images/elyne-luxe-horizontal-dark.png"}
        alt="ELYNE LUXE"
        fill
        priority={priority}
        className="object-contain"
      />
    </div>
  );
}
