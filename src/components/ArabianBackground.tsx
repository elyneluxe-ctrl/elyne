"use client";

import React from "react";
import Image from "next/image";

interface ArabianBackgroundProps {
  variant?: "style-a" | "style-b" | "subtle-plaster" | "forest-geometric";
  opacity?: number;
  className?: string;
  children?: React.ReactNode;
  parallax?: boolean;
  overlayGradient?: string;
  blur?: boolean;
}

/**
 * Reusable Luxury Arabian Background Component
 * 
 * - Style A: Arabian Architectural Wall (Warm ivory wall, geometric lattice, arches, soft palm shadows)
 * - Style B: Desert Sunlight Courtyard (Warm sandstone, natural sunlight, palm shadows, minimalist architectural depth)
 * - Subtle Plaster: Warm sandstone plaster texture with low visual presence
 * - Forest Geometric: For rich Forest Green sections with understated gold geometry
 */
export default function ArabianBackground({
  variant = "style-a",
  opacity = 0.12,
  className = "",
  children,
  overlayGradient,
  blur = false
}: ArabianBackgroundProps) {
  const getAsset = () => {
    switch (variant) {
      case "style-a":
        return "/images/arabian-background-1.webp";
      case "style-b":
        return "/images/arabian-background-2.webp";
      case "subtle-plaster":
        return "/images/arabian-texture-subtle.webp";
      default:
        return "/images/arabian-background-1.webp";
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Background Architectural Layer */}
      {variant !== "forest-geometric" ? (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <Image
            src={getAsset()}
            alt=""
            fill
            sizes="100vw"
            quality={85}
            priority={false}
            className={`object-cover object-center ${
              blur ? "blur-[1.5px]" : ""
            } transition-opacity duration-700`}
            style={{ opacity }}
          />

          {/* Optional Tone-Matching Gradient Overlay */}
          {overlayGradient && (
            <div className={`absolute inset-0 ${overlayGradient}`} />
          )}
        </div>
      ) : (
        /* Forest Green Subtle Geometric Pattern overlay */
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(185, 154, 101, 0.08) 0%, transparent 70%)`
            }}
          />
        </div>
      )}

      {/* Foreground Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
