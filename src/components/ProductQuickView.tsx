"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Heart, Plus, Minus, Check, ArrowRight, ShieldCheck, Ruler } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductQuickView() {
  const { quickViewProduct, setQuickViewProduct, addToCart, wishlist, toggleWishlist, t, isRtl } = useCart();
  const [selectedVariantId, setSelectedVariantId] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  if (!quickViewProduct) return null;

  const currentVariantId = selectedVariantId || quickViewProduct.variants[2]?.id || quickViewProduct.variants[0]?.id;
  const isWishlisted = wishlist.includes(quickViewProduct.id);

  const handleAdd = () => {
    addToCart(quickViewProduct, currentVariantId, quantity);
    setQuickViewProduct(null);
    setQuantity(1);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setQuickViewProduct(null)}
          className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Container */}
        <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`relative w-full max-w-3xl transform overflow-hidden bg-[#F9F5EF] ${
              isRtl ? "text-right" : "text-left"
            } shadow-2xl transition-all border border-[#E5DFD4]`}
          >
            {/* Close Button */}
            <button
              onClick={() => setQuickViewProduct(null)}
              className={`absolute top-4 ${
                isRtl ? "left-4" : "right-4"
              } z-20 p-2 text-[#1F2A24]/70 hover:text-[#1F2A24] bg-[#F9F5EF]/80 rounded-full transition-colors`}
              aria-label="Close product view"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Product Visual */}
              <div className="relative aspect-[3/4] md:aspect-auto md:h-full bg-[#EAE4D7] overflow-hidden">
                <Image
                  src={quickViewProduct.featuredImage.url}
                  alt={quickViewProduct.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Product Info & Actions */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.25em] font-semibold text-[#B99A65] uppercase">
                      {isRtl ? "إيلين لوكس أتيليه" : "ELYNE LUXE TAILORED"}
                    </span>
                    <button
                      onClick={() => toggleWishlist(quickViewProduct.id)}
                      className="text-[#1F2A24] hover:text-[#B99A65] transition-colors p-1"
                      aria-label="Save to wishlist"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isWishlisted ? "fill-[#1F2A24] text-[#1F2A24]" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold tracking-[0.08em] text-[#1F2A24] uppercase mt-2">
                    {quickViewProduct.title}
                  </h3>

                  <p className="text-lg font-medium text-[#1F2A24] mt-2">
                    {t.nav.currency} {quickViewProduct.price.amount}
                  </p>

                  <p className="text-xs text-[#5A605C] font-light leading-relaxed mt-4">
                    {quickViewProduct.description}
                  </p>

                  {/* Size Selector */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold tracking-wider uppercase text-[#1F2A24]">
                        {isRtl ? "اختر المقاس (الطول):" : "Select Size (Length):"}
                      </span>
                      <button
                        onClick={() => setShowSizeGuide(!showSizeGuide)}
                        className="text-[11px] text-[#B99A65] hover:underline flex items-center gap-1 uppercase tracking-wider"
                      >
                        <Ruler className="w-3 h-3" /> {isRtl ? "دليل المقاسات" : "Size Guide"}
                      </button>
                    </div>

                    <div className="grid grid-cols-6 gap-2">
                      {quickViewProduct.variants.map((v) => (
                        <button
                          key={v.id}
                          onClick={() => setSelectedVariantId(v.id)}
                          className={`py-2 text-xs font-medium tracking-wider border transition-all ${
                            currentVariantId === v.id
                              ? "bg-[#1F2A24] text-[#F9F5EF] border-[#1F2A24]"
                              : "border-[#D6CEBE] text-[#1F2A24] hover:border-[#1F2A24]"
                          }`}
                        >
                          {v.title.replace("Size ", "")}
                        </button>
                      ))}
                    </div>

                    {showSizeGuide && (
                      <div className="mt-3 p-3 bg-[#EFE9DF] text-[11px] text-[#5A605C] leading-normal rounded-none border border-[#D6CEBE]">
                        {isRtl ? (
                          <>
                            <strong>دليل المقاسات الإماراتي:</strong> مقاس 52 (الطول 157-162 سم)، مقاس 54 (162-167 سم)، مقاس 56 (167-173 سم)، مقاس 58 (173-178 سم)، مقاس 60 (178-183 سم)، مقاس 62 (183+ سم).
                          </>
                        ) : (
                          <>
                            <strong>Emirati Sizing Guide:</strong> Size 52 (Height 5&apos;2&quot; - 5&apos;4&quot;), Size 54 (5&apos;4&quot; - 5&apos;6&quot;), Size 56 (5&apos;6&quot; - 5&apos;8&quot;), Size 58 (5&apos;8&quot; - 5&apos;10&quot;), Size 60 (5&apos;10&quot; - 6&apos;0&quot;), Size 62 (6&apos;0&quot;+).
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Quantity */}
                  <div className="mt-6 flex items-center space-x-4 rtl:space-x-reverse">
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#1F2A24]">
                      {isRtl ? "الكمية:" : "Quantity:"}
                    </span>
                    <div className="flex items-center border border-[#D6CEBE] bg-white">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-1.5 text-[#1F2A24]/70 hover:text-[#1F2A24]"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-4 text-xs font-medium">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-1.5 text-[#1F2A24]/70 hover:text-[#1F2A24]"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Add to Bag CTA */}
                <div className="mt-8 space-y-3">
                  <button
                    onClick={handleAdd}
                    className="w-full py-4 bg-[#1F2A24] text-[#F9F5EF] text-xs tracking-[0.2em] font-semibold uppercase hover:bg-[#B99A65] hover:text-[#1F2A24] transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse shadow-lg"
                  >
                    <span>{t.bestSellers.addToBag}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </button>

                  <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse text-[10px] text-[#5A605C] tracking-wider uppercase pt-2">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#B99A65]" />{" "}
                      {isRtl ? "أقمشة يابانية أصلية 100%" : "100% Authentic Japanese Fabric"}
                    </span>
                    <span>•</span>
                    <span>{isRtl ? "توصيل سريع مجاني لكافة الإمارات" : "Complimentary UAE Delivery"}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
