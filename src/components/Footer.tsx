"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Custom SVG Brand Icons
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className || "w-4 h-4"}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className || "w-4 h-4"}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className || "w-4 h-4"}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-4 h-4"}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

import { useCart } from "@/context/CartContext";

export default function Footer() {
  const { t, isRtl } = useCart();

  return (
    <footer id="footer" className="bg-[#1F2A24] text-[#F9F5EF] pt-14 sm:pt-18 pb-8 px-6 sm:px-10 lg:px-14 border-t border-[#2C3B33] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-[#2C3B33]">
          {/* Logo & Brand Identity */}
          <div
            className={`md:col-span-3 lg:col-span-3 ${
              isRtl
                ? "pl-0 md:pl-6 md:border-l md:border-[#2C3B33] text-right"
                : "pr-0 md:pr-6 md:border-r md:border-[#2C3B33] text-left"
            }`}
          >
            <Link href="/" className="inline-block group" aria-label="ELYNE LUXE Homepage">
              <div className="w-44 sm:w-48 aspect-[2726/942] relative transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/images/elyne-luxe-logo-white.png"
                  alt="ELYNE LUXE — A Signature of Elegance"
                  fill
                  className={`object-contain ${isRtl ? "object-right" : "object-left"}`}
                />
              </div>
            </Link>
            <p className="text-[11px] text-[#F9F5EF]/60 tracking-[0.14em] uppercase mt-4 font-light leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Links Section */}
          <div className="md:col-span-9 lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Column 1: SHOP */}
            <div className={isRtl ? "text-right" : "text-left"}>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B99A65] mb-4">
                {t.footer.shop}
              </h3>
              <ul className="space-y-2.5 text-xs text-[#F9F5EF]/75 font-light tracking-wide">
                <li>
                  <a href="#collection-men" className="hover:text-[#B99A65] transition-colors">
                    {t.nav.men}
                  </a>
                </li>
                <li>
                  <a href="#collection-boys" className="hover:text-[#B99A65] transition-colors">
                    {t.nav.boys}
                  </a>
                </li>
                <li>
                  <a href="#best-sellers" className="hover:text-[#B99A65] transition-colors">
                    {t.nav.collections}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: ABOUT */}
            <div className={isRtl ? "text-right" : "text-left"}>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B99A65] mb-4">
                {t.footer.about}
              </h3>
              <ul className="space-y-2.5 text-xs text-[#F9F5EF]/75 font-light tracking-wide">
                <li>
                  <Link href="/our-story" className="hover:text-[#B99A65] transition-colors">
                    {t.nav.ourStory}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#B99A65] transition-colors">
                    {t.nav.contact}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: CUSTOMER CARE */}
            <div className={isRtl ? "text-right" : "text-left"}>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B99A65] mb-4">
                {t.footer.customerCare}
              </h3>
              <ul className="space-y-2.5 text-xs text-[#F9F5EF]/75 font-light tracking-wide">
                <li>
                  <a
                    href="#shipping"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(
                        isRtl
                          ? "توصيل سريع مجاني لكافة إمارات الدولة خلال ٢-٣ أيام عمل."
                          : "Complimentary delivery across all UAE Emirates within 2-3 business days."
                      );
                    }}
                    className="hover:text-[#B99A65] transition-colors"
                  >
                    {t.footer.shipping}
                  </a>
                </li>
                <li>
                  <a
                    href="#returns"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(
                        isRtl
                          ? "استبدال واسترجاع مجاني خلال ١٤ يوماً لكافة المقاسات القياسية."
                          : "Complimentary 14-day luxury exchange and returns on all standard sizes."
                      );
                    }}
                    className="hover:text-[#B99A65] transition-colors"
                  >
                    {t.footer.returns}
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(
                        isRtl
                          ? "إيلين لوكس تحرص على سرية وأمان بيانات عملائها الكرام."
                          : "ELYNE LUXE respects your privacy. All client details are securely encrypted."
                      );
                    }}
                    className="hover:text-[#B99A65] transition-colors"
                  >
                    {t.footer.privacy}
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(
                        isRtl
                          ? "الشروط والأحكام المعتمدة لدار إيلين لوكس للأزياء الفاخرة."
                          : "ELYNE LUXE standard terms and conditions of purchase."
                      );
                    }}
                    className="hover:text-[#B99A65] transition-colors"
                  >
                    {t.footer.terms}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: CONNECT WITH US */}
            <div className={isRtl ? "text-right" : "text-left"}>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B99A65] mb-4">
                {t.footer.connect}
              </h3>
              <div className="flex items-center space-x-4 rtl:space-x-reverse text-[#F9F5EF]/80 mb-6">
                <a
                  href="https://www.instagram.com/elyne__luxe?rpxt=MXN6OTJ5b2c4NWZoNQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="ELYNE LUXE on Instagram"
                  className="hover:text-[#B99A65] transition-colors p-1"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="ELYNE LUXE on Facebook"
                  className="hover:text-[#B99A65] transition-colors p-1"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="ELYNE LUXE on TikTok"
                  className="hover:text-[#B99A65] transition-colors p-1"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="ELYNE LUXE on YouTube"
                  className="hover:text-[#B99A65] transition-colors p-1"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>

              {/* Direct Atelier Contact */}
              <div className="space-y-2 text-xs font-light tracking-wide text-[#F9F5EF]/85">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <a
                    href="tel:+971509749780"
                    className="hover:text-[#B99A65] transition-colors font-medium text-[11px] tracking-widest text-[#B99A65]"
                    dir="ltr"
                  >
                    +971 50 974 9780
                  </a>
                </div>
                <div>
                  <a
                    href="https://wa.me/971509749780"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 rtl:space-x-reverse text-[#25D366] hover:underline text-[11px] tracking-wider"
                  >
                    <span>WhatsApp Concierge →</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Footer Copyright & Currency */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#F9F5EF]/60 tracking-[0.08em] gap-4">
          <p>© 2026 ELYNE LUXE. {t.footer.rightsReserved}</p>
          <div className="flex items-center space-x-2 rtl:space-x-reverse font-medium">
            <span className="text-[#B99A65]">{t.footer.region}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
