"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

interface CollectionsMegaMenuProps {
  onClose?: () => void;
}

export default function CollectionsMegaMenu({ onClose }: CollectionsMegaMenuProps) {
  const { t, isRtl } = useCart();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const col1 = {
    title: isRtl ? "التشكيلات المتميزة" : "SIGNATURE COLLECTIONS",
    links: [
      { name: t.megaMenu.premiumThobes, href: "/collections/premium-thobes" },
      { name: t.megaMenu.modernThobes, href: "/collections/modern-thobes" }
    ]
  };

  const col2 = {
    title: isRtl ? "الملحقات والإكسسوارات" : "ACCESSORIES",
    links: [
      { name: t.megaMenu.thasbihRing, href: "/collections/thasbih-ring" }
    ]
  };

  const col3 = {
    title: isRtl ? "اكتشف المزيد" : "DISCOVER",
    links: [
      { name: t.megaMenu.newArrivals, href: "/collections/new-arrivals" },
      { name: t.megaMenu.bestSellers, href: "/collections/best-sellers" }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-full left-0 right-0 w-full bg-[#F9F5EF] text-[#1F2A24] border-t border-[#EBE5D8] shadow-2xl py-12 px-8 lg:px-16 z-50 pointer-events-auto"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-14">
          {/* Column 1: SIGNATURE COLLECTIONS */}
          <div className="flex flex-col space-y-5">
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#1F2A24]/60 border-b border-[#D6CEBE]/60 pb-3">
              {col1.title}
            </h4>
            <ul className="space-y-4">
              {col1.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="text-sm font-normal tracking-[0.05em] text-[#1F2A24] hover:text-[#C2A676] transition-colors block py-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: ACCESSORIES */}
          <div className="flex flex-col space-y-5">
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#1F2A24]/60 border-b border-[#D6CEBE]/60 pb-3">
              {col2.title}
            </h4>
            <ul className="space-y-4">
              {col2.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="text-sm font-normal tracking-[0.05em] text-[#1F2A24] hover:text-[#C2A676] transition-colors block py-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: DISCOVER */}
          <div className="flex flex-col space-y-5">
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#1F2A24]/60 border-b border-[#D6CEBE]/60 pb-3">
              {col3.title}
            </h4>
            <ul className="space-y-4">
              {col3.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="text-sm font-normal tracking-[0.05em] text-[#1F2A24] hover:text-[#C2A676] transition-colors block py-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: FEATURED EDITORIAL */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#1F2A24]/60 border-b border-[#D6CEBE]/60 pb-3">
              {isRtl ? "إصدار مميز" : "FEATURED"}
            </h4>
            <Link
              href="/collections/premium-thobes"
              onClick={onClose}
              className="group block relative aspect-[4/3] bg-[#E5DFD4] overflow-hidden"
            >
              <Image
                src="/images/product-premium-white.webp"
                alt="Featured ELYNE LUXE Kandura"
                fill
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                <span className="text-white text-[11px] font-medium tracking-[0.2em] uppercase group-hover:text-[#C2A676] transition-colors flex items-center space-x-1.5 rtl:space-x-reverse">
                  <span>{isRtl ? "استكشف التشكيلة" : "EXPLORE THE COLLECTION"}</span>
                  <ArrowIcon className="w-3 h-3" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
