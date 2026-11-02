"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { useCart } from "@/context/CartContext";

export default function ContactPage() {
  const { t, isRtl } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "Bespoke Kandura Tailoring",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <main className="min-h-screen bg-[#F9F5EF] flex flex-col selection:bg-[#1F2A24] selection:text-[#F9F5EF]">
      {/* Navigation */}
      <Navbar />

      {/* Cinematic Dark Header Section */}
      <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 px-6 sm:px-10 lg:px-14 bg-[#1F2A24] text-[#F9F5EF] overflow-hidden border-b border-[#2C3B33]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#B99A65]/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="w-12 h-6 relative mb-4 opacity-90">
              <Image
                src="/images/elyne-luxe-emblem-white.png"
                alt="ELYNE LUXE Emblem"
                fill
                className="object-contain"
              />
            </div>

            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#B99A65] block mb-3">
              {t.contact.eyebrow}
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[0.14em] uppercase text-white leading-[1.12] mb-6">
              {t.contact.title}
            </h1>

            <p className="text-xs sm:text-sm text-[#F9F5EF]/80 font-light max-w-xl mx-auto leading-relaxed">
              {t.contact.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Channels & Atelier Information */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-10"
          >
            <div className={isRtl ? "text-right" : "text-left"}>
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#B99A65] block mb-2">
                {isRtl ? "قنوات التواصل المباشرة" : "DIRECT CHANNELS"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.12em] uppercase text-[#1F2A24] mb-8">
                {isRtl ? "تواصل مباشر مع الدار" : "CONNECT DIRECTLY"}
              </h2>

              <div className="space-y-6">
                {/* Channel 1: WhatsApp Concierge */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse p-5 bg-[#F2EDE2] border border-[#E4DDD0] transition-colors hover:border-[#B99A65]">
                  <div className="w-10 h-10 rounded-full bg-[#1F2A24] text-[#F9F5EF] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-[#B99A65]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#1F2A24] mb-1">
                      {isRtl ? "خدمة العملاء عبر واتساب" : "WhatsApp VIP Concierge"}
                    </h3>
                    <p className="text-xs text-[#5A605C] mb-2 font-light">
                      {isRtl
                        ? "استفسارات المقاسات، الخياطة الخاصة، وخدمة العملاء الفورية."
                        : "Instant client care, styling inquiries & sizing support."}
                    </p>
                    <a
                      href="https://wa.me/971501234567"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1.5 rtl:space-x-reverse text-xs font-semibold tracking-wider text-[#1F2A24] hover:text-[#B99A65] transition-colors"
                    >
                      <span>{isRtl ? "تحدث عبر واتساب" : "CHAT ON WHATSAPP"}</span>
                      <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                    </a>
                  </div>
                </div>

                {/* Channel 2: Telephone */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse p-5 bg-[#F2EDE2] border border-[#E4DDD0] transition-colors hover:border-[#B99A65]">
                  <div className="w-10 h-10 rounded-full bg-[#1F2A24] text-[#F9F5EF] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#B99A65]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#1F2A24] mb-1">
                      {isRtl ? "الهاتف المباشر" : "Telephone Inquiries"}
                    </h3>
                    <p className="text-xs text-[#5A605C] mb-1 font-light">
                      {isRtl
                        ? "دعم هاتفي مباشر خلال ساعات عمل الأتيليه."
                        : "Direct telephone support during atelier hours."}
                    </p>
                    <a
                      href="tel:+97148005893"
                      className="text-xs font-medium tracking-wide text-[#1F2A24] hover:text-[#B99A65] transition-colors"
                      dir="ltr"
                    >
                      +971 4 800 LUXE (5893)
                    </a>
                  </div>
                </div>

                {/* Channel 3: Email */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse p-5 bg-[#F2EDE2] border border-[#E4DDD0] transition-colors hover:border-[#B99A65]">
                  <div className="w-10 h-10 rounded-full bg-[#1F2A24] text-[#F9F5EF] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#B99A65]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#1F2A24] mb-1">
                      {isRtl ? "البريد الإلكتروني" : "Electronic Mail"}
                    </h3>
                    <p className="text-xs text-[#5A605C] mb-1 font-light">
                      {isRtl
                        ? "للاستفسارات العامة والطلبات الحصرية."
                        : "General inquiries and bespoke requests."}
                    </p>
                    <a
                      href="mailto:concierge@elyneluxe.ae"
                      className="text-xs font-medium tracking-wide text-[#1F2A24] hover:text-[#B99A65] transition-colors block"
                    >
                      concierge@elyneluxe.ae
                    </a>
                  </div>
                </div>

                {/* Channel 4: Atelier Location */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse p-5 bg-[#F2EDE2] border border-[#E4DDD0] transition-colors hover:border-[#B99A65]">
                  <div className="w-10 h-10 rounded-full bg-[#1F2A24] text-[#F9F5EF] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#B99A65]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#1F2A24] mb-1">
                      {t.contact.locationTitle}
                    </h3>
                    <p className="text-xs text-[#5A605C] font-light leading-relaxed">
                      {t.contact.locationDesc}
                    </p>
                    <div className="mt-2 flex items-center space-x-1.5 rtl:space-x-reverse text-[11px] text-[#B99A65]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{t.contact.hoursDesc}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Private Consultation Highlight */}
            <div className={`p-6 bg-[#1F2A24] text-[#F9F5EF] relative overflow-hidden ${isRtl ? "text-right" : "text-left"}`}>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-[#B99A65] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                <Sparkles className="w-4 h-4" />
                <span>{isRtl ? "جلسات قياس خاصة" : "PRIVATE ATELIER FITTINGS"}</span>
              </div>
              <p className="text-xs font-light text-[#F9F5EF]/80 leading-relaxed">
                {isRtl
                  ? "عش تجربة خياطة الكندورة الإماراتية الفاخرة في جناحنا الخاص مع كبار الخياطين ومختارات الأقمشة الحصرية."
                  : "Experience bespoke Kandura craftsmanship in our private suite with master tailors and personalized fabric curation."}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Luxury Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`lg:col-span-7 bg-[#FFFFFF] p-8 sm:p-12 border border-[#E6E0D3] shadow-sm flex flex-col justify-between ${
              isRtl ? "text-right" : "text-left"
            }`}
          >
            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#1F2A24]/10 text-[#1F2A24] flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8 text-[#B99A65]" />
                </div>
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B99A65]">
                  {isRtl ? "تم إرسال الطلب بنجاح" : "INQUIRY TRANSMITTED"}
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-[0.1em] uppercase text-[#1F2A24]">
                  {isRtl ? `شكراً لك، ${formData.name || "عميلنا الكريم"}` : `THANK YOU, ${formData.name || "ESTEEMED CLIENT"}`}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A605C] max-w-md font-light leading-relaxed">
                  {t.contact.form.success}
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        inquiryType: "Bespoke Kandura Tailoring",
                        message: ""
                      });
                    }}
                    className="px-6 py-2.5 border border-[#1F2A24] text-[#1F2A24] text-xs tracking-[0.2em] font-medium uppercase hover:bg-[#1F2A24] hover:text-[#F9F5EF] transition-colors"
                  >
                    {isRtl ? "إرسال استفسار آخر" : "SEND ANOTHER INQUIRY"}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#B99A65] block mb-2">
                    {isRtl ? "حجز موعد أو استفسار" : "REQUEST AN APPOINTMENT OR INQUIRY"}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.12em] uppercase text-[#1F2A24] mb-2">
                    {isRtl ? "أرسل رسالة" : "SEND A MESSAGE"}
                  </h2>
                  <p className="text-xs text-[#5A605C] font-light">
                    {isRtl
                      ? "يرجى تعبئة النموذج أدناه. سيسعد مستشارنا بالتواصل معك."
                      : "Kindly complete the form below. Our concierge will be delighted to assist you."}
                  </p>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-medium tracking-[0.15em] uppercase text-[#1F2A24] mb-2">
                    {t.contact.form.name} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isRtl ? "مثال: راشد النعيمي" : "e.g. Rashid Al Nuaimi"}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DCD5C7] text-sm text-[#1F2A24] focus:outline-none focus:border-[#1F2A24] transition-colors"
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-medium tracking-[0.15em] uppercase text-[#1F2A24] mb-2">
                      {t.contact.form.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@domain.com"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DCD5C7] text-sm text-[#1F2A24] focus:outline-none focus:border-[#1F2A24] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium tracking-[0.15em] uppercase text-[#1F2A24] mb-2">
                      {t.contact.form.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 000 0000"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DCD5C7] text-sm text-[#1F2A24] focus:outline-none focus:border-[#1F2A24] transition-colors"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-[11px] font-medium tracking-[0.15em] uppercase text-[#1F2A24] mb-2">
                    {t.contact.form.subject} *
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DCD5C7] text-sm text-[#1F2A24] focus:outline-none focus:border-[#1F2A24] transition-colors cursor-pointer"
                  >
                    <option value="Bespoke Kandura Tailoring">
                      {isRtl ? "استشارة خياطة الكندورة المخصصة" : "Bespoke Kandura Tailoring Consultation"}
                    </option>
                    <option value="VIP Atelier Fitting">
                      {isRtl ? "جلسة قياس خاصة في الأتيليه" : "VIP Private Atelier Fitting"}
                    </option>
                    <option value="Kids & Junior Collection">
                      {isRtl ? "مقاسات تشكيلة الأولاد والناشئين" : "Kids & Junior Collection Sizing"}
                    </option>
                    <option value="Order Status & Care">
                      {isRtl ? "حالة الطلب والعناية بالملابس" : "Order Status & Garment Care"}
                    </option>
                    <option value="Corporate & Wedding Gifting">
                      {isRtl ? "هدايا الشركات وحفلات الزفاف" : "Corporate & Wedding Gifting"}
                    </option>
                    <option value="General Inquiries">
                      {isRtl ? "استفسارات عامة" : "General Brand Inquiries"}
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-medium tracking-[0.15em] uppercase text-[#1F2A24] mb-2">
                    {t.contact.form.message} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      isRtl
                        ? "يرجى تحديد الموعد المفضل للاستشارة، أو نوع الكندورة المطلوب، أو أي تفاصيل خاصة..."
                        : "Please specify preferred consultation dates, thobe styles, or any bespoke requirements..."
                    }
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DCD5C7] text-sm text-[#1F2A24] focus:outline-none focus:border-[#1F2A24] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#1F2A24] text-[#F9F5EF] text-xs font-semibold tracking-[0.22em] uppercase hover:bg-[#B99A65] hover:text-[#1F2A24] transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  {loading ? (
                    <span>{isRtl ? "جاري الإرسال..." : "TRANSMITTING..."}</span>
                  ) : (
                    <>
                      <span>{t.contact.form.submit}</span>
                      <Send className="w-3.5 h-3.5 rtl:rotate-180" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
