import React, { Suspense } from "react";
import ProductDetailClient from "./ProductDetailClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MOCK_PRODUCTS, MOCK_KIDS_PRODUCTS } from "@/lib/shopify";

export function generateStaticParams() {
  const all = [...MOCK_PRODUCTS, ...MOCK_KIDS_PRODUCTS];
  return all.map((p) => ({
    handle: p.handle
  }));
}

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;

  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#F9F5EF] flex flex-col justify-between">
          <Navbar />
          <div className="flex-1 flex flex-col items-center justify-center py-40">
            <div className="w-10 h-10 border-2 border-[#1F2A24] border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-xs uppercase tracking-[0.2em] text-[#1F2A24]/70">
              LOADING BESPOKE PIECE...
            </p>
          </div>
          <Footer />
        </main>
      }
    >
      <ProductDetailClient handle={handle} />
    </Suspense>
  );
}
