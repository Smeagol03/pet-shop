"use client";
import React from "react";
import { Scissors, Stethoscope, ShoppingBag, ChevronRight } from "lucide-react";
import { scrollToSection } from "../lib/utils";
import { getWhatsAppUrl, WA_MESSAGES } from "../lib/whatsapp";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4">
            Layanan Lengkap Kami
          </h2>
          <p className="text-base md:text-lg text-slate-600 px-2 md:px-0">
            Semua yang dibutuhkan hewan peliharaan Anda ada di satu tempat.
            Ditangani oleh profesional yang mencintai hewan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-sm md:max-w-none mx-auto">
          {/* Service 1 */}
          <div className="bg-slate-50 rounded-3xl p-6 md:p-8 hover:shadow-xl transition-shadow border border-slate-100 group">
            <div className="bg-teal-100 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-teal-600 mb-5 md:mb-6 group-hover:scale-110 transition-transform">
              <Scissors size={32} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">
              Premium Grooming
            </h3>
            <p className="text-sm md:text-base text-slate-600 mb-6">
              Mandi, potong bulu, potong kuku, dan pembersihan telinga dengan
              produk aman & hypoallergenic.
            </p>
            <a
              href={getWhatsAppUrl(WA_MESSAGES.grooming)}
              target="_blank"
              rel="noreferrer"
              className="text-teal-500 font-semibold flex items-center gap-1 hover:text-teal-600"
            >
              Booking Jadwal <ChevronRight size={16} />
            </a>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-teal-50 relative transform md:-translate-y-4">
            <div className="absolute top-0 right-6 md:right-8 transform -translate-y-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              Terpopuler
            </div>
            <div className="bg-orange-100 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-orange-600 mb-5 md:mb-6">
              <Stethoscope size={32} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">
              Klinik Kesehatan
            </h3>
            <p className="text-sm md:text-base text-slate-600 mb-6">
              Vaksinasi, pemeriksaan rutin, rawat inap, dan tindakan medis oleh
              dokter hewan bersertifikat.
            </p>
            <a
              href={getWhatsAppUrl(WA_MESSAGES.klinik)}
              target="_blank"
              rel="noreferrer"
              className="text-orange-500 font-semibold flex items-center gap-1 hover:text-orange-600"
            >
              Konsultasi Dokter <ChevronRight size={16} />
            </a>
          </div>

          {/* Service 3 */}
          <div className="bg-slate-50 rounded-3xl p-6 md:p-8 hover:shadow-xl transition-shadow border border-slate-100 group">
            <div className="bg-blue-100 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-5 md:mb-6 group-hover:scale-110 transition-transform">
              <ShoppingBag size={32} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">
              Pet Store
            </h3>
            <p className="text-sm md:text-base text-slate-600 mb-6">
              Koleksi makanan premium, vitamin, mainan, hingga aksesoris lucu
              untuk kucing dan anjing.
            </p>
            <a
              href="#products"
              onClick={(e) => scrollToSection(e, "products")}
              className="text-blue-500 font-semibold flex items-center gap-1 hover:text-blue-600"
            >
              Lihat Katalog <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
