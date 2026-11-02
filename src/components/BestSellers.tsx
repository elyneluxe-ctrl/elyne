"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight, ArrowLeft, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product, getBestSellerProducts } from "@/lib/shopify";
import { motion } from "framer-motion";

export default function BestSellers() {
  const { wishlist, toggleWishlist, setQuickViewProduct, addToCart, t, isRtl } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  useEffect(() => {
    async function load() {
      try {
        const prods = await getBestSellerProducts();
        setProducts(prods);
      } catch (err) {
        console.error("Failed to load best sellers:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section id="best-sellers" className="bg-[#F9F5EF] py-12 sm:py-20 px-3 sm:px-8 lg:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12 border-b border-[#EBE5D8] pb-4">
          <div className="flex-1 text-left rtl:text-right">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#B99A65] block mb-1">
              {t.bestSellers.eyebrow}
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-[0.18em] text-[#1F2A24] uppercase inline-block">
              {t.bestSellers.title}
            </h2>
          </div>
          <div className="shrink-0">
            <a
              href="/collections/best-sellers"
              className="inline-flex items-center space-x-1.5 rtl:space-x-reverse text-xs tracking-[0.2em] font-medium text-[#1F2A24] hover:text-[#B99A65] transition-colors uppercase"
            >
              <span>{t.megaMenu.viewAll}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Product Grid: 4 columns on desktop, 2 columns on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {products.slice(0, 4).map((product, idx) => {
            const isWishlisted = wishlist.includes(product.id);

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col"
              >
                {/* Product Image Card */}
                <div className="relative aspect-[3/4] w-full bg-[#EFE9DF] overflow-hidden rounded-t-[4px]">
                  <Link
                    href={`/products/${product.handle}`}
                    className="block w-full h-full cursor-pointer"
                  >
                    <Image
                      src={product.featuredImage.url}
                      alt={product.featuredImage.altText || product.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </Link>

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className="absolute top-2 right-2 rtl:right-auto rtl:left-2 sm:top-3 sm:right-3 rtl:sm:right-auto rtl:sm:left-3 z-20 p-1.5 sm:p-2 text-[#1F2A24]/70 hover:text-[#1F2A24] hover:scale-110 transition-all rounded-full bg-white/75 backdrop-blur-sm shadow-xs"
                    aria-label={`Save ${product.title} to wishlist`}
                  >
                    <Heart
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.6] ${
                        isWishlisted
                          ? "fill-[#B99A65] text-[#B99A65]"
                          : "text-[#1F2A24]"
                      }`}
                    />
                  </button>

                  {/* Square Quick Add (+) Button in Bottom */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="absolute bottom-2 right-2 rtl:right-auto rtl:left-2 sm:bottom-3 sm:right-3 rtl:sm:right-auto rtl:sm:left-3 z-20 w-8 h-8 sm:w-9 sm:h-9 bg-[#1F2A24] text-white flex items-center justify-center hover:bg-[#B99A65] transition-colors shadow-md"
                    aria-label={`Add ${product.title} to bag`}
                  >
                    <Plus className="w-4 h-4 stroke-[2]" />
                  </button>

                  {/* Quick View Button on Desktop Hover */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex justify-center pr-14 rtl:pr-3 rtl:pl-14">
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="w-full py-2 bg-white/95 text-[#1F2A24] text-[10px] tracking-[0.2em] font-semibold uppercase hover:bg-[#1F2A24] hover:text-white transition-colors shadow-md"
                    >
                      {t.bestSellers.quickView}
                    </button>
                  </div>
                </div>

                {/* Product Meta */}
                <div className="pt-3 sm:pt-4 flex flex-col text-left rtl:text-right">
                  <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#B99A65] font-medium block mb-1">
                    {isRtl ? "مجموعة النخبة" : "SIGNATURE ATELIER"}
                  </span>
                  <Link
                    href={`/products/${product.handle}`}
                    className="text-xs sm:text-sm font-medium tracking-[0.04em] text-[#1F2A24] hover:text-[#B99A65] transition-colors line-clamp-1 mb-1.5"
                  >
                    {product.title}
                  </Link>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#1F2A24]">
                      {parseFloat(product.price?.amount || "599").toFixed(0)} {t.nav.currency}
                    </span>
                    <span className="text-[10px] tracking-wider text-[#5A605C] font-light hidden sm:inline-block">
                      {isRtl ? "قماش تويوبو ياباني" : "Toyobo Fabric"}
                    </span>
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
