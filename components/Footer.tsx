import React from "react";
import { Dog, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-teal-500 p-1.5 rounded-lg text-white">
                <Dog size={20} />
              </div>
              <span className="text-xl font-bold text-slate-900">
                Paws<span className="text-teal-500">&</span>Tails
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Pusat perawatan hewan peliharaan terpadu. Memberikan kasih sayang
              dan layanan medis terbaik untuk anjing dan kucing kesayangan Anda.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Layanan Cepat</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  Booking Grooming
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  Konsultasi Online
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  Katalog Makanan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  Layanan Antar-Jemput
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Jam Operasional</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li className="flex justify-between">
                <span>Senin - Jumat</span>
                <span className="font-medium text-slate-700">
                  08:00 - 20:00
                </span>
              </li>
              <li className="flex justify-between">
                <span>Sabtu - Minggu</span>
                <span className="font-medium text-slate-700">
                  09:00 - 18:00
                </span>
              </li>
              <li className="flex justify-between text-orange-500 mt-2">
                <span>UGD Hewan</span>
                <span className="font-bold">Buka 24 Jam</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Kontak Info</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-teal-500 shrink-0 mt-0.5" />
                <span>
                  Jl. Sudirman No. 123, Jakarta Pusat, DKI Jakarta 10220
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-teal-500 shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Paws & Tails. Dibuat oleh Alpian
            Tabrani.
          </p>
          <div className="flex gap-4">
            {/* Social icons placeholder */}
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 hover:bg-teal-500 hover:text-white transition-colors cursor-pointer">
              IG
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 hover:bg-teal-500 hover:text-white transition-colors cursor-pointer">
              FB
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
