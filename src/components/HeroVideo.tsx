"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { ArabianGeometricWatermark } from "./ArabianGeometricMotif";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const { t, isRtl } = useCart();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setVideoError(true);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-[92vh] sm:h-[95vh] lg:h-screen min-h-[640px] max-h-[1080px] bg-[#161F1A] overflow-hidden flex items-center">
      {/* Background Media: Video with Poster Fallback */}
      <div className="absolute inset-0 w-full h-full">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster="/images/elyne-hero-desktop-hq.jpg"
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover object-top brightness-[0.88] transition-opacity duration-1000 scale-100"
          >
            <source src="/videos/elyne-hero-desktop.mp4" type="video/mp4" media="(min-width: 768px)" />
            <source src="/videos/elyne-hero-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
          </video>
        ) : null}

        {/* Fallback & Initial Poster Image */}
        <div className={`absolute inset-0 w-full h-full ${!videoError ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}>
          <Image
            src="/images/elyne-hero-desktop-hq.jpg"
            alt="ELYNE LUXE Emirati Menswear Campaign"
            fill
            priority
            className="object-cover object-center lg:object-[center_top] brightness-[0.85]"
          />
        </div>

        {/* Cinematic Gradient Overlays to preserve legibility */}
        <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-black/80 via-black/45 via-45% to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />
        
        {/* Subtle Arabian Geometric Watermark */}
        <ArabianGeometricWatermark opacity={0.03} />
      </div>

      {/* Hero Content positioned ~7% from left/right */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex flex-col justify-center h-full pt-16 sm:pt-20">
        <div className="max-w-xl text-left rtl:text-right">
          {/* Brand Emblem & Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-3 rtl:space-x-reverse mb-3 sm:mb-4"
          >
            <div className="w-8 h-4 relative opacity-90">
              <Image
                src="/images/elyne-luxe-emblem-white.png"
                alt="Emblem"
                fill
                className="object-contain object-left rtl:object-right"
              />
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#B99A65]">
              {t.hero.brandName}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-medium leading-[1.08] tracking-[0.14em] text-[#F9F5EF] uppercase mb-4 sm:mb-6"
          >
            {t.hero.headlinePart1}
            <br />
            {t.hero.headlinePart2}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xs sm:text-sm md:text-base font-light tracking-[0.18em] uppercase text-[#F9F5EF]/85 mb-8 sm:mb-10 max-w-md leading-relaxed"
          >
            {t.hero.tagline}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#best-sellers"
              className="inline-flex items-center space-x-3 rtl:space-x-reverse px-7 sm:px-9 py-3.5 sm:py-4 border border-[#F9F5EF]/90 text-[#F9F5EF] text-[11px] sm:text-xs tracking-[0.22em] font-medium uppercase hover:bg-[#F9F5EF] hover:text-[#1F2A24] transition-all duration-300 group shadow-lg"
            >
              <span>{t.hero.cta}</span>
              <ArrowIcon className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 lg:left-14 rtl:left-auto rtl:right-6 rtl:sm:right-10 rtl:lg:right-14 z-10 flex flex-col items-start rtl:items-end text-[#F9F5EF]/70 select-none"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-[#F9F5EF]/50 to-[#F9F5EF] mb-2 animate-pulse" />
        <span className="text-[10px] tracking-[0.25em] font-medium uppercase text-[#B99A65]">
          {t.hero.scrollText}
        </span>
      </motion.div>
    </section>
  );
}
