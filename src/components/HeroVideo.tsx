"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function HeroVideo() {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const { t, isRtl } = useCart();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  useEffect(() => {
    const desktopVideo = desktopVideoRef.current;
    const mobileVideo = mobileVideoRef.current;

    const startPlayback = () => {
      if (desktopVideo) {
        desktopVideo.defaultMuted = true;
        desktopVideo.muted = true;
        desktopVideo.play().catch(() => {});
      }
      if (mobileVideo) {
        mobileVideo.defaultMuted = true;
        mobileVideo.muted = true;
        mobileVideo.play().catch(() => {});
      }
    };

    // Immediate playback attempt
    startPlayback();

    // Listen on loadeddata & canplay events so video renders immediately as frames arrive
    if (desktopVideo) {
      desktopVideo.addEventListener("loadeddata", startPlayback, { once: true });
      desktopVideo.addEventListener("canplay", startPlayback, { once: true });
    }
    if (mobileVideo) {
      mobileVideo.addEventListener("loadeddata", startPlayback, { once: true });
      mobileVideo.addEventListener("canplay", startPlayback, { once: true });
    }

    // Touch & interaction fallback to break browser autoplay throttling
    window.addEventListener("touchstart", startPlayback, { once: true, passive: true });
    window.addEventListener("click", startPlayback, { once: true, passive: true });
    window.addEventListener("scroll", startPlayback, { once: true, passive: true });

    return () => {
      window.removeEventListener("touchstart", startPlayback);
      window.removeEventListener("click", startPlayback);
      window.removeEventListener("scroll", startPlayback);
    };
  }, []);

  return (
    <section className="relative w-full h-[92vh] sm:h-[95vh] lg:h-screen min-h-[640px] max-h-[1080px] bg-[#161F1A] overflow-hidden flex items-center">
      {/* Background Media: Native Responsive Videos for Desktop & Mobile */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-transparent">
        {/* Mobile View Video (< 768px): Enhanced TensorPix mobile video */}
        <video
          ref={mobileVideoRef}
          src="/videos/elyne-hero-mobile.mp4"
          poster="/images/elyne-hero-desktop-hq.jpg"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          disablePictureInPicture
          preload="auto"
          className="block md:hidden w-full h-full object-cover object-center transform-gpu will-change-transform"
        />

        {/* Desktop View Video (>= 768px): Enhanced TensorPix widescreen video */}
        <video
          ref={desktopVideoRef}
          src="/videos/elyne-hero-desktop.mp4"
          poster="/images/elyne-hero-desktop-hq.jpg"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          disablePictureInPicture
          preload="auto"
          className="hidden md:block w-full h-full object-cover object-center transform-gpu will-change-transform"
        />
      </div>

      {/* Hero Content positioned ~7% from left/right */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 flex flex-col justify-end md:justify-center h-full pb-20 md:pb-0 pt-20 sm:pt-20">
        <div className="max-w-xl text-left rtl:text-right">
          {/* Brand Emblem & Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-2.5 rtl:space-x-reverse mb-2 sm:mb-4"
          >
            <div className="w-6 h-3.5 sm:w-8 sm:h-4 relative opacity-90">
              <Image
                src="/images/elyne-luxe-emblem-white.png"
                alt="Emblem"
                fill
                className="object-contain object-left rtl:object-right"
              />
            </div>
            <span className="text-[10px] sm:text-sm font-semibold tracking-[0.28em] sm:tracking-[0.3em] uppercase text-[#B99A65]">
              {t.hero.brandName}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-[26px] xs:text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-medium leading-[1.18] sm:leading-[1.08] tracking-[0.1em] sm:tracking-[0.14em] text-[#F9F5EF] uppercase mb-2.5 sm:mb-6 drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)]"
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
            className="text-[11px] sm:text-sm md:text-base font-light tracking-[0.16em] sm:tracking-[0.18em] uppercase text-[#F9F5EF]/90 mb-6 sm:mb-10 max-w-md leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
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
              className="inline-flex items-center space-x-2.5 sm:space-x-3 rtl:space-x-reverse px-6 sm:px-9 py-3 sm:py-4 border border-[#F9F5EF]/80 bg-black/40 backdrop-blur-md text-[#F9F5EF] text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.22em] font-medium uppercase hover:bg-[#F9F5EF] hover:text-[#1F2A24] transition-all duration-300 group shadow-xl"
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
        className="hidden md:flex absolute bottom-6 sm:bottom-10 left-6 sm:left-10 lg:left-14 rtl:left-auto rtl:right-6 rtl:sm:right-10 rtl:lg:right-14 z-10 flex-col items-start rtl:items-end text-[#F9F5EF]/70 select-none"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-[#F9F5EF]/50 to-[#F9F5EF] mb-2 animate-pulse" />
        <span className="text-[10px] tracking-[0.25em] font-medium uppercase text-[#B99A65]">
          {t.hero.scrollText}
        </span>
      </motion.div>
    </section>
  );
}
