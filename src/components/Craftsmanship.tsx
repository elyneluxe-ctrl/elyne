"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Craftsmanship() {
  const { t, isRtl } = useCart();

  const details = [
    {
      title: isRtl ? "حرفية الياقة" : "COLLAR CRAFTSMANSHIP",
      image: "/images/story-philosophy-collar-hq.jpg",
      alt: "Close-up of bespoke Kandura collar construction and buttoning"
    },
    {
      title: isRtl ? "أقمشة يابانية فاخرة" : "PREMIUM TOYOBO FABRIC",
      image: "/images/craft-fabric.webp",
      alt: "Close-up of ultra-fine Japanese breathable crepe fabric drape"
    },
    {
      title: isRtl ? "تشطيب الأكمام" : "CUFF FINISHING",
      image: "/images/craft-cuff.webp",
      alt: "Close-up of sleeve cuff tailoring and mother-of-pearl button"
    },
    {
      title: isRtl ? "دقة الخياطة" : "PRECISION STITCHING",
      image: "/images/craft-stitching.webp",
      alt: "Close-up of pristine single-needle Emirati seam stitching"
    }
  ];

  return (
    <section className="bg-[#F9F5EF] py-14 sm:py-20 px-6 sm:px-10 lg:px-14 border-t border-[#EBE5D8]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-14">
          {/* Left Column: Heading & Description */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-[32%] shrink-0 pr-0 lg:pr-6 rtl:lg:pr-0 rtl:lg:pl-6 text-left rtl:text-right"
          >
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#B99A65] block mb-2">
              {t.craftsmanship.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold leading-[1.18] tracking-[0.16em] uppercase text-[#1F2A24] mb-3 sm:mb-4">
              {t.craftsmanship.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#4A524D] font-light leading-relaxed tracking-[0.03em]">
              {t.craftsmanship.desc}
            </p>
          </motion.div>

          {/* Right Column: 4 Rectangular Image Blocks */}
          <div className="w-full lg:w-[68%] grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {details.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full bg-[#E5DFD4] overflow-hidden rounded-t-[3px]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 18vw"
                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle inner border to frame the rectangle cleanly */}
                  <div className="absolute inset-0 border border-black/5 pointer-events-none" />
                </div>
                <div className="pt-2.5 sm:pt-3 text-center sm:text-left rtl:sm:text-right">
                  <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.16em] uppercase text-[#1F2A24] group-hover:text-[#B99A65] transition-colors block">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
