import React from "react";
import { Phone } from "lucide-react";
import { getWhatsAppUrl, WA_MESSAGES } from "../lib/whatsapp";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500 rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2 blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Siap Memanjakan Peliharaan Anda?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Jangan biarkan mereka menunggu. Booking jadwal grooming atau
              konsultasi dokter hewan sekarang dengan mudah melalui WhatsApp
              kami.
            </p>
            <a
              href={getWhatsAppUrl(WA_MESSAGES.umum)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-teal-500/50"
            >
              <Phone size={24} className="hidden md:block" />
              Chat WhatsApp Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
