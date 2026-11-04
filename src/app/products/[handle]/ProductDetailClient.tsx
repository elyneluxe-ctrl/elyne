"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Product, getProductByHandle, getBestSellerProducts, createShopifyCart } from "@/lib/shopify";
import {
  Heart,
  Truck,
  RotateCcw,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Plus,
  Minus,
  Check,
  Ruler,
  ShoppingBag,
  Zap,
  Loader2
} from "lucide-react";
import { motion } from "framer-motion";

export default function ProductDetailClient({ handle }: { handle: string }) {
  const router = useRouter();
  const { addToCart, openCart, wishlist, toggleWishlist, t, isRtl } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Active selection states
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [isBuyingNow, setIsBuyingNow] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>("fabric");

  useEffect(() => {
    async function loadProduct() {
      if (!handle) return;
      setLoading(true);
      try {
        const prod = await getProductByHandle(handle);
        if (prod) {
          setProduct(prod);
          if (prod.availableSizes && prod.availableSizes.length > 0) {
            setSelectedSize(prod.availableSizes[0]);
          }
        }
        const bestSellers = await getBestSellerProducts();
        setRelatedProducts(bestSellers.filter((p) => p.handle !== handle).slice(0, 4));
      } catch (err) {
        console.error("Error loading product:", err);
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [handle]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F9F5EF] flex flex-col justify-between">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center py-40">
          <div className="w-10 h-10 border-2 border-[#1F2A24] border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-xs uppercase tracking-[0.2em] text-[#1F2A24]/70">
            {isRtl ? "جاري تحميل التصميم الفاخر..." : "LOADING ARTISANAL CREATION..."}
          </p>
        </div>
        <Footer />
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-[#F9F5EF] flex flex-col justify-between">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center py-40 px-6 text-center">
          <h1 className="text-2xl font-semibold tracking-wider text-[#1F2A24] uppercase mb-4">
            {isRtl ? "المنتج غير متوفر" : "PRODUCT NOT FOUND"}
          </h1>
          <p className="text-xs text-[#5A605C] mb-8">
            {isRtl
              ? "القطعة الحصرية المطلوبة غير متوفرة حالياً أو قيد التفصيل في الأتيليه."
              : "The requested bespoke piece is currently unavailable or being tailored."}
          </p>
          <Link
            href="/"
            className="px-8 py-3 bg-[#1F2A24] text-[#F9F5EF] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#B99A65] hover:text-[#1F2A24] transition-colors"
          >
            {isRtl ? "العودة للرئيسية" : "RETURN TO ATELIER"}
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const isWishlisted = wishlist.includes(product.id);
  const images = product.images && product.images.length > 0 ? product.images : [product.featuredImage];
  const activeImage = images[activeImageIndex] || product.featuredImage;

  const handleAddToCart = () => {
    const selectedVariant =
      product.variants.find((v) => v.title.includes(selectedSize)) ||
      product.variants[0] || {
        id: `var-${product.id}-${selectedSize || "default"}`,
        title: selectedSize ? `Size ${selectedSize}` : "Default",
        price: product.price,
        availableForSale: true
      };

    addToCart(product, selectedVariant.id, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
    openCart();
  };

  const handleBuyNow = async () => {
    if (!product) return;
    setIsBuyingNow(true);

    try {
      const selectedVariant =
        product.variants.find((v) => v.title.includes(selectedSize)) ||
        product.variants[0] || {
          id: `var-${product.id}-${selectedSize || "default"}`,
          title: selectedSize ? `Size ${selectedSize}` : "Default",
          price: product.price,
          availableForSale: true
        };

      // Add to local state so cart is persistent
      addToCart(product, selectedVariant.id, quantity);

      // Attempt live Shopify Cart creation
      const cart = await createShopifyCart([
        {
          merchandiseId: selectedVariant.id,
          quantity
        }
      ]);

      if (cart?.checkoutUrl) {
        window.location.href = cart.checkoutUrl;
        return;
      }
    } catch (err) {
      console.warn("Direct checkout redirect fallback:", err);
    }

    const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || "elyneluxe.myshopify.com";
    window.location.href = `https://${storeDomain}/cart`;
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <main className="min-h-screen bg-[#F9F5EF] flex flex-col selection:bg-[#1F2A24] selection:text-[#F9F5EF]">
      {/* Navigation */}
      <Navbar />

      {/* Breadcrumbs */}
      <div className="pt-28 sm:pt-32 pb-4 px-4 sm:px-8 lg:px-14 max-w-7xl mx-auto w-full">
        <nav className="flex items-center space-x-2 rtl:space-x-reverse text-[10px] sm:text-xs text-[#5A605C] uppercase tracking-[0.16em]">
          <Link href="/" className="hover:text-[#1F2A24] transition-colors">
            {isRtl ? "الرئيسية" : "HOME"}
          </Link>
          <ChevronRight className="w-3 h-3 text-[#B0A795] rtl:rotate-180" />
          <Link href="/collections/emirati-thobes" className="hover:text-[#1F2A24] transition-colors">
            {t.nav.collections}
          </Link>
          <ChevronRight className="w-3 h-3 text-[#B0A795] rtl:rotate-180" />
          <span className="text-[#1F2A24] font-medium truncate max-w-[200px] sm:max-w-none">
            {product.title}
          </span>
        </nav>
      </div>

      {/* Main Product Stage */}
      <section className="py-4 sm:py-8 px-4 sm:px-8 lg:px-14 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnails (Vertical on desktop, horizontal on mobile) */}
            {images.length > 1 && (
              <div className="flex sm:flex-col gap-2.5 overflow-x-auto sm:overflow-y-auto shrink-0 pb-2 sm:pb-0 sm:w-22">
                {images.map((img, i) => (
                  <button
                    key={img.url + i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative w-20 h-24 sm:w-22 sm:h-28 bg-[#EFE9DF] overflow-hidden border transition-all shrink-0 group ${
                      activeImageIndex === i
                        ? "border-[#B99A65] ring-2 ring-[#B99A65] shadow-sm"
                        : "border-[#DCD5C7] opacity-70 hover:opacity-100 hover:border-[#1F2A24]"
                    }`}
                    aria-label={`View angle ${i + 1}`}
                  >
                    <Image
                      src={img.url}
                      alt={img.altText || product.title}
                      fill
                      className="object-cover object-center"
                    />
                    <span className="absolute bottom-1 left-1 bg-black/60 text-white text-[8px] font-medium px-1 rounded-xs">
                      0{i + 1}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Main Primary Image Display */}
            <div className="relative flex-1 aspect-[3/4] bg-[#EFE9DF] overflow-hidden group">
              <Image
                src={activeImage.url}
                alt={activeImage.altText || product.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center transform group-hover:scale-102 transition-transform duration-700 ease-out"
              />

              {/* Prev / Next Chevrons on Main Image */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevImage();
                    }}
                    className={`absolute top-1/2 -translate-y-1/2 ${
                      isRtl ? "right-3" : "left-3"
                    } z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white text-[#1F2A24] shadow-md flex items-center justify-center transition-all duration-200 active:scale-95`}
                    aria-label="Previous image angle"
                  >
                    {isRtl ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextImage();
                    }}
                    className={`absolute top-1/2 -translate-y-1/2 ${
                      isRtl ? "left-3" : "right-3"
                    } z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white text-[#1F2A24] shadow-md flex items-center justify-center transition-all duration-200 active:scale-95`}
                    aria-label="Next image angle"
                  >
                    {isRtl ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                </>
              )}

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-4 ${
                  isRtl ? "left-4" : "right-4"
                } z-20 p-2.5 rounded-full bg-white/70 backdrop-blur-xs text-[#1F2A24] hover:scale-110 transition-transform shadow-xs`}
                aria-label="Toggle wishlist"
              >
                <Heart
                  className={`w-4 h-4 stroke-[1.8] ${
                    isWishlisted ? "fill-[#1F2A24] text-[#1F2A24]" : "text-[#1F2A24]"
                  }`}
                />
              </button>

              {/* Badge */}
              <div className={`absolute top-4 ${isRtl ? "right-4" : "left-4"} z-20`}>
                <span className="bg-[#1F2A24] text-[#F9F5EF] text-[9px] sm:text-[10px] font-semibold px-2.5 py-1 tracking-[0.2em] uppercase">
                  {isRtl ? "تفصيل الأتيليه" : "BESPOKE CRAFT"}
                </span>
              </div>

              {/* Image Counter Badge */}
              {images.length > 1 && (
                <div
                  className={`absolute bottom-3 ${
                    isRtl ? "left-3" : "right-3"
                  } z-20 bg-black/65 backdrop-blur-xs text-white text-[10px] font-medium tracking-widest px-2.5 py-1`}
                >
                  {activeImageIndex + 1} / {images.length}
                </div>
              )}

              {/* Active Angle Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-4 pt-10 text-left rtl:text-right pointer-events-none">
                <p className="text-[11px] sm:text-xs text-white/95 font-light tracking-wider drop-shadow-xs truncate">
                  {activeImage.altText || product.title}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Product Purchasing & Specifications */}
          <div className={`lg:col-span-5 flex flex-col justify-start ${isRtl ? "text-right" : "text-left"}`}>
            {/* Title & Category */}
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#B99A65] block mb-2">
              {isRtl ? "الفخامة الإماراتية الأصيلة" : "EMIRATI TRADITIONAL LUXURY"}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[0.1em] text-[#1F2A24] uppercase leading-tight mb-3">
              {product.title}
            </h1>

            {/* Pricing */}
            <div className="flex items-baseline space-x-3 rtl:space-x-reverse mb-6">
              <span className="text-xl sm:text-2xl font-normal text-[#1F2A24] tracking-wider">
                {t.nav.currency} {product.price.amount}
              </span>
              <span className="text-[11px] text-[#5A605C] tracking-wide font-light">
                {isRtl ? "(شامل ضريبة القيمة المضافة)" : "(Inclusive of VAT)"}
              </span>
            </div>

            {/* Editorial Overview Description */}
            <p className="text-xs sm:text-sm text-[#4A524D] font-light leading-relaxed mb-8 pb-6 border-b border-[#E6E0D3]">
              {product.description}
            </p>

            {/* Size Selection */}
            {product.availableSizes && product.availableSizes.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#1F2A24]">
                    {isRtl ? "اختر المقاس (طول الثوب)" : "SELECT SIZE (THOBE LENGTH)"}
                  </span>
                  <button
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="inline-flex items-center space-x-1 rtl:space-x-reverse text-[11px] font-medium tracking-wider text-[#B99A65] hover:text-[#1F2A24] transition-colors"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>{isRtl ? "دليل المقاسات" : "SIZE GUIDE"}</span>
                  </button>
                </div>

                {/* Size Pills Grid */}
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {product.availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 text-xs tracking-wider font-medium border transition-all ${
                        selectedSize === size
                          ? "bg-[#1F2A24] text-[#F9F5EF] border-[#1F2A24] shadow-sm"
                          : "bg-white text-[#1F2A24] border-[#DCD5C7] hover:border-[#1F2A24]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Guide Modal/Accordion Popup */}
            {showSizeGuide && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-[#F2EDE2] border border-[#DDD6C8] text-xs text-[#4A524D] leading-relaxed"
              >
                <div className="flex justify-between items-center mb-2 font-semibold text-[#1F2A24] tracking-wider uppercase">
                  <span>{isRtl ? "دليل المقاسات الإماراتي التقليدي" : "Traditional Emirati Sizing Guide"}</span>
                  <button
                    onClick={() => setShowSizeGuide(false)}
                    className="text-[#1F2A24] hover:text-[#B99A65]"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-[11px] mb-2 font-light">
                  {isRtl
                    ? "مقاسات الثوب توافق الطول الإجمالي بالبوصة من الكتف إلى الكاحل."
                    : "Thobe sizes correspond to your height in inches from shoulder to ankle."}
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[10.5px]">
                  <span>• {isRtl ? "مقاس 52: الطول 160 – 165 سم" : "Size 52: Height 160 – 165 cm"}</span>
                  <span>• {isRtl ? "مقاس 54: الطول 165 – 170 سم" : "Size 54: Height 165 – 170 cm"}</span>
                  <span>• {isRtl ? "مقاس 56: الطول 170 – 175 سم" : "Size 56: Height 170 – 175 cm"}</span>
                  <span>• {isRtl ? "مقاس 58: الطول 175 – 180 سم" : "Size 58: Height 175 – 180 cm"}</span>
                  <span>• {isRtl ? "مقاس 60: الطول 180 – 185 سم" : "Size 60: Height 180 – 185 cm"}</span>
                  <span>• {isRtl ? "مقاس 62: الطول 185+ سم" : "Size 62: Height 185+ cm"}</span>
                </div>
              </motion.div>
            )}

            {/* Quantity Selector & Add to Bag Buttons */}
            <div className="space-y-3 pt-2 mb-8">
              <div className="flex items-center gap-3">
                {/* Quantity Controls */}
                <div className="flex items-center border border-[#DCD5C7] bg-white h-12 px-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 text-[#1F2A24] hover:text-[#B99A65] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-xs font-semibold text-[#1F2A24]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 text-[#1F2A24] hover:text-[#B99A65] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Primary Add To Bag Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 h-12 bg-[#1F2A24] text-[#F9F5EF] text-xs font-semibold tracking-[0.22em] uppercase hover:bg-[#B99A65] hover:text-[#1F2A24] transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse shadow-md active:scale-[0.99]"
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>{isRtl ? "تمت الإضافة للحقيبة" : "ADDED TO BAG"}</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>{t.bestSellers.addToBag}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Express Direct Checkout / Buy Now Button */}
              <button
                onClick={handleBuyNow}
                disabled={isBuyingNow}
                className="w-full h-12 border-2 border-[#1F2A24] bg-[#F9F5EF] text-[#1F2A24] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#1F2A24] hover:text-[#F9F5EF] disabled:opacity-75 transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse cursor-pointer shadow-sm active:scale-[0.99]"
              >
                {isBuyingNow ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{isRtl ? "جاري التجهيز والدفع..." : "PROCEEDING TO CHECKOUT..."}</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 text-[#B99A65] fill-[#B99A65]" />
                    <span>{isRtl ? "اشتري الآن" : "BUY NOW"}</span>
                  </>
                )}
              </button>
            </div>

            {/* Luxury Complimentary Services */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-4 border-y border-[#E6E0D3] text-[11px] text-[#5A605C] mb-8">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Truck className="w-4 h-4 text-[#B99A65] shrink-0" />
                <span>{isRtl ? "توصيل سريع مجاني لكافة الإمارات" : "Complimentary UAE Delivery"}</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Sparkles className="w-4 h-4 text-[#B99A65] shrink-0" />
                <span>{isRtl ? "علبة إهداء فاخرة متضمنة" : "Luxury Gift Box Included"}</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <RotateCcw className="w-4 h-4 text-[#B99A65] shrink-0" />
                <span>{isRtl ? "استبدال واسترجاع مجاني" : "Complimentary Exchanges"}</span>
              </div>
            </div>

            {/* Accordion Sections: Details & Craftsmanship */}
            <div className="space-y-3">
              {/* Accordion 1: Fabric & Craftsmanship */}
              <div className="border-b border-[#E6E0D3] pb-3">
                <button
                  onClick={() =>
                    setActiveAccordion(activeAccordion === "fabric" ? null : "fabric")
                  }
                  className="w-full flex items-center justify-between text-xs font-semibold tracking-[0.16em] uppercase text-[#1F2A24] py-1"
                >
                  <span>{isRtl ? "الأقمشة والحرفية" : "FABRIC & CRAFTSMANSHIP"}</span>
                  <span className="text-base text-[#B99A65]">
                    {activeAccordion === "fabric" ? "−" : "+"}
                  </span>
                </button>
                {activeAccordion === "fabric" && (
                  <div className="pt-2 text-xs text-[#5A605C] font-light space-y-1.5 leading-relaxed">
                    <p>• {isRtl ? "أقمشة تويوبو يابانية ممتازة تمنحك برودة وانسيابية مريحة." : "Premium Japanese high-twist spun fabric for breathable comfort."}</p>
                    <p>• {isRtl ? "ياقة إماراتية مقواة بحرفية يدوية وأزرار صدفية أصلية." : "Hand-finished Emirati collar and reinforced button loops."}</p>
                    <p>• {isRtl ? "مقاومة للتجعد ومصممة لأجواء الخليج والمناسبات الرسمية." : "Wrinkle-resistant drape engineered for UAE climate and formal occasions."}</p>
                  </div>
                )}
              </div>

              {/* Accordion 2: Care Instructions */}
              <div className="border-b border-[#E6E0D3] pb-3">
                <button
                  onClick={() =>
                    setActiveAccordion(activeAccordion === "care" ? null : "care")
                  }
                  className="w-full flex items-center justify-between text-xs font-semibold tracking-[0.16em] uppercase text-[#1F2A24] py-1"
                >
                  <span>{isRtl ? "إرشادات العناية والغسيل" : "CARE & MAINTENANCE"}</span>
                  <span className="text-base text-[#B99A65]">
                    {activeAccordion === "care" ? "−" : "+"}
                  </span>
                </button>
                {activeAccordion === "care" && (
                  <div className="pt-2 text-xs text-[#5A605C] font-light space-y-1.5 leading-relaxed">
                    <p>• {isRtl ? "يُفضل الغسيل الجاف للحفاظ على رونق الياقة واستقامة القماش." : "Dry cleaning recommended for optimal longevity and collar sharpness."}</p>
                    <p>• {isRtl ? "غسيل آلي خفيف على البارد (30 درجة مئوية) داخل كيس حماية." : "Gentle machine wash cold (30°C) inside a protective laundry bag."}</p>
                    <p>• {isRtl ? "كي بالبخار الدافئ على الوجه الداخلي وتجنب الحرارة المباشرة على الأزرار." : "Warm steam iron on reverse side; avoid direct heat on mother-of-pearl buttons."}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atelier Editorial Gallery: All Related Views & Angles */}
      {images.length > 1 && (
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 lg:px-14 bg-[#FAF6F0] border-t border-[#EAE3D4] mt-8 overflow-hidden">
          {/* Subtle Sandstone Architectural Plaster Background (3% Opacity) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            <Image
              src="/images/arabian-texture-subtle.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-[0.03] mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F0] via-transparent to-[#FAF6F0]" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-10">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#B99A65] block mb-2">
                {isRtl ? "معرض تفاصيل الأتيليه" : "ATELIER EDITORIAL GALLERY & ANGLES"}
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-[0.14em] uppercase text-[#1F2A24]">
                {isRtl ? "استكشف تفاصيل وحرفية الكندورة من كافة الزوايا" : "EXPLORE EVERY ANGLE & ARTISANAL DETAIL"}
              </h2>
              <p className="text-xs sm:text-sm text-[#5A605C] font-light max-w-lg mx-auto mt-2 leading-relaxed">
                {isRtl
                  ? "انقر على أي زاوية لمعاينتها بالأعلى بدقة فائقة وفحص جودة الطربوش والخياطة اليدوية."
                  : "Tap any angle below to inspect the master single-needle stitching, hand-braided Tarboosh, and Japanese weave."}
              </p>
            </div>

            {/* Responsive Grid of All Related Angles */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
              {images.map((img, i) => (
                <div
                  key={img.url + i}
                  onClick={() => {
                    setActiveImageIndex(i);
                    window.scrollTo({ top: 180, behavior: "smooth" });
                  }}
                  className={`group cursor-pointer flex flex-col bg-white border transition-all duration-300 overflow-hidden ${
                    activeImageIndex === i
                      ? "border-[#B99A65] ring-2 ring-[#B99A65]/40 shadow-md"
                      : "border-[#E5DFD4] hover:border-[#B99A65]"
                  }`}
                >
                  <div className="relative aspect-[3/4] w-full bg-[#EFE9DF] overflow-hidden">
                    <Image
                      src={img.url}
                      alt={img.altText || product.title}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-2 left-2 bg-black/60 text-white text-[9px] px-2 py-0.5 tracking-wider uppercase font-medium">
                      {isRtl ? `زاوية 0${i + 1}` : `ANGLE 0${i + 1}`}
                    </div>
                  </div>
                  <div className="p-3 text-left rtl:text-right bg-white">
                    <p className="text-[11px] font-medium text-[#1F2A24] group-hover:text-[#B99A65] transition-colors line-clamp-1">
                      {img.altText || `${product.title} - Angle ${i + 1}`}
                    </p>
                    <span className="text-[9px] text-[#B99A65] tracking-widest uppercase font-semibold mt-1 inline-block">
                      {isRtl ? "معاينة بالأعلى ↑" : "INSPECT ABOVE ↑"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products Carousel */}
      {relatedProducts.length > 0 && (
        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-14 bg-[#F2EDE2] border-t border-[#EBE5D8] mt-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#B99A65] block mb-2">
                {isRtl ? "أكمل إطلالتك الفاخرة" : "COMPLETE YOUR BESPOKE WARDROBE"}
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-[0.16em] uppercase text-[#1F2A24]">
                {isRtl ? "قد ينال إعجابك أيضاً" : "YOU MAY ALSO APPRECIATE"}
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {relatedProducts.map((relProduct) => (
                <div
                  key={relProduct.id}
                  onClick={() => router.push(`/products/${relProduct.handle}`)}
                  className="group flex flex-col cursor-pointer"
                >
                  <div className="relative aspect-[3/4] w-full bg-[#EFE9DF] overflow-hidden mb-3">
                    <Image
                      src={relProduct.featuredImage.url}
                      alt={relProduct.featuredImage.altText || relProduct.title}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <h3 className="text-[11px] sm:text-xs font-semibold tracking-[0.08em] uppercase text-[#1F2A24] group-hover:text-[#B99A65] transition-colors truncate">
                    {relProduct.title}
                  </h3>
                  <p className="text-xs text-[#1F2A24]/90 tracking-wide mt-1">
                    {t.nav.currency} {relProduct.price.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer />
    </main>
  );
}
