"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { ArabianStar } from "./ArabianGeometricMotif";

export default function CollectionCards() {
  const { t, isRtl } = useCart();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const collections = [
    {
      id: "collection-men",
      badge: t.collections.menBadge,
      eyebrow: t.collections.menEyebrow,
      title: t.collections.menTitle,
      description: t.collections.menDesc,
      cta: t.collections.menCta,
      href: "/collections/emirati-thobes",
      image: "/images/collection-men-luxury.jpg",
      alt: "Luxury Men's Emirati Kandura Collection"
    },
    {
      id: "collection-boys",
      badge: t.collections.boysBadge,
      eyebrow: t.collections.boysEyebrow,
      title: t.collections.boysTitle,
      description: t.collections.boysDesc,
      cta: t.collections.boysCta,
      href: "/collections/kids-thobes",
      image: "/images/collection-boys-luxury.jpg",
      alt: "Luxury Boys' Emirati Kandura Collection"
    }
  ];

  return (
    <section className="bg-[#F9F5EF] py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {collections.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              id={item.id}
              className="group relative h-[480px] sm:h-[540px] lg:h-[600px] w-full overflow-hidden bg-[#1F2A24] shadow-lg cursor-pointer"
            >
              <Link href={item.href} className="block w-full h-full relative">
                {/* Editorial Photography Background */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={idx === 0}
                    className="object-cover object-center transform scale-100 group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  />

                  {/* Multi-stage Luxury Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A231E]/95 via-[#1A231E]/50 via-40% to-black/15 transition-opacity duration-500 group-hover:from-[#1A231E]/98" />
                  
                  {/* Subtle Top Gradient for Badge contrast */}
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
                </div>

                {/* Top Corner Badge with Arabian Star */}
                <div className="absolute top-6 right-6 rtl:right-auto rtl:left-6 z-20">
                  <span className="inline-flex items-center space-x-1.5 rtl:space-x-reverse px-3.5 py-1.5 bg-[#1F2A24]/75 backdrop-blur-md border border-[#B99A65]/40 text-[#F9F5EF] text-[10px] tracking-[0.22em] uppercase font-semibold">
                    <ArabianStar className="w-2.5 h-2.5 text-[#B99A65]" />
                    <span>{item.badge}</span>
                  </span>
                </div>

                {/* Card Editorial Content positioned at bottom */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-8 sm:p-10 lg:p-12 flex flex-col justify-end text-white text-left rtl:text-right">
                  {/* Eyebrow */}
                  <div className="flex items-center space-x-3 rtl:space-x-reverse mb-2.5">
                    <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#B99A65]">
                      {item.eyebrow}
                    </span>
                    <span className="w-8 h-[1px] bg-[#B99A65]/60" />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[0.16em] uppercase text-white mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#F9F5EF]/85 font-light tracking-[0.03em] mb-7 leading-relaxed max-w-md">
                    {item.description}
                  </p>

                  {/* Luxury CTA Button */}
                  <div>
                    <span className="inline-flex items-center space-x-3 rtl:space-x-reverse px-6 sm:px-7 py-3 border border-white/50 bg-black/25 backdrop-blur-sm text-white text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase group-hover:border-[#B99A65] group-hover:bg-[#B99A65] group-hover:text-[#1F2A24] transition-all duration-300">
                      <span>{item.cta}</span>
                      <ArrowIcon className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
