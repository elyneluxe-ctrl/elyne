"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import MenMegaMenu from "./MenMegaMenu";
import BoysMegaMenu from "./BoysMegaMenu";
import CollectionsMegaMenu from "./CollectionsMegaMenu";

export default function Navbar() {
  const pathname = usePathname();
  const { itemCount, openCart, openSearch, language, toggleLanguage, t, isRtl } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key to close mega menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMegaMenu(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMegaMenu(menuName);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 180);
  };

  const handleLinkClick = (menuName: string, e: React.MouseEvent) => {
    if (["MEN", "BOYS", "COLLECTIONS"].includes(menuName)) {
      e.preventDefault();
      setActiveMegaMenu(activeMegaMenu === menuName ? null : menuName);
    }
  };

  const toggleMobileAccordion = (key: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <header
      ref={navContainerRef}
      onMouseLeave={handleMouseLeave}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled || activeMegaMenu || pathname !== "/"
          ? "bg-[#1F2A24] shadow-xl border-b border-[#2C3B33]"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
      }`}
    >
      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 sm:py-5 flex items-center justify-between relative">
        {/* Mobile Hamburger Trigger */}
        <div className="flex items-center lg:hidden w-16">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-white hover:text-[#B99A65] transition-colors p-1.5 focus:outline-none"
            aria-label="Open mobile navigation menu"
          >
            <Menu className="w-5 h-5 stroke-[2]" />
          </button>
        </div>

        {/* ELYNE LUXE Original Logo */}
        <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
          <Link
            href="/"
            className="inline-block group focus:outline-none"
            aria-label="ELYNE LUXE Homepage"
            onClick={() => setActiveMegaMenu(null)}
          >
            <div className="h-8 sm:h-12 md:h-14 w-[115px] sm:w-[155px] md:w-[180px] relative transition-transform duration-300 group-hover:scale-[1.03]">
              <Image
                src="/images/elyne-luxe-logo-white.png"
                alt="ELYNE LUXE — A Signature of Elegance"
                fill
                sizes="(max-width: 768px) 130px, 180px"
                priority
                className="object-contain object-center lg:object-left"
              />
            </div>
          </Link>
        </div>

        {/* CENTRE: Navigation Links with Hover Mega Menus */}
        <nav className="hidden lg:flex items-center space-x-9 rtl:space-x-reverse text-[12px] tracking-[0.22em] font-medium text-[#F9F5EF]">
          {/* MEN */}
          <div
            className="relative py-2"
            onMouseEnter={() => handleMouseEnter("MEN")}
          >
            <button
              onClick={(e) => handleLinkClick("MEN", e)}
              className={`flex items-center space-x-1.5 rtl:space-x-reverse py-1 uppercase transition-colors ${
                activeMegaMenu === "MEN" ? "text-[#B99A65]" : "hover:text-[#B99A65]"
              }`}
            >
              <span>{t.nav.men}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  activeMegaMenu === "MEN" ? "rotate-180 text-[#B99A65]" : "opacity-60"
                }`}
              />
            </button>
          </div>

          {/* BOYS */}
          <div
            className="relative py-2"
            onMouseEnter={() => handleMouseEnter("BOYS")}
          >
            <button
              onClick={(e) => handleLinkClick("BOYS", e)}
              className={`flex items-center space-x-1.5 rtl:space-x-reverse py-1 uppercase transition-colors ${
                activeMegaMenu === "BOYS" ? "text-[#B99A65]" : "hover:text-[#B99A65]"
              }`}
            >
              <span>{t.nav.boys}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  activeMegaMenu === "BOYS" ? "rotate-180 text-[#B99A65]" : "opacity-60"
                }`}
              />
            </button>
          </div>

          {/* COLLECTIONS */}
          <div
            className="relative py-2"
            onMouseEnter={() => handleMouseEnter("COLLECTIONS")}
          >
            <button
              onClick={(e) => handleLinkClick("COLLECTIONS", e)}
              className={`flex items-center space-x-1.5 rtl:space-x-reverse py-1 uppercase transition-colors ${
                activeMegaMenu === "COLLECTIONS" ? "text-[#B99A65]" : "hover:text-[#B99A65]"
              }`}
            >
              <span>{t.nav.collections}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  activeMegaMenu === "COLLECTIONS" ? "rotate-180 text-[#B99A65]" : "opacity-60"
                }`}
              />
            </button>
          </div>

          {/* OUR STORY */}
          <div className="relative py-2">
            <Link
              href="/our-story"
              onClick={() => setActiveMegaMenu(null)}
              className={`py-1 transition-colors uppercase relative ${
                pathname === "/our-story" ? "text-white" : "hover:text-[#B99A65]"
              }`}
            >
              {t.nav.ourStory}
            </Link>
            {pathname === "/our-story" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B99A65]" />
            )}
          </div>

          {/* CONTACT */}
          <div className="relative py-2">
            <Link
              href="/contact"
              onClick={() => setActiveMegaMenu(null)}
              className={`py-1 transition-colors uppercase relative ${
                pathname === "/contact" ? "text-white" : "hover:text-[#B99A65]"
              }`}
            >
              {t.nav.contact}
            </Link>
            {pathname === "/contact" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B99A65]" />
            )}
          </div>
        </nav>

        {/* RIGHT (or LEFT in RTL): Search, Account, Shopping Bag */}
        <div className="flex items-center space-x-3 sm:space-x-5 rtl:space-x-reverse text-[#F9F5EF] w-16 lg:w-auto justify-end">
          {/* Search Trigger */}
          <button
            onClick={openSearch}
            className="hover:text-[#B99A65] transition-colors p-1 focus:outline-none"
            aria-label={t.nav.searchLabel}
          >
            <Search className="w-[18px] h-[18px] stroke-[1.8]" />
          </button>

          {/* Account Icon */}
          <Link
            href="#account"
            onClick={(e) => {
              e.preventDefault();
              alert(
                isRtl
                  ? "بوابة عملاء إيلين لوكس لكبار الشخصيات"
                  : "ELYNE LUXE VIP Client Portal"
              );
            }}
            className="hidden sm:inline-block hover:text-[#B99A65] transition-colors p-1 focus:outline-none"
            aria-label={t.nav.accountLabel}
          >
            <User className="w-[18px] h-[18px] stroke-[1.8]" />
          </Link>

          {/* Shopping Bag Trigger with Live Counter */}
          <button
            onClick={openCart}
            className="relative hover:text-[#B99A65] transition-colors flex items-center p-1 focus:outline-none"
            aria-label={t.nav.bagLabel}
          >
            <ShoppingBag className="w-[18px] h-[18px] stroke-[1.8]" />
            <span className="mx-1 text-[11px] font-medium tracking-normal text-[#F9F5EF]">
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      {/* FULL-WIDTH DESKTOP MEGA MENUS */}
      <AnimatePresence>
        {activeMegaMenu === "MEN" && (
          <div onMouseEnter={() => handleMouseEnter("MEN")} onMouseLeave={handleMouseLeave}>
            <MenMegaMenu onClose={() => setActiveMegaMenu(null)} />
          </div>
        )}
        {activeMegaMenu === "BOYS" && (
          <div onMouseEnter={() => handleMouseEnter("BOYS")} onMouseLeave={handleMouseLeave}>
            <BoysMegaMenu onClose={() => setActiveMegaMenu(null)} />
          </div>
        )}
        {activeMegaMenu === "COLLECTIONS" && (
          <div onMouseEnter={() => handleMouseEnter("COLLECTIONS")} onMouseLeave={handleMouseLeave}>
            <CollectionsMegaMenu onClose={() => setActiveMegaMenu(null)} />
          </div>
        )}
      </AnimatePresence>

      {/* MOBILE ACCORDION DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: isRtl ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: isRtl ? "100%" : "-100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`fixed top-0 bottom-0 ${
                isRtl ? "right-0 border-l" : "left-0 border-r"
              } w-[85%] max-w-sm bg-[#1F2A24] text-[#F9F5EF] z-50 flex flex-col justify-between shadow-2xl lg:hidden border-[#2C3B33] overflow-y-auto`}
            >
              <div className="p-6">
                {/* Mobile Drawer Header with Logo & Close */}
                <div className="flex items-center justify-between pb-6 border-b border-[#2C3B33]">
                  <div className="h-11 w-[140px] relative">
                    <Image
                      src="/images/elyne-luxe-logo-white.png"
                      alt="ELYNE LUXE"
                      fill
                      className="object-contain object-left rtl:object-right"
                    />
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#F9F5EF]/70 hover:text-white p-1"
                    aria-label="Close mobile menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Accordion Navigation */}
                <div className="py-6 space-y-2">
                  {/* MEN Accordion */}
                  <div className="border-b border-[#2C3B33]/50 pb-2">
                    <button
                      onClick={() => toggleMobileAccordion("men")}
                      className="w-full flex items-center justify-between text-sm tracking-[0.2em] font-medium text-[#F9F5EF] py-2"
                    >
                      <span>{t.nav.men}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#B99A65] transition-transform duration-200 ${
                          mobileExpanded["men"] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileExpanded["men"] && (
                      <div className="px-4 py-2 space-y-3 text-xs text-[#F9F5EF]/80 font-light border-l rtl:border-l-0 rtl:border-r border-[#B99A65]/30 my-2">
                        <Link href="/collections/moroccan-hooded-thobes" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#B99A65]">
                          {t.megaMenu.moroccanHooded}
                        </Link>
                        <Link href="/collections/moroccan-thobes-without-hood" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#B99A65]">
                          {t.megaMenu.moroccanNoHood}
                        </Link>
                        <Link href="/collections/moroccan-half-sleeve-thobes" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#B99A65]">
                          {t.megaMenu.moroccanHalfSleeve}
                        </Link>
                        <Link href="/collections/emirati-thobes" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#B99A65]">
                          {t.megaMenu.emiratiThobes}
                        </Link>
                        <Link href="/collections/half-sleeve-thobes" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#B99A65]">
                          {t.megaMenu.halfSleeveThobes}
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* BOYS Accordion */}
                  <div className="border-b border-[#2C3B33]/50 pb-2">
                    <button
                      onClick={() => toggleMobileAccordion("boys")}
                      className="w-full flex items-center justify-between text-sm tracking-[0.2em] font-medium text-[#F9F5EF] py-2"
                    >
                      <span>{t.nav.boys}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#B99A65] transition-transform duration-200 ${
                          mobileExpanded["boys"] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileExpanded["boys"] && (
                      <div className="px-4 py-2 space-y-3 text-xs text-[#F9F5EF]/80 font-light border-l rtl:border-l-0 rtl:border-r border-[#B99A65]/30 my-2">
                        <Link href="/collections/kids-thobes" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#B99A65]">
                          {t.megaMenu.kidsThobes}
                        </Link>
                        <Link href="/collections/new-arrivals" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#B99A65]">
                          {t.megaMenu.newArrivals}
                        </Link>
                        <Link href="/collections/best-sellers" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#B99A65]">
                          {t.megaMenu.bestSellers}
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* COLLECTIONS Accordion */}
                  <div className="border-b border-[#2C3B33]/50 pb-2">
                    <button
                      onClick={() => toggleMobileAccordion("collections")}
                      className="w-full flex items-center justify-between text-sm tracking-[0.2em] font-medium text-[#F9F5EF] py-2"
                    >
                      <span>{t.nav.collections}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#B99A65] transition-transform duration-200 ${
                          mobileExpanded["collections"] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileExpanded["collections"] && (
                      <div className="px-4 py-2 space-y-3 text-xs text-[#F9F5EF]/80 font-light border-l rtl:border-l-0 rtl:border-r border-[#B99A65]/30 my-2">
                        <Link href="/collections/premium-thobes" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#B99A65]">
                          {t.megaMenu.premiumThobes}
                        </Link>
                        <Link href="/collections/modern-thobes" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#B99A65]">
                          {t.megaMenu.modernThobes}
                        </Link>
                        <Link href="/collections/thasbih-ring" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#B99A65]">
                          {t.megaMenu.thasbihRing}
                        </Link>
                        <Link href="/collections/new-arrivals" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#B99A65]">
                          {t.megaMenu.newArrivals}
                        </Link>
                        <Link href="/collections/best-sellers" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#B99A65]">
                          {t.megaMenu.bestSellers}
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* OUR STORY */}
                  <Link
                    href="/our-story"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm tracking-[0.2em] font-medium text-[#F9F5EF] hover:text-[#B99A65] py-3 border-b border-[#2C3B33]/50"
                  >
                    {t.nav.ourStory}
                  </Link>

                  {/* CONTACT */}
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm tracking-[0.2em] font-medium text-[#F9F5EF] hover:text-[#B99A65] py-3 border-b border-[#2C3B33]/50"
                  >
                    {t.nav.contact}
                  </Link>
                </div>
              </div>

              {/* Mobile Drawer Bottom Utilities */}
              <div className="p-6 border-t border-[#2C3B33] space-y-4 text-xs text-[#F9F5EF]/70">
                <div className="flex justify-between items-center text-xs">
                  <span>
                    {isRtl ? "العملة:" : "Currency:"} <strong className="text-white">{t.nav.currency}</strong>
                  </span>
                  <button onClick={toggleLanguage} className="text-[#B99A65] font-semibold text-sm">
                    {t.nav.langToggle}
                  </button>
                </div>
                <p className="tracking-widest uppercase text-[10px] text-[#B99A65]">
                  {t.nav.tagline}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
