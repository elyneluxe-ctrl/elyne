"use client";

import React from "react";
import { Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function AnnouncementBar() {
  const { language, toggleLanguage } = useCart();

  return (
    <div className="bg-[#1F2A24] text-[#F9F5EF] border-b border-[#2C3B33] text-[11px] sm:text-xs tracking-[0.08em] py-2 px-4 transition-all duration-300 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 flex items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
          <Truck className="w-3.5 h-3.5 text-[#C2A676] shrink-0 hidden sm:inline-block" />
          <span className="font-light">
            UAE Delivery <span className="text-[#C2A676]/60 mx-1">|</span> Premium Kanduras for Men & Boys <span className="text-[#C2A676]/60 mx-1">|</span>{" "}
            <a
              href="#best-sellers"
              className="underline underline-offset-4 decoration-[#C2A676]/40 hover:text-[#C2A676] transition-colors"
            >
              Shop the New Collection →
            </a>
          </span>
        </div>

        <div className="hidden sm:flex items-center space-x-3 text-[11px] font-medium tracking-widest pl-4">
          <button
            onClick={toggleLanguage}
            className={`transition-colors ${language === "EN" ? "text-white font-semibold" : "text-[#F9F5EF]/60 hover:text-white"}`}
          >
            EN
          </button>
          <span className="text-[#F9F5EF]/30">|</span>
          <button
            onClick={toggleLanguage}
            className={`transition-colors ${language === "AR" ? "text-white font-semibold font-serif" : "text-[#F9F5EF]/60 hover:text-white font-serif"}`}
          >
            العربية
          </button>
        </div>
      </div>
    </div>
  );
}
