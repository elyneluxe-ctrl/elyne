"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

interface MenMegaMenuProps {
  onClose?: () => void;
}

export default function MenMegaMenu({ onClose }: MenMegaMenuProps) {
  const { t, isRtl } = useCart();

  const columns = [
    {
      title: isRtl ? "كنادير مغربية" : "MOROCCAN THOBES",
      links: [
        { name: t.megaMenu.moroccanHooded, href: "/collections/moroccan-hooded-thobes" },
        { name: t.megaMenu.moroccanNoHood, href: "/collections/moroccan-thobes-without-hood" },
        { name: t.megaMenu.moroccanHalfSleeve, href: "/collections/moroccan-half-sleeve-thobes" }
      ]
    },
    {
      title: isRtl ? "كنادير إماراتية" : "EMIRATI THOBES",
      links: [
        { name: t.megaMenu.emiratiThobes, href: "/collections/emirati-thobes" }
      ]
    },
    {
      title: isRtl ? "أنماط الأكمام" : "SLEEVE STYLES",
      links: [
        { name: t.megaMenu.halfSleeveThobes, href: "/collections/half-sleeve-thobes" }
      ]
    }
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
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col space-y-5">
              <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#1F2A24]/60 border-b border-[#D6CEBE]/60 pb-3">
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
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
          ))}
        </div>
      </div>
    </motion.div>
  );
}
