import React, { Suspense } from "react";
import CollectionClient from "./CollectionClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const KNOWN_COLLECTIONS = [
  "emirati-thobes",
  "moroccan-thobes",
  "men",
  "boys",
  "premium-thobes",
  "modern-thobes",
  "thasbih-ring",
  "best-sellers",
  "new-arrivals",
  "kids-thobes"
];

export function generateStaticParams() {
  return KNOWN_COLLECTIONS.map((handle) => ({ handle }));
}

export default async function CollectionPage({
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
              LOADING ATELIER COLLECTION...
            </p>
          </div>
          <Footer />
        </main>
      }
    >
      <CollectionClient handle={handle} />
    </Suspense>
  );
}
