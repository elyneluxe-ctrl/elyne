"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Search, X, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { MOCK_PRODUCTS, Product } from "@/lib/shopify";
import { motion, AnimatePresence } from "framer-motion";

import { useRouter } from "next/navigation";

export default function SearchDrawer() {
  const router = useRouter();
  const { isSearchOpen, closeSearch, t, isRtl } = useCart();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const filtered = MOCK_PRODUCTS.filter(
      (p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);

  const quickTerms = t.search.trending || ["Classic White", "Sand Beige", "Forest Green", "Premium Kandura"];

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSearch}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity"
          />

          {/* Full-width Search Panel */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 bg-[#F9F5EF] text-[#1F2A24] z-50 shadow-2xl border-b border-[#E5DFD4] max-h-[85vh] overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto px-6 py-8 sm:py-12">
              {/* Header and Close */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E5DFD4]">
                <div className="flex items-center space-x-3 rtl:space-x-reverse w-full mr-4 rtl:mr-0 rtl:ml-4">
                  <Search className="w-5 h-5 text-[#1F2A24]/60 shrink-0" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t.search.placeholder}
                    autoFocus
                    className="w-full bg-transparent text-base sm:text-xl font-light tracking-wide text-[#1F2A24] placeholder-[#1F2A24]/40 focus:outline-none"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery("")}
                      className="text-xs text-[#5A605C] hover:text-[#1F2A24] uppercase tracking-wider px-2 shrink-0"
                    >
                      {isRtl ? "مسح" : "CLEAR"}
                    </button>
                  )}
                </div>
                <button
                  onClick={closeSearch}
                  className="p-2 text-[#1F2A24]/70 hover:text-[#1F2A24] transition-colors shrink-0"
                  aria-label="Close search"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Suggestions */}
              {!query && (
                <div className="pt-8">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#5A605C] mb-4">
                    {t.search.suggestions}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {quickTerms.map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-4 py-2 border border-[#D6CEBE] text-xs font-light tracking-wider hover:border-[#1F2A24] hover:bg-[#1F2A24] hover:text-[#F9F5EF] transition-all"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Search Results */}
              {query && (
                <div className="pt-8">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#5A605C] mb-4">
                    {results.length}{" "}
                    {isRtl
                      ? "نتيجة بحث تم العثور عليها"
                      : `RESULT${results.length === 1 ? "" : "S"} FOUND`}
                  </p>

                  {results.length === 0 ? (
                    <div className="py-10 text-center text-[#5A605C] text-sm font-light">
                      {t.search.noResults}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {results.map((product) => (
                        <div
                          key={product.id}
                          onClick={() => {
                            closeSearch();
                            router.push(`/products/${product.handle}`);
                          }}
                          className="group cursor-pointer flex gap-4 p-3 hover:bg-[#F2ECE1] transition-colors border border-transparent hover:border-[#E5DFD4]"
                        >
                          <div className="relative w-16 h-20 bg-[#E5DFD4] shrink-0 overflow-hidden">
                            <Image
                              src={product.featuredImage.url}
                              alt={product.title}
                              fill
                              className="object-cover object-center"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h4 className="text-xs font-medium tracking-wide text-[#1F2A24] group-hover:text-[#B99A65] transition-colors">
                              {product.title}
                            </h4>
                            <p className="text-xs font-semibold text-[#1F2A24] mt-1">
                              {t.nav.currency} {product.price.amount}
                            </p>
                            <span className="text-[10px] tracking-widest uppercase text-[#5A605C] mt-1 flex items-center gap-1">
                              {isRtl ? "عرض التفاصيل" : "View Details"}{" "}
                              <ArrowRight className="w-2.5 h-2.5 rtl:rotate-180" />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
