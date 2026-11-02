"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

interface BoysMegaMenuProps {
  onClose?: () => void;
}

export default function BoysMegaMenu({ onClose }: BoysMegaMenuProps) {
  const { t, isRtl } = useCart();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const links = [
    { name: t.megaMenu.kidsThobes, href: "/collections/kids-thobes" },
    { name: t.megaMenu.newArrivals, href: "/collections/new-arrivals" },
    { name: t.megaMenu.bestSellers, href: "/collections/best-sellers" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-full left-0 right-0 w-full bg-[#F9F5EF] text-[#1F2A24] border-t border-[#EBE5D8] shadow-2xl py-12 px-8 lg:px-16 z-50 pointer-events-auto"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Column: Kids Links */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6">
          <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#1F2A24]/60 border-b border-[#D6CEBE]/60 pb-3">
            {isRtl ? "تشكيلة الأولاد" : "KIDS COLLECTION"}
          </h4>
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-base font-normal tracking-[0.06em] text-[#1F2A24] hover:text-[#C2A676] transition-colors block py-0.5"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <Link
              href="/collections/kids-thobes"
              onClick={onClose}
              className="inline-flex items-center space-x-2 rtl:space-x-reverse text-xs font-semibold tracking-[0.2em] uppercase text-[#1F2A24] hover:text-[#C2A676] transition-colors"
            >
              <span>{isRtl ? "تسوق تشكيلة الأولاد كاملة" : "SHOP THE FULL KIDS COLLECTION"}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Column: Editorial Image */}
        <div className="w-full md:w-1/2 max-w-md">
          <Link
            href="/collections/kids-thobes"
            onClick={onClose}
            className="group block relative aspect-[16/10] bg-[#E5DFD4] overflow-hidden"
          >
            <Image
              src="/images/collection-boys-luxury.jpg"
              alt="Kids' Luxury Kandura Collection"
              fill
              className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.98]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
              <span className="text-white text-xs font-medium tracking-[0.2em] uppercase group-hover:text-[#C2A676] transition-colors flex items-center space-x-2 rtl:space-x-reverse">
                <span>{isRtl ? "أناقة خالدة للأولاد" : "Timeless Elegance For Boys"}</span>
                <ArrowIcon className="w-3 h-3" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
