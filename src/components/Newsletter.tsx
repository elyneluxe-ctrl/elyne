"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { ArabianGeometricWatermark } from "./ArabianGeometricMotif";

export default function Newsletter() {
  const { t, isRtl } = useCart();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setStatus("error");
      setErrorMessage(
        isRtl
          ? "يرجى إدخال عنوان بريد إلكتروني صحيح."
          : "Please enter a valid email address."
      );
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 600);
  };

  return (
    <section className="bg-[#1F2A24] text-[#F9F5EF] py-14 sm:py-16 px-6 sm:px-10 lg:px-14 border-b border-[#2C3B33] relative overflow-hidden">
      {/* Subtle Desert Courtyard Arch Depth + Geometric Detailing (Subtle 3% Opacity) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="/images/arabian-background-2.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_top] opacity-[0.03] mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F2A24] via-transparent to-[#1F2A24]" />
      </div>

      {/* Subtle Islamic Geometric Watermark on Forest Green (Subtle 2% Opacity) */}
      <ArabianGeometricWatermark opacity={0.02} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-14">
          {/* Left Column: Heading & Description */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 15 : -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7 }}
            className={`lg:max-w-md ${isRtl ? "text-right" : "text-left"}`}
          >
            <span className="inline-block text-[10px] sm:text-xs text-[#B99A65] tracking-[0.25em] font-medium uppercase mb-2">
              {t.newsletter.eyebrow}
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-[0.16em] uppercase text-[#F9F5EF] mb-2 leading-snug">
              {t.newsletter.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#F9F5EF]/75 font-light leading-relaxed">
              {t.newsletter.desc}
            </p>
          </motion.div>

          {/* Right Column: Interactive Subscription Form */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -15 : 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full lg:w-auto flex-1 max-w-xl"
          >
            {status === "success" ? (
              <div className="flex items-center space-x-3 rtl:space-x-reverse py-3.5 px-5 bg-[#2A3831] border border-[#B99A65]/40 text-[#F9F5EF] text-xs">
                <Check className="w-4 h-4 text-[#B99A65] shrink-0" />
                <span>
                  {isRtl
                    ? "شكراً لانضمامك إلى مجتمع إيلين لوكس الحصري."
                    : "Thank you for joining. Welcome to the exclusive ELYNE LUXE Circle."}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    placeholder={t.newsletter.placeholder}
                    aria-label="Email Address for ELYNE LUXE newsletter"
                    className="w-full bg-[#18221D] border border-[#34443B] text-[#F9F5EF] placeholder-[#F9F5EF]/40 px-4 py-3 text-xs tracking-wider focus:outline-none focus:border-[#B99A65] transition-colors"
                  />
                  {status === "error" && (
                    <span className="absolute -bottom-5 right-0 rtl:right-auto rtl:left-0 text-[10px] text-red-300">
                      {errorMessage}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-[#F9F5EF] text-[#1F2A24] px-7 py-3 text-xs tracking-[0.2em] font-semibold uppercase hover:bg-[#B99A65] hover:text-[#1F2A24] transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse shrink-0 disabled:opacity-50"
                >
                  <span>
                    {status === "loading"
                      ? isRtl
                        ? "جاري الاشتراك..."
                        : "SUBSCRIBING..."
                      : t.newsletter.button}
                  </span>
                  {isRtl ? (
                    <ArrowLeft className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5" />
                  )}
                </button>
              </form>
            )}
            <p className="text-[10px] text-[#F9F5EF]/45 mt-2.5 font-light">
              {t.newsletter.disclaimer}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
