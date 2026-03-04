import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <Image
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Vet with Dog"
              width={800}
              height={600}
              className="w-full h-auto rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-200 rounded-full z-0"></div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Mengapa Memilih Paws & Tails?
            </h2>
            <p className="text-slate-600 text-lg mb-6">
              Kami bukan sekadar pet shop. Kami adalah komunitas pecinta hewan
              yang berdedikasi untuk memberikan kualitas hidup terbaik bagi
              peliharaan Anda. Didirikan sejak 2018, kami telah melayani lebih
              dari 5.000+ hewan peliharaan.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Tim Groomer & Dokter Hewan Tersertifikasi",
                "Fasilitas Bersih, Aman, dan Bebas Kutu",
                "Menggunakan Produk Premium & Hypoallergenic",
                "Layanan Jemput-Antar (Pet Taxi) Tersedia",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 bg-teal-500 rounded-full p-1 text-white">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
