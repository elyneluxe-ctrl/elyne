"use client";

import React from "react";
import Image from "next/image";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
  const { isCartOpen, closeCart, items, updateQuantity, removeItem, subtotal, checkout, t, isRtl } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity"
          />

          {/* Sliding Drawer */}
          <motion.div
            initial={{ x: isRtl ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: isRtl ? "-100%" : "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 bottom-0 ${
              isRtl ? "left-0 border-r" : "right-0 border-l"
            } w-full sm:w-[450px] bg-[#F9F5EF] text-[#1F2A24] z-50 flex flex-col shadow-2xl border-[#E5DFD4]`}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#E5DFD4] bg-[#F4EFE6]">
              <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                <ShoppingBag className="w-4 h-4 text-[#1F2A24]" />
                <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#1F2A24]">
                  {t.cart.title} ({items.reduce((a, b) => a + b.quantity, 0)})
                </span>
              </div>
              <button
                onClick={closeCart}
                className="text-[#1F2A24]/70 hover:text-[#1F2A24] p-1 transition-colors"
                aria-label="Close cart drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Delivery Alert Banner */}
            <div className="bg-[#1F2A24] text-[#F9F5EF] py-2 px-6 text-[11px] tracking-wider text-center font-light">
              {t.cart.shippingNote}
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#E5DFD4]">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <ShoppingBag className="w-12 h-12 text-[#1F2A24]/20 mb-4 stroke-1" />
                  <p className="text-sm font-medium tracking-[0.14em] uppercase text-[#1F2A24] mb-2">
                    {t.cart.empty}
                  </p>
                  <p className="text-xs text-[#5A605C] max-w-xs mb-6 font-light leading-relaxed">
                    {t.cart.emptyDesc}
                  </p>
                  <button
                    onClick={closeCart}
                    className="px-6 py-3 bg-[#1F2A24] text-[#F9F5EF] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#B99A65] hover:text-[#1F2A24] transition-colors"
                  >
                    {t.cart.startShopping}
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.lineId} className="py-5 flex gap-4 first:pt-0 last:pb-0">
                    {/* Item Thumbnail */}
                    <div className="relative w-20 h-26 bg-[#EBE5D8] shrink-0 overflow-hidden">
                      <Image
                        src={item.product.featuredImage.url}
                        alt={item.product.title}
                        fill
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-xs font-medium tracking-wide text-[#1F2A24] pr-2 rtl:pr-0 rtl:pl-2">
                            {item.product.title}
                          </h4>
                          <button
                            onClick={() => removeItem(item.lineId)}
                            className="text-[#1F2A24]/40 hover:text-red-600 transition-colors p-1"
                            aria-label={`Remove ${item.product.title}`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[11px] text-[#5A605C] mt-0.5 tracking-wider">
                          {item.variant.title}
                        </p>
                        <p className="text-xs font-semibold text-[#1F2A24] mt-1 tracking-wider">
                          {t.nav.currency} {item.variant.price.amount}
                        </p>
                      </div>

                      {/* Quantity Controller */}
                      <div className="flex items-center space-x-3 rtl:space-x-reverse mt-3">
                        <div className="flex items-center border border-[#D6CEBE] bg-white">
                          <button
                            onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                            className="p-1.5 text-[#1F2A24]/70 hover:text-[#1F2A24] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-medium text-[#1F2A24]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                            className="p-1.5 text-[#1F2A24]/70 hover:text-[#1F2A24] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer with Subtotal & Checkout */}
            {items.length > 0 && (
              <div className="p-6 border-t border-[#E5DFD4] bg-[#F4EFE6] space-y-4">
                <div className="flex items-center justify-between text-xs tracking-wider">
                  <span className="text-[#5A605C] uppercase font-light">{t.cart.subtotal}</span>
                  <span className="font-semibold text-sm text-[#1F2A24]">
                    {t.nav.currency} {subtotal}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs tracking-wider">
                  <span className="text-[#5A605C] uppercase font-light">
                    {isRtl ? "الشحن" : "Shipping"}
                  </span>
                  <span className="text-[#B99A65] font-medium uppercase text-[11px]">
                    {isRtl ? "مجاني" : "Free"}
                  </span>
                </div>

                <button
                  onClick={checkout}
                  className="w-full py-4 bg-[#1F2A24] text-[#F9F5EF] text-xs tracking-[0.2em] font-semibold uppercase hover:bg-[#B99A65] hover:text-[#1F2A24] transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse shadow-lg"
                >
                  <span>{t.cart.checkout}</span>
                  {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>

                <p className="text-[10px] text-center text-[#5A605C] tracking-wider uppercase font-light">
                  {isRtl
                    ? "السعر شامل الضريبة. دفع آمن ومشفر عبر شوبيفاي."
                    : "Tax included. Secure payment via Shopify."}
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
