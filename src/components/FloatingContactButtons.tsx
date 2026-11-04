"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function FloatingContactButtons() {
  const { isRtl } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const phoneTel = "tel:+971509749780";
  const whatsappUrl = "https://wa.me/971509749780";
  const formattedNumber = "+971 50 974 9780";

  return (
    <aside
      aria-label={isRtl ? "تواصل مباشر مع الدار" : "Direct Atelier Contact"}
      className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40 flex flex-col items-end rtl:items-start space-y-3 pointer-events-auto select-none"
    >
      {/* Expanded quick contact tray */}
      {isOpen && (
        <div className="flex flex-col space-y-2.5 mb-1 animate-in fade-in slide-in-from-bottom-2 duration-200">
          {/* Call direct option */}
          <a
            href={phoneTel}
            aria-label={`Call ELYNE LUXE at ${formattedNumber}`}
            className="flex items-center space-x-2.5 rtl:space-x-reverse px-4 py-2.5 bg-[#1F2A24] text-[#F9F5EF] border border-[#B99A65]/40 rounded-full shadow-2xl hover:bg-[#2A3830] hover:border-[#B99A65] transition-all group"
          >
            <div className="w-7 h-7 rounded-full bg-[#B99A65] text-[#1F2A24] flex items-center justify-center shrink-0">
              <Phone className="w-3.5 h-3.5 fill-current" />
            </div>
            <div className="flex flex-col text-left rtl:text-right">
              <span className="text-[10px] tracking-[0.16em] uppercase text-[#B99A65] font-semibold">
                {isRtl ? "اتصال مباشر" : "Direct Call"}
              </span>
              <span className="text-xs tracking-wider text-white font-medium" dir="ltr">
                {formattedNumber}
              </span>
            </div>
          </a>

          {/* WhatsApp option */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp with ELYNE LUXE VIP Concierge"
            className="flex items-center space-x-2.5 rtl:space-x-reverse px-4 py-2.5 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba59] transition-all group"
          >
            <div className="w-7 h-7 rounded-full bg-white text-[#25D366] flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4 fill-current" />
            </div>
            <div className="flex flex-col text-left rtl:text-right">
              <span className="text-[10px] tracking-[0.16em] uppercase text-white/90 font-semibold">
                {isRtl ? "واتساب كونسيرج" : "WhatsApp VIP"}
              </span>
              <span className="text-xs tracking-wider text-white font-medium">
                {isRtl ? "محادثة فورية" : "Instant Chat"}
              </span>
            </div>
          </a>
        </div>
      )}

      {/* Primary Floating Action Pill / Button */}
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        {/* Quick direct Call button */}
        <a
          href={phoneTel}
          aria-label={`Call ELYNE LUXE at ${formattedNumber}`}
          className="w-12 h-12 rounded-full bg-[#1F2A24] text-[#B99A65] border border-[#B99A65]/50 shadow-xl flex items-center justify-center hover:bg-[#B99A65] hover:text-[#1F2A24] transition-all transform hover:scale-105 active:scale-95"
          title={isRtl ? "اتصل بنا" : "Call Us"}
        >
          <Phone className="w-5 h-5 fill-current" />
        </a>

        {/* Quick direct WhatsApp button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp with ELYNE LUXE"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:bg-[#20ba59] transition-all transform hover:scale-105 active:scale-95"
          title={isRtl ? "محادثة واتساب" : "Chat on WhatsApp"}
        >
          <MessageCircle className="w-5 h-5 fill-current" />
        </a>
      </div>
    </aside>
  );
}
