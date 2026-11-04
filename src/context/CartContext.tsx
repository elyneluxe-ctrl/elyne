"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, ProductVariant, createShopifyCart } from "@/lib/shopify";
import { Translations, getTranslations } from "@/lib/translations";

export interface LocalCartItem {
  lineId: string;
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

interface CartContextType {
  items: LocalCartItem[];
  itemCount: number;
  subtotal: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  addToCart: (product: Product, variantId?: string, quantity?: number) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  removeItem: (lineId: string) => void;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  checkout: () => void;
  language: "EN" | "AR";
  toggleLanguage: () => void;
  setLanguage: (lang: "EN" | "AR") => void;
  t: Translations;
  isRtl: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_CART_KEY = "elyne_luxe_cart_v1";
const LOCAL_STORAGE_WISHLIST_KEY = "elyne_luxe_wishlist_v1";
const LOCAL_STORAGE_LANG_KEY = "elyne_luxe_lang_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<LocalCartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [language, setLanguageState] = useState<"EN" | "AR">("EN");
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(LOCAL_STORAGE_CART_KEY);
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
      const savedWishlist = localStorage.getItem(LOCAL_STORAGE_WISHLIST_KEY);
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      }
      const savedLang = localStorage.getItem(LOCAL_STORAGE_LANG_KEY) as "EN" | "AR" | null;
      if (savedLang === "AR" || savedLang === "EN") {
        setLanguageState(savedLang);
      }
    } catch (e) {
      console.warn("Could not load from localStorage:", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save cart to localStorage on changes
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn("Could not save cart:", e);
    }
  }, [items, isLoaded]);

  // Save wishlist to localStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(LOCAL_STORAGE_WISHLIST_KEY, JSON.stringify(wishlist));
    } catch (e) {
      console.warn("Could not save wishlist:", e);
    }
  }, [wishlist, isLoaded]);

  // Synchronize document dir and lang attributes when language changes
  useEffect(() => {
    if (typeof document !== "undefined") {
      const isArabic = language === "AR";
      document.documentElement.dir = isArabic ? "rtl" : "ltr";
      document.documentElement.lang = isArabic ? "ar" : "en";
      try {
        localStorage.setItem(LOCAL_STORAGE_LANG_KEY, language);
      } catch (e) {
        // ignore
      }
    }
  }, [language]);

  const addToCart = (product: Product, variantId?: string, quantity: number = 1) => {
    const selectedVariant =
      product.variants.find((v) => v.id === variantId) || product.variants[0];

    const lineId = `${product.id}-${selectedVariant.id}`;

    setItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.lineId === lineId);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }
      return [
        ...prev,
        {
          lineId,
          product,
          variant: selectedVariant,
          quantity
        }
      ];
    });

    setIsCartOpen(true);
  };

  const updateQuantity = (lineId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(lineId);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.lineId === lineId ? { ...i, quantity } : i))
    );
  };

  const removeItem = (lineId: string) => {
    setItems((prev) => prev.filter((i) => i.lineId !== lineId));
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "EN" ? "AR" : "EN"));
  };

  const setLanguage = (lang: "EN" | "AR") => {
    setLanguageState(lang);
  };

  const checkout = async () => {
    if (items.length === 0) return;

    try {
      // 1. Map items to Shopify line items format
      const lines = items.map((item) => ({
        merchandiseId: item.variant.id,
        quantity: item.quantity
      }));

      // 2. Call Shopify Storefront API to generate real checkout URL
      const cart = await createShopifyCart(lines);

      if (cart?.checkoutUrl) {
        window.location.href = cart.checkoutUrl;
        return;
      }
    } catch (err) {
      console.warn("Failed to generate direct Shopify checkout URL, falling back to store cart:", err);
    }

    // Fallback: If products are mock or API is unavailable, redirect directly to Shopify store cart
    const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || "elyneluxe.myshopify.com";
    window.location.href = `https://${storeDomain}/cart`;
  };

  const itemCount = items.reduce((acc, curr) => acc + curr.quantity, 0);
  const subtotal = items.reduce(
    (acc, curr) => acc + parseFloat(curr.variant.price.amount) * curr.quantity,
    0
  );

  const t = getTranslations(language);
  const isRtl = language === "AR";

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        subtotal,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        isSearchOpen,
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => setIsSearchOpen(false),
        quickViewProduct,
        setQuickViewProduct,
        addToCart,
        updateQuantity,
        removeItem,
        wishlist,
        toggleWishlist,
        checkout,
        language,
        toggleLanguage,
        setLanguage,
        t,
        isRtl
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
