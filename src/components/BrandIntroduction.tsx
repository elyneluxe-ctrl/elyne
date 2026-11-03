"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { ArabianGeometricWatermark } from "./ArabianGeometricMotif";

export default function BrandIntroduction() {
  const { t, isRtl } = useCart();

  return (
    <section className="relative bg-[#F9F5EF] text-[#1F2A24] pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 border-b border-[#EBE5D8]/80 overflow-hidden">
      {/* Background Style A — Arabian Architectural Wall & Palm Shadow (High Clarity) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="/images/arabian-background-1.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_30%] opacity-55 filter saturate-[0.95] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9F5EF]/65 via-[#F9F5EF]/35 to-[#F9F5EF]/75" />
      </div>

      {/* Subtle Arabian Geometric Watermark */}
      <ArabianGeometricWatermark opacity={0.03} />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-14">
          {/* Left Column: Eyebrow + Regal Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="md:w-[48%] shrink-0"
          >
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-3.5">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#B99A65]">
                {t.brandIntro.eyebrow}
              </span>
              <span className="w-10 sm:w-14 h-[1px] bg-[#B99A65]/50" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.16] tracking-[0.14em] uppercase text-[#1F2A24]">
              {t.brandIntro.headlinePart1}
              <br />
              {t.brandIntro.headlinePart2}
            </h2>
          </motion.div>

          {/* Right Column: Editorial Paragraph with border accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:w-[48%]"
          >
            <p className="text-sm sm:text-base text-[#4A524D] leading-relaxed font-light tracking-[0.03em] border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#B99A65]/50 pl-5 sm:pl-6 rtl:pl-0 rtl:pr-5 rtl:sm:pr-6 py-1">
              {t.brandIntro.paragraph}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
