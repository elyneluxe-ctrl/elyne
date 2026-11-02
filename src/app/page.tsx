import React from "react";
import Navbar from "@/components/Navbar";
import HeroVideo from "@/components/HeroVideo";
import BrandIntroduction from "@/components/BrandIntroduction";
import CollectionCards from "@/components/CollectionCards";
import KidsCollectionSection from "@/components/KidsCollectionSection";
import BestSellers from "@/components/BestSellers";
import Craftsmanship from "@/components/Craftsmanship";
import CampaignBanner from "@/components/CampaignBanner";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F9F5EF] flex flex-col selection:bg-[#1F2A24] selection:text-[#F9F5EF]">
      {/* 01. Transparent to Solid Luxury Navbar & Mega Menu */}
      <Navbar />

      {/* 01. Full-Screen Cinematic Hero Video / Poster */}
      <HeroVideo />

      {/* 02. Brand Introduction: Heritage Meets Modern Elegance */}
      <BrandIntroduction />

      {/* 03. Men's Collection */}
      <CollectionCards />

      {/* 04. Dedicated Kids Collection Section */}
      <KidsCollectionSection />

      {/* 05. Best Sellers: Four-column dynamically loaded Kanduras */}
      <BestSellers />

      {/* 7. Craftsmanship: Details Define Elegance & Macro Photography */}
      <Craftsmanship />

      {/* 8. Full-Width Campaign Banner: Timeless By Tradition */}
      <CampaignBanner />

      {/* 09. Newsletter: Join the ELYNE LUXE Circle */}
      <Newsletter />

      {/* 11. Footer: Luxury Forest-Green Complete Footer */}
      <Footer />
    </main>
  );
}
