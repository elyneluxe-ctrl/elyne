"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { MOCK_PRODUCTS, Product } from "@/lib/shopify";
import { ArabianGeometricWatermark } from "@/components/ArabianGeometricMotif";
import { Heart, Eye, ShoppingBag, ChevronRight, SlidersHorizontal, Check } from "lucide-react";
import { motion } from "framer-motion";

interface CollectionMeta {
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  heroImage: string;
}

const COLLECTION_DATA: Record<string, CollectionMeta> = {
  "moroccan-hooded-thobes": {
    titleEn: "MOROCCAN HOODED THOBES",
    titleAr: "الكنادير المغربية بالقلنسوة",
    descEn: "Traditional master-tailored Moroccan hooded silhouettes featuring authentic sfifa embroidery.",
    descAr: "كنادير مغربية أصيلة بالقلنسوة وتطريز السفيفة اليدوي الفاخر لمظهر يجمع الأصالة والوقار.",
    heroImage: "/images/collection-men-luxury.jpg"
  },
  "moroccan-thobes-without-hood": {
    titleEn: "MOROCCAN THOBES WITHOUT HOOD",
    titleAr: "الكنادير المغربية بدون قلنسوة",
    descEn: "Clean-cut Moroccan thobes with intricate collar sfifa braiding and comfortable relaxed fit.",
    descAr: "كنادير مغربية راقية بياقة كلاسيكية وتطريز مغربي ناعم خفيف بدون قلنسوة.",
    heroImage: "/images/product-classic-white.webp"
  },
  "moroccan-half-sleeve-thobes": {
    titleEn: "MOROCCAN HALF SLEEVE THOBES",
    titleAr: "الكنادير المغربية بنصف كم",
    descEn: "Breathable short-sleeve artisanal silhouettes tailored for comfort and casual luxury.",
    descAr: "تصاميم مغربية أنيقة بنصف كم تجمع بين التهوية المثالية والخياطة الرفيعة للمناسبات اليومية.",
    heroImage: "/images/campaign-banner-hq.jpg"
  },
  "half-sleeve-thobes": {
    titleEn: "HALF SLEEVE THOBES",
    titleAr: "الكنادير بنصف كم",
    descEn: "Contemporary half-sleeve silhouettes tailored from crisp lightweight summer textiles.",
    descAr: "كنادير عصرية بنصف كم بأقمشة يابانية صيفية باردة مريحة ومميزة.",
    heroImage: "/images/product-sand-beige.webp"
  },
  "kids-thobes": {
    titleEn: "KIDS THOBES",
    titleAr: "كنادير الأولاد والأطفال",
    descEn: "Pure elegance crafted for young gentlemen with hypoallergenic breathable fabrics and comfortable movement.",
    descAr: "كنادير فاخرة ومريحة للأولاد والفرسان الصغار بأقمشة ناعمة تلائم بهجة المناسبات.",
    heroImage: "/images/boys-luxury-thobe.png"
  },
  "emirati-thobes": {
    titleEn: "EMIRATI KANDURAS",
    titleAr: "الكنادير الإماراتية الأصيلة",
    descEn: "Signature handcrafted silhouettes featuring clean single-needle plackets, authentic Tarboosh details, and Japanese Toyobo textiles.",
    descAr: "كنادير إماراتية أصيلة مفصلة بحرفية يدوية مع تفاصيل الطربوش التراثي وأرقى أقمشة التويوبو اليابانية.",
    heroImage: "/images/product-classic-white.webp"
  },
  "moroccan-thobes": {
    titleEn: "MOROCCAN THOBES",
    titleAr: "الكنادير المغربية الراقية",
    descEn: "Masterfully embroidered Moroccan silhouettes featuring hooded and non-hooded cuts with artisanal sfifa braiding.",
    descAr: "كنادير مغربية مطرزة بإتقان وتطريز السفيفة الحرفي مع تصاميم بالطاقية وبدون طاقية.",
    heroImage: "/images/collection-men-luxury.jpg"
  },
  "men": {
    titleEn: "MEN'S ATELIER",
    titleAr: "تشكيلة الرجال الفاخرة",
    descEn: "Bespoke Emirati tailoring and refined luxury thobes crafted for distinguished gentlemen.",
    descAr: "خياطة إماراتية راقية وتصاميم مميزة صُممت لرواد الذوق الرفيع والحضور الاستثنائي.",
    heroImage: "/images/campaign-banner-hq.jpg"
  },
  "boys": {
    titleEn: "BOYS' ATELIER",
    titleAr: "تشكيلة الأولاد والفرسان الصغار",
    descEn: "Heritage silhouettes tailored with ultra-soft hypoallergenic fabrics for young gentlemen.",
    descAr: "تصاميم أصيلة ومريحة بأقمشة ناعمة تلائم بهجة المناسبات وأناقة فرسان الغد.",
    heroImage: "/images/boys-luxury-thobe.png"
  },
  "premium": {
    titleEn: "PREMIUM COUTURE THOBES",
    titleAr: "كنادير الهوت كوتور الفاخرة",
    descEn: "Exclusive small-batch couture tailoring utilizing rare Japanese micro-twill and genuine mother-of-pearl buttons.",
    descAr: "إصدارات خاصة ومحدودة مصنوعة من خيوط المايكروتويول اليابانية النادرة مع أزرار صدفية طبيعية.",
    heroImage: "/images/product-premium-white.webp"
  },
  "premium-thobes": {
    titleEn: "PREMIUM COUTURE THOBES",
    titleAr: "كنادير الهوت كوتور الفاخرة",
    descEn: "Exclusive small-batch tailoring utilizing Japanese micro-twill and genuine mother-of-pearl buttons.",
    descAr: "إصدارات خاصة ومحدودة مصنوعة من خيوط المايكروتويول اليابانية مع أزرار صدفية طبيعية.",
    heroImage: "/images/product-forest-green.webp"
  },
  "modern-thobes": {
    titleEn: "CONTEMPORARY THOBES",
    titleAr: "الكنادير العصرية",
    descEn: "Modern architectural lines and lightweight weaves engineered for dynamic city life in the Gulf.",
    descAr: "خطوط هندسية عصرية وأقمشة خفيفة مصممة لنمط الحياة المتجدد في الخليج العربي.",
    heroImage: "/images/product-sand-beige.webp"
  },
  "thasbih-ring": {
    titleEn: "LUXURY SMART THASBIH RING",
    titleAr: "خاتم التسبيح الذكي الفاخر",
    descEn: "Sophisticated digital count ring in metallic finishes with subtle haptic feedback and OLED display.",
    descAr: "خاتم تسبيح ذكي بتشطيبات معدنية فاخرة مع اهتزاز لمسي هادئ وشاشة رقمية واضحة.",
    heroImage: "/images/thasbih-ring.webp"
  },
  "best-sellers": {
    titleEn: "BEST SELLERS",
    titleAr: "الأكثر طلباً وتفضيلاً",
    descEn: "The signature silhouettes preferred by discerning gentlemen across the United Arab Emirates.",
    descAr: "التصاميم الأكثر طلباً واختياراً لدى عملائنا الكرام في دولة الإمارات العربية المتحدة.",
    heroImage: "/images/product-classic-white.webp"
  },
  "new-arrivals": {
    titleEn: "NEW SEASON ARRIVALS",
    titleAr: "وصل حديثاً — أحدث التشكيلات",
    descEn: "The latest seasonal collection featuring fresh neutral palettes and refined finishes.",
    descAr: "أحدث تصاميم الموسم الجديد بدرجات ألوان ترابية هادئة ولمسات نهائية متميزة.",
    heroImage: "/images/collection-boys-luxury.jpg"
  }
};

export default function CollectionClient({
  handle,
  initialProducts = []
}: {
  handle: string;
  initialProducts?: Product[];
}) {
  const router = useRouter();
  const { addToCart, openCart, setQuickViewProduct, wishlist, toggleWishlist, t, isRtl } = useCart();
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");
  const [addedItemHandle, setAddedItemHandle] = useState<string | null>(null);

  const meta = COLLECTION_DATA[handle] || {
    titleEn: handle.replace(/-/g, " ").toUpperCase(),
    titleAr: "تشكيلة إيلين لوكس الفاخرة",
    descEn: "Curated collection of bespoke Emirati Kanduras and luxury Middle Eastern fashion.",
    descAr: "مختارات فاخرة من الكنادير الإماراتية الأصيلة والأزياء الرجالية الراقية.",
    heroImage: "/images/campaign-banner-hq.jpg"
  };

  const allProducts: Product[] = useMemo(() => {
    // If Shopify returned real live products for this collection, use them directly!
    if (initialProducts && initialProducts.length > 0) {
      return initialProducts;
    }

    if (handle === "boys" || handle === "kids-thobes") {
      const boysList = MOCK_PRODUCTS.filter((p) => p.category === "boys" || p.category === "kids");
      return boysList.length > 0 ? boysList : MOCK_PRODUCTS;
    }
    if (handle === "premium" || handle === "premium-thobes") {
      const premList = MOCK_PRODUCTS.filter((p) => p.category === "premium");
      return premList.length > 0 ? premList : MOCK_PRODUCTS;
    }
    if (handle === "best-sellers") {
      return MOCK_PRODUCTS.filter((p) => p.category === "bestsellers" || p.category === "men");
    }
    return MOCK_PRODUCTS;
  }, [handle, initialProducts]);

  const sortedProducts = useMemo(() => {
    const list = [...allProducts];
    if (sortBy === "price-asc") {
      list.sort((a, b) => parseFloat(a.price.amount) - parseFloat(b.price.amount));
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => parseFloat(b.price.amount) - parseFloat(a.price.amount));
    }
    return list;
  }, [allProducts, sortBy]);

  const handleQuickAdd = (prod: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultVariant = prod.variants[0] || {
      id: `var-${prod.id}-default`,
      title: "Standard",
      price: prod.price,
      availableForSale: true
    };
    addToCart(prod, defaultVariant.id, 1);
    setAddedItemHandle(prod.handle);
    setTimeout(() => setAddedItemHandle(null), 1200);
    openCart();
  };

  return (
    <main className="min-h-screen bg-[#F9F5EF] flex flex-col selection:bg-[#1F2A24] selection:text-[#F9F5EF]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-20 px-6 sm:px-10 lg:px-14 bg-[#1F2A24] text-[#F9F5EF] overflow-hidden border-b border-[#2C3B33]">
        {/* Subtle Desert Courtyard Overlay on Forest Green Header (Subtle 3% Opacity) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <Image
            src="/images/arabian-background-2.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-[0.03] mix-blend-screen"
          />
        </div>
        <ArabianGeometricWatermark opacity={0.02} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/35 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <nav className="inline-flex items-center space-x-2 rtl:space-x-reverse text-[10px] sm:text-xs text-[#B99A65] uppercase tracking-[0.2em] mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              {isRtl ? "الرئيسية" : "HOME"}
            </Link>
            <ChevronRight className="w-3 h-3 rtl:rotate-180" />
            <span>{isRtl ? "التشكيلات" : "COLLECTIONS"}</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-semibold tracking-[0.14em] uppercase text-white leading-tight mb-4">
            {isRtl ? meta.titleAr : meta.titleEn}
          </h1>

          <p className="text-xs sm:text-sm text-[#F9F5EF]/80 font-light max-w-2xl mx-auto leading-relaxed">
            {isRtl ? meta.descAr : meta.descEn}
          </p>
        </div>
      </section>

      {/* Products Filter & Grid Section */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto w-full">
        {/* Controls Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E5DFD4] mb-10">
          <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs text-[#1F2A24] font-medium tracking-wider">
            <SlidersHorizontal className="w-4 h-4 text-[#B99A65]" />
            <span>
              {sortedProducts.length} {isRtl ? "تصاميم متوفرة" : "CREATIONS AVAILABLE"}
            </span>
          </div>

          <div className="flex items-center space-x-3 rtl:space-x-reverse text-xs">
            <span className="text-[#5A605C] uppercase tracking-wider text-[11px]">
              {isRtl ? "ترتيب حسب:" : "SORT BY:"}
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-[#D6CEBE] text-[#1F2A24] px-3 py-2 text-xs uppercase tracking-wider focus:outline-none focus:border-[#1F2A24] cursor-pointer"
            >
              <option value="featured">{isRtl ? "المميزة" : "Featured"}</option>
              <option value="price-asc">{isRtl ? "السعر: من الأقل للأعلى" : "Price: Low to High"}</option>
              <option value="price-desc">{isRtl ? "السعر: من الأعلى للأقل" : "Price: High to Low"}</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {sortedProducts.map((prod) => {
            const isWish = wishlist.includes(prod.id);
            const isAdded = addedItemHandle === prod.handle;

            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5 }}
                onClick={() => router.push(`/products/${prod.handle}`)}
                className="group flex flex-col cursor-pointer bg-white border border-[#EBE5D8] hover:border-[#B99A65]/60 hover:shadow-md transition-all duration-300"
              >
                {/* Visual Image */}
                <div className="relative aspect-[3/4] w-full bg-[#EFE9DF] overflow-hidden">
                  <Image
                    src={prod.featuredImage.url}
                    alt={prod.featuredImage.altText || prod.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(prod.id);
                    }}
                    className={`absolute top-3 ${
                      isRtl ? "left-3" : "right-3"
                    } z-10 p-2 rounded-full bg-white/80 backdrop-blur-xs text-[#1F2A24] hover:scale-110 transition-transform shadow-xs`}
                    aria-label="Save to wishlist"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${
                        isWish ? "fill-[#1F2A24] text-[#1F2A24]" : "text-[#1F2A24]"
                      }`}
                    />
                  </button>

                  {/* Hover Quick Actions */}
                  <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2 z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuickViewProduct(prod);
                      }}
                      className="flex-1 py-2 bg-white/95 backdrop-blur-xs text-[#1F2A24] hover:bg-[#1F2A24] hover:text-white text-[10px] font-semibold tracking-wider uppercase transition-colors flex items-center justify-center space-x-1 rtl:space-x-reverse shadow-md"
                    >
                      <Eye className="w-3 h-3" />
                      <span>{t.bestSellers.quickView}</span>
                    </button>
                    <button
                      onClick={(e) => handleQuickAdd(prod, e)}
                      className="p-2 bg-[#1F2A24] text-white hover:bg-[#B99A65] hover:text-[#1F2A24] transition-colors shadow-md"
                      aria-label="Add to cart"
                    >
                      {isAdded ? <Check className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className={`p-4 flex flex-col justify-between flex-1 ${isRtl ? "text-right" : "text-left"}`}>
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-semibold text-[#B99A65] uppercase tracking-[0.2em] block mb-1">
                      ELYNE LUXE
                    </span>
                    <h3 className="text-xs sm:text-sm font-medium tracking-wide text-[#1F2A24] group-hover:text-[#B99A65] transition-colors line-clamp-1">
                      {prod.title}
                    </h3>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#F2EDE2] flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-[#1F2A24]">
                      {t.nav.currency} {prod.price.amount}
                    </span>
                    <span className="text-[10px] text-[#5A605C] font-light">
                      {isRtl ? "شامل الضريبة" : "VAT Incl."}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
