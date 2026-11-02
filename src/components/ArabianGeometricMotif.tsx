import React from "react";

// Subtle Arabesque / 8-point geometric rosette lattice background watermark
export function ArabianGeometricWatermark({
  className = "",
  opacity = 0.04
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        style={{ opacity }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="arabian-rosette-pattern"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            {/* Minimalist modern 8-point star geometry */}
            <path
              d="M30 6 L36 18 L48 18 L38 26 L42 38 L30 30 L18 38 L22 26 L12 18 L24 18 Z"
              fill="none"
              stroke="#B99A65"
              strokeWidth="0.8"
            />
            {/* Intersecting architectural grid lines */}
            <line x1="0" y1="30" x2="60" y2="30" stroke="#B99A65" strokeWidth="0.4" />
            <line x1="30" y1="0" x2="30" y2="60" stroke="#B99A65" strokeWidth="0.4" />
            <line x1="0" y1="0" x2="60" y2="60" stroke="#B99A65" strokeWidth="0.3" strokeDasharray="2,2" />
            <line x1="60" y1="0" x2="0" y2="60" stroke="#B99A65" strokeWidth="0.3" strokeDasharray="2,2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#arabian-rosette-pattern)" />
      </svg>
    </div>
  );
}

// Minimalist architectural pointed arch divider
export function ArabianArchDivider({
  className = "",
  gold = true
}: {
  className?: string;
  gold?: boolean;
}) {
  const strokeColor = gold ? "#B99A65" : "#1F2A24";
  return (
    <div className={`flex items-center justify-center space-x-3 rtl:space-x-reverse ${className}`} aria-hidden="true">
      <span className="w-8 sm:w-12 h-[1px] bg-[#B99A65]/40" />
      <svg
        viewBox="0 0 24 16"
        fill="none"
        className="w-5 h-3.5"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Subtle pointed arch curve */}
        <path d="M2 15 C2 7, 7 2, 12 1 C17 2, 22 7, 22 15" />
      </svg>
      <span className="w-8 sm:w-12 h-[1px] bg-[#B99A65]/40" />
    </div>
  );
}

// Subtle Islamic 8-point geometric corner star badge
export function ArabianStar({ className = "w-3 h-3 text-[#B99A65]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
