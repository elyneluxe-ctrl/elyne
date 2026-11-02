"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Sparkles, Feather } from "lucide-react";
import { motion } from "framer-motion";

export default function BrandStory() {
  const pillars = [
    {
      title: "QUALITY",
      subtitle: "Finest Fabrics",
      desc: "Selected from world-class mills for enduring softness and structure.",
      icon: ShieldCheck
    },
    {
      title: "ELEGANCE",
      subtitle: "Modern Tradition",
      desc: "Contemporary silhouettes honouring ancestral Emirati tailor craft.",
      icon: Sparkles
    },
    {
      title: "COMFORT",
      subtitle: "For Every Generation",
      desc: "Breathable all-day wear tailored for men and little gentlemen.",
      icon: Feather
    }
  ];

  return (
    <section id="brand-story" className="bg-[#F9F5EF] py-20 sm:py-28 px-6 sm:px-10 lg:px-14 border-b border-[#EBE5D8] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Craft Editorial Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-full bg-[#222E27] shadow-xl overflow-hidden">
              <Image
                src="/images/brand-story-kandura-original.jpg"
                alt="ELYNE LUXE Heritage Craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C2A676] block mb-1">
                  EST. EMIRATES
                </span>
                <p className="text-xs font-light tracking-wide text-white/90">
                  Bespoke stitching and traditional hand-finishing.
                </p>
              </div>
            </div>
            {/* Subtle decorative gold corner frame */}
            <div className="hidden sm:block absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#C2A676]/40 pointer-events-none" />
          </motion.div>

          {/* Right Column: Narrative & 3 Brand Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="w-12 h-6 relative mb-4 opacity-90">
              <Image
                src="/images/elyne-luxe-emblem-dark.png"
                alt="ELYNE LUXE Emblem"
                fill
                className="object-contain object-left"
              />
            </div>

            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C2A676] block mb-2">
              A SIGNATURE OF ELEGANCE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-[1.14] tracking-[0.14em] uppercase text-[#1F2A24] mb-6">
              HERITAGE MEETS
              <br />
              MODERN ELEGANCE.
            </h2>

            <p className="text-sm sm:text-base text-[#4A524D] leading-relaxed font-light tracking-[0.03em] max-w-xl mb-10">
              Rooted in Emirati heritage and crafted for today, ELYNE LUXE redefines the Kandura with a modern perspective, honouring tradition while embracing contemporary style.
            </p>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#D6CEBE]/70 mb-10">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="flex flex-col space-y-2">
                    <div className="w-8 h-8 rounded-full bg-[#1F2A24]/5 flex items-center justify-center text-[#1F2A24] mb-1">
                      <Icon className="w-4 h-4 text-[#C2A676]" />
                    </div>
                    <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#1F2A24]">
                      {pillar.title}
                    </span>
                    <span className="text-[11px] font-medium tracking-[0.06em] text-[#C2A676]">
                      {pillar.subtitle}
                    </span>
                    <p className="text-[11px] text-[#5A605C] font-light leading-snug">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div>
              <a
                href="#footer"
                className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#1F2A24] hover:text-[#C2A676] transition-colors group pb-1 border-b border-[#1F2A24] hover:border-[#C2A676]"
              >
                <span>OUR STORY</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
