"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Heart, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product, getKidsProducts } from "@/lib/shopify";
import { motion } from "framer-motion";

export default function KidsCollectionSection() {
  const { wishlist, toggleWishlist, setQuickViewProduct, t, isRtl } = useCart();
  const [kidsProducts, setKidsProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  useEffect(() => {
    async function load() {
      try {
        const prods = await getKidsProducts();
        setKidsProducts(prods.slice(0, 3));
      } catch (err) {
        console.error("Failed to load kids products:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section id="kids-collection" className="relative bg-[#F9F5EF] py-14 sm:py-22 px-3 sm:px-8 lg:px-14 border-b border-[#EBE5D8] overflow-hidden">
      {/* Arabian Courtyard & Sunlit Arch Background (High Clarity & Visibility) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="/images/arabian-background-2.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_top] opacity-65 filter contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9F5EF]/60 via-[#F9F5EF]/30 to-[#F9F5EF]/70" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Editorial Introduction Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-left rtl:text-right"
          >
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#B99A65] block mb-3">
              {t.kids.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.12] tracking-[0.14em] text-[#1F2A24] uppercase">
              {t.kids.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#4A524D] font-light tracking-[0.04em] mt-4 max-w-lg leading-relaxed">
              {t.kids.desc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="shrink-0"
          >
            <Link
              href="/collections/kids-thobes"
              className="inline-flex items-center space-x-2 rtl:space-x-reverse text-xs font-semibold tracking-[0.2em] uppercase text-[#1F2A24] hover:text-[#B99A65] transition-colors group pb-1 border-b border-[#1F2A24] hover:border-[#B99A65]"
            >
              <span>{t.kids.cta}</span>
              <ArrowIcon className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* 3 Kids Products Grid: 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {kidsProducts.map((product, idx) => {
            const isWishlisted = wishlist.includes(product.id);

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className="group flex flex-col"
              >
                {/* Product Image Card with Subtle Arch Top Styling */}
                <div className="relative aspect-[3/4] w-full bg-[#EAE4D7] overflow-hidden rounded-t-[4px]">
                  <Link
                    href={`/products/${product.handle}`}
                    className="block w-full h-full cursor-pointer"
                  >
                    <Image
                      src={product.featuredImage.url}
                      alt={product.featuredImage.altText || product.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </Link>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-2.5 right-2.5 rtl:right-auto rtl:left-2.5 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#1F2A24] hover:text-[#B99A65] transition-colors shadow-sm z-10"
                    aria-label="Save to Wishlist"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isWishlisted ? "fill-[#B99A65] text-[#B99A65]" : ""
                      }`}
                    />
                  </button>

                  {/* Quick View Button on Hover */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex justify-center">
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="w-full py-2 bg-white/95 text-[#1F2A24] text-[10px] tracking-[0.2em] font-semibold uppercase hover:bg-[#1F2A24] hover:text-white transition-colors shadow-md"
                    >
                      {t.bestSellers.quickView}
                    </button>
                  </div>
                </div>

                {/* Product Information */}
                <div className="pt-3 sm:pt-4 flex flex-col text-left rtl:text-right">
                  <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#B99A65] font-medium block mb-1">
                    {isRtl ? "مجموعة الفرسان" : "JUNIOR COUTURE"}
                  </span>
                  <Link
                    href={`/products/${product.handle}`}
                    className="text-xs sm:text-sm font-medium tracking-[0.04em] text-[#1F2A24] hover:text-[#B99A65] transition-colors line-clamp-1 mb-1.5"
                  >
                    {product.title}
                  </Link>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#1F2A24]">
                      {parseFloat(product.price?.amount || "399").toFixed(0)} {t.nav.currency}
                    </span>
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="sm:hidden text-[10px] uppercase tracking-wider text-[#B99A65] font-semibold p-1"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
