"use client";
import Image from "next/image";
import { ChevronRight, Phone, Star, Stethoscope } from "lucide-react";
import { scrollToSection } from "../lib/utils";
import { getWhatsAppUrl, WA_MESSAGES } from "../lib/whatsapp";
import "../app/hero.css";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-container relative py-24 md:py-28 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Paw pattern background */}
        <div className="hero-paw-pattern" />
        {/* Animated decorative blobs */}
        <div className="hero-blob blob-1" />
        <div className="hero-blob blob-2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left mt-8 md:mt-0">
            <div className="inline-flex overflow-hidden items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-orange-100 text-orange-600 font-semibold text-xs md:text-sm mb-4 md:mb-6 animate-in slide-in-from-left-8 duration-700">
              <Star size={16} className="fill-current animate-pulse" />
              <span>Klinik & Pet Shop Terpercaya #1</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-4 md:mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              Perawatan Terbaik untuk{" "}
              <span className="text-teal-500 block sm:inline">
                Sahabat Berbulu
              </span>{" "}
              Anda.
            </h1>
            <p className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Dari layanan grooming profesional, klinik kesehatan, hingga
              makanan berkualitas tinggi. Kami memastikan hewan peliharaan Anda
              selalu sehat dan bahagia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start px-4 sm:px-0 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, "services")}
                className="bg-teal-500 hover:bg-teal-600 text-sm md:text-base text-white px-6 py-3.5 md:px-8 md:py-4 rounded-full font-bold transition-all shadow-lg shadow-teal-500/30 flex items-center justify-center gap-2 group w-full sm:w-auto hover:scale-105"
              >
                Lihat Layanan
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href={getWhatsAppUrl(WA_MESSAGES.konsultasi)}
                target="_blank"
                rel="noreferrer"
                className="bg-white hover:bg-slate-50 text-slate-800 text-sm md:text-base border-2 border-slate-200 px-6 py-3.5 md:px-8 md:py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 w-full sm:w-auto hover:border-teal-100 hover:scale-105"
              >
                <Phone size={20} className="text-teal-500" />
                Konsultasi Gratis
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in zoom-in-75 duration-1000 delay-500">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="image-backdrop absolute inset-0 transform rotate-3 shadow-2xl"></div>
              <Image
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Happy Dog"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="absolute inset-0 w-full h-full object-cover rounded-full border-8 border-white shadow-inner transform -rotate-3 transition-transform hover:rotate-0 duration-500"
              />

              {/* Floating Badge */}
              <div className="floating-element absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-50">
                <div className="bg-orange-100 p-3 rounded-full text-orange-500">
                  <Stethoscope size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Dokter Hewan
                  </p>
                  <p className="text-xs text-slate-500">Tersedia 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
