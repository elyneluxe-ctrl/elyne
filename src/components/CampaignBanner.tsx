"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function CampaignBanner() {
  const { t, isRtl } = useCart();

  return (
    <section className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] bg-[#2A231C] overflow-hidden flex items-center">
      {/* Background Architectural Campaign Photograph with subtle sunlight courtyard depth */}
      <div className="absolute inset-0 w-full h-full">
        {/* Underlayer: Arabian Desert Courtyard Texture (Gentle 18% Opacity) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/arabian-background-2.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-[0.18] mix-blend-luminosity"
          />
        </div>

        <Image
          src="/images/campaign-banner-hq.jpg"
          alt="ELYNE LUXE Campaign - Timeless By Tradition"
          fill
          sizes="100vw"
          className="object-cover object-[center_35%] brightness-[0.88] scale-100 transform hover:scale-102 transition-transform duration-1000 ease-out relative z-10"
        />
        {/* Overlays to enhance text contrast based on RTL/LTR direction */}
        <div
          className={`absolute inset-0 z-20 ${
            isRtl
              ? "bg-gradient-to-l from-black/90 via-black/55 to-transparent"
              : "bg-gradient-to-l from-black/85 via-black/45 to-transparent"
          }`}
        />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 via-transparent to-black/25" />
      </div>

      {/* Editorial Content */}
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex ${
          isRtl ? "justify-start" : "justify-end"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className={`max-w-md sm:max-w-lg text-white ${
            isRtl ? "text-right" : "text-left"
          }`}
        >
          <span className="inline-block text-[10px] sm:text-xs text-[#B99A65] tracking-[0.25em] font-medium uppercase mb-2">
            {t.campaign.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold leading-[1.15] tracking-[0.12em] uppercase text-white mb-2 sm:mb-3">
            {t.campaign.titlePart1}
            <br />
            {t.campaign.titlePart2}
          </h2>
          <p className="text-xs sm:text-sm text-[#F9F5EF]/85 font-light leading-relaxed mb-6 sm:mb-8">
            {t.campaign.desc}
          </p>

          <a
            href="#best-sellers"
            className="inline-flex items-center space-x-3 rtl:space-x-reverse px-6 sm:px-8 py-3.5 border border-[#B99A65] text-[#F9F5EF] text-[11px] sm:text-xs tracking-[0.2em] font-medium uppercase hover:bg-[#B99A65] hover:text-[#1F2A24] transition-all duration-300 group shadow-md"
          >
            <span>{t.campaign.cta}</span>
            {isRtl ? (
              <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1.5 transition-transform duration-300" />
            ) : (
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            )}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
