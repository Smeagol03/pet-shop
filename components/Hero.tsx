"use client";
import React from "react";
import Image from "next/image";
import { ChevronRight, Phone, Star, Stethoscope } from "lucide-react";
import { scrollToSection } from "../lib/utils";
import { getWhatsAppUrl, WA_MESSAGES } from "../lib/whatsapp";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {/* Background pattern/blobs */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50 rounded-bl-full opacity-50 transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-50 rounded-full opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm mb-6">
              <Star size={16} className="fill-current" />
              <span>Klinik & Pet Shop Terpercaya #1</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Perawatan Terbaik untuk{" "}
              <span className="text-teal-500">Sahabat Berbulu</span> Anda.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Dari layanan grooming profesional, klinik kesehatan, hingga
              makanan berkualitas tinggi. Kami memastikan hewan peliharaan Anda
              selalu sehat dan bahagia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, "services")}
                className="bg-teal-500 hover:bg-teal-600 text-sm text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-teal-500/30 flex items-center justify-center gap-2 group"
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
                className="bg-white hover:bg-slate-50 text-slate-800 text-sm border-2 border-slate-200 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2"
              >
                <Phone size={20} className="text-teal-500" />
                Konsultasi Gratis
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            {/* Image Placeholder - In production use next/image */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-linear-to-tr from-teal-400 to-teal-200 rounded-full shadow-2xl transform rotate-3"></div>
              <Image
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Happy Dog"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="absolute inset-0 w-full h-full object-cover rounded-full border-8 border-white shadow-inner transform -rotate-3 transition-transform hover:rotate-0 duration-500"
              />

              {/* Floating Badge */}
              <div
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce"
                style={{ animationDuration: "3s" }}
              >
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
