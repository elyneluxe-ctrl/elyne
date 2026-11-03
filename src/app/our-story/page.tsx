"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Crisp Champagne Gold (#B99A65) Vector Line Icons matching the reference design
function FabricsIcon() {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      stroke="#B99A65"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10"
      aria-hidden="true"
    >
      {/* Woven diamond crosshatch pattern */}
      <path d="M22 4L4 22l18 18 18-18L22 4z" />
      <path d="M13 13l18 18" />
      <path d="M31 13L13 31" />
      <path d="M22 4v36" />
      <path d="M4 22h36" />
    </svg>
  );
}

function CraftsmanshipIcon() {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      stroke="#B99A65"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10"
      aria-hidden="true"
    >
      {/* Tailor shears / scissors */}
      <circle cx="12" cy="32" r="5" />
      <circle cx="32" cy="32" r="5" />
      <path d="M16 28L34 8" />
      <path d="M28 28L10 8" />
    </svg>
  );
}

function ComfortIcon() {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      stroke="#B99A65"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10"
      aria-hidden="true"
    >
      {/* Heraldic Comfort Shield with Checkmark */}
      <path d="M22 6L9 11v11c0 9 6 15 13 18 7-3 13-9 13-18V11L22 6z" />
      <path d="M16 22l4 4 8-8" />
    </svg>
  );
}

function StyleIcon() {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      stroke="#B99A65"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10"
      aria-hidden="true"
    >
      {/* Timeless Style Infinity Loop */}
      <path d="M14 28c-4.4 0-8-2.7-8-6s3.6-6 8-6c5.2 0 8.5 6 10 6s4.8-6 10-6c4.4 0 8 2.7 8 6s-3.6 6-8 6c-5.2 0-8.5-6-10-6s-4.8 6-10 6z" />
    </svg>
  );
}

import { useCart } from "@/context/CartContext";

export default function OurStoryPage() {
  const { t, isRtl } = useCart();

  const brandPillars = [
    {
      title: t.ourStory.pillars.fabrics.title,
      description: t.ourStory.pillars.fabrics.desc,
      icon: <FabricsIcon />
    },
    {
      title: t.ourStory.pillars.craft.title,
      description: t.ourStory.pillars.craft.desc,
      icon: <CraftsmanshipIcon />
    },
    {
      title: t.ourStory.pillars.comfort.title,
      description: t.ourStory.pillars.comfort.desc,
      icon: <ComfortIcon />
    },
    {
      title: t.ourStory.pillars.style.title,
      description: t.ourStory.pillars.style.desc,
      icon: <StyleIcon />
    }
  ];

  return (
    <main className="min-h-screen bg-[#F9F5EF] flex flex-col selection:bg-[#1F2A24] selection:text-[#F9F5EF]">
      {/* Global Navigation */}
      <Navbar />

      {/* ==================================================
          SECTION 1: HERO SECTION — FULL-WIDTH EDITORIAL
          ================================================== */}
      <section className="relative w-full min-h-[410px] md:h-[420px] lg:h-[430px] mt-[64px] sm:mt-[76px] md:mt-[86px] bg-[#221A12] overflow-hidden flex items-center">
        {/* Model Photography placed on side based on RTL/LTR */}
        <div
          className={`absolute inset-y-0 ${
            isRtl ? "left-0" : "right-0"
          } w-full sm:w-[72%] md:w-[65%] lg:w-[60%] h-full`}
        >
          <Image
            src="/images/story-hero-model-hq.jpg"
            alt="Emirati male model wearing premium white Kandura and Ghutra"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 65vw"
            className={`object-cover object-top ${
              isRtl ? "sm:object-[30%_top]" : "sm:object-[70%_top]"
            }`}
          />
          {/* Subtle blending gradient from edge of image */}
          <div
            className={`absolute inset-y-0 ${
              isRtl ? "right-0 bg-gradient-to-l" : "left-0 bg-gradient-to-r"
            } w-32 sm:w-56 from-[#221A12] to-transparent pointer-events-none`}
          />
        </div>

        {/* Global Dark Gradient for Text legibility */}
        <div
          className={`absolute inset-0 ${
            isRtl
              ? "bg-gradient-to-l from-[#221A12] via-[#221A12]/95 sm:via-[#221A12]/80 md:via-[#221A12]/35 to-transparent"
              : "bg-gradient-to-r from-[#221A12] via-[#221A12]/95 sm:via-[#221A12]/80 md:via-[#221A12]/35 to-transparent"
          } pointer-events-none`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/15 pointer-events-none" />

        {/* Content Container */}
        <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-14 relative z-10 py-10 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className={`max-w-xl ${isRtl ? "text-right" : "text-left"}`}
          >
            {/* Eyebrow */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-3.5">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#B99A65]">
                {t.ourStory.heroEyebrow}
              </span>
              <span className="w-10 sm:w-14 h-[1px] bg-[#B99A65]/60" />
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[0.14em] uppercase text-white leading-[1.12] mb-5">
              {t.ourStory.heroTitle}
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#F9F5EF]/85 font-light leading-relaxed max-w-md mb-8">
              {t.ourStory.heroDesc}
            </p>

            {/* CTA Button */}
            <div>
              <Link
                href="/collections/emirati-thobes"
                className="inline-flex items-center space-x-3 rtl:space-x-reverse px-6 sm:px-7 py-3 border border-white/60 hover:border-white text-white text-[11px] sm:text-xs font-medium tracking-[0.22em] uppercase transition-all duration-300 hover:bg-white/10 group"
              >
                <span>{t.ourStory.heroCta}</span>
                <span className="transform group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300">
                  {isRtl ? "←" : "→"}
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          SECTION 2: HERITAGE SECTION — TWO-COLUMN EDITORIAL
          ================================================== */}
      <section className="relative py-16 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-14 bg-[#F9F5EF] border-b border-[#EAE3D4]/80 overflow-hidden">
        {/* Arabian Architectural Wall & Palm Shadow Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <Image
            src="/images/arabian-background-1.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-[0.09] filter contrast-[0.95]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F9F5EF]/95 via-[#F9F5EF]/80 to-[#F9F5EF]/95" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Architectural Sandstone Corridors */}
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 28 : -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 w-full"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden shadow-sm bg-[#EDE6D8]">
                <Image
                  src="/images/story-heritage-arches-hq.jpg"
                  alt="Emirati Heritage Architecture and Traditional Arches"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>

            {/* Heritage Narrative */}
            <motion.div
              initial={{ opacity: 0, x: isRtl ? -28 : 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`lg:col-span-6 flex flex-col justify-center ${
                isRtl ? "text-right" : "text-left"
              }`}
            >
              {/* Eyebrow */}
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#B99A65]">
                  {t.ourStory.heritageEyebrow}
                </span>
                <span className="w-12 h-[1px] bg-[#B99A65]/50" />
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[0.14em] uppercase text-[#1F2A24] leading-[1.16] mb-6">
                {t.ourStory.heritageTitle}
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#4A504B] font-light leading-relaxed max-w-lg">
                {t.ourStory.heritageDesc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 3: BRAND VALUES — FOUR PILLARS STRIP
          ================================================== */}
      <section className="bg-[#FAF6F0] border-b border-[#EAE3D4]/80 py-12 sm:py-16 px-6 sm:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-[#E2D8C6]/80">
            {brandPillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center px-4 sm:px-6 py-6 sm:py-2 first:pt-0 last:pb-0 sm:first:pt-2 sm:last:pb-2"
              >
                {/* Champagne Gold Icon */}
                <div className="mb-4 flex items-center justify-center">
                  {pillar.icon}
                </div>

                {/* Pillar Heading */}
                <h3 className="text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-[#1F2A24] mb-2">
                  {pillar.title}
                </h3>

                {/* Short Description */}
                <p className="text-[11px] sm:text-xs text-[#5A605C] font-light leading-relaxed max-w-[210px]">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 4: PHILOSOPHY SECTION — SIGNATURE DARK SECTION
          ================================================== */}
      <section className="relative bg-[#1F2A24] text-[#F9F5EF] overflow-hidden">
        {/* Subtle Desert Courtyard Overlay on Forest Green */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <Image
            src="/images/arabian-background-2.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[center_top] opacity-[0.05] mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F2A24] via-transparent to-[#1F2A24]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[460px] lg:min-h-[500px] relative z-10">
          {/* Editorial Content */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col justify-center px-8 sm:px-14 lg:px-20 py-16 sm:py-20 lg:py-24 z-10 ${
              isRtl ? "text-right" : "text-left"
            }`}
          >
            {/* Eyebrow */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#B99A65]">
                {t.ourStory.philosophyEyebrow}
              </span>
              <span className="w-12 h-[1px] bg-[#B99A65]/50" />
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[0.14em] uppercase text-white leading-[1.18] mb-6">
              {t.ourStory.philosophyTitle}
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#F9F5EF]/85 font-light leading-relaxed max-w-md">
              {t.ourStory.philosophyDesc}
            </p>
          </motion.div>

          {/* Close-up of Premium White Kandura Collar */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[360px] lg:min-h-full w-full bg-[#18201B] overflow-hidden"
          >
            <Image
              src="/images/story-philosophy-collar-hq.jpg"
              alt="Close-up of premium white Kandura collar, single-needle stitching and fabric texture"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transform hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
          </motion.div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
