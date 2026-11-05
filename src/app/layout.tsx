import type { Metadata } from "next";
import { Montserrat, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import SearchDrawer from "@/components/SearchDrawer";
import ProductQuickView from "@/components/ProductQuickView";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elyneluxe.ae"),
  title: "ELYNE LUXE | Heritage Meets Modern Elegance | Premium Emirati Thobes",
  description:
    "Discover ELYNE LUXE - A Signature of Elegance. Luxury Emirati Thobes for Men & Boys crafted with traditional tailoring, Japanese fabrics, and contemporary sophistication.",
  keywords: [
    "Elyne Luxe",
    "Emirati Thobe",
    "Luxury Thobe",
    "Dubai Menswear",
    "Men Thobe",
    "Boys Thobe",
    "Traditional Emirati Fashion",
    "Bespoke Tailoring UAE",
    "ثوب إماراتي",
    "أزياء رجالية فاخرة دبي"
  ],
  openGraph: {
    title: "ELYNE LUXE | A Signature of Elegance | بصمة الأناقة",
    description: "Heritage meets modern elegance. Premium Thobes for Men & Boys. أصالة تلتقي بالأناقة العصرية.",
    url: "https://elyneluxe.ae",
    siteName: "ELYNE LUXE",
    images: [
      {
        url: "/images/elyne-hero-desktop-hq.jpg",
        width: 1200,
        height: 630,
        alt: "ELYNE LUXE Luxury Menswear"
      }
    ],
    locale: "en_AE",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${montserrat.variable} ${ibmPlexSansArabic.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preload" href="/images/elyne-hero-desktop-hq.jpg" as="image" fetchPriority="high" />
      </head>
      <body className="min-h-full flex flex-col bg-[#F9F5EF] text-[#1F2A24] antialiased selection:bg-[#1F2A24] selection:text-[#F9F5EF]">
        <CartProvider>
          {children}
          <CartDrawer />
          <SearchDrawer />
          <ProductQuickView />
        </CartProvider>
      </body>
    </html>
  );
}
