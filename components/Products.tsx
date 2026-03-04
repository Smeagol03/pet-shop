import React from "react";
import Image from "next/image";
import { ShoppingBag, ChevronRight } from "lucide-react";
import { getWhatsAppUrl, WA_MESSAGES } from "../lib/whatsapp";

// Mock data untuk 6 produk teratas
const topProducts = [
  {
    id: 1,
    name: "Premium Dog Food Makanan Anjing Dewasa 2kg",
    price: "Rp 185.000",
    category: "Makanan Anjing",
    image:
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Cat Tree Tower Mewah 3 Tingkat",
    price: "Rp 450.000",
    category: "Aksesoris Kucing",
    image:
      "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Mainan Kucing Tongkat Bulu Interaktif",
    price: "Rp 35.000",
    category: "Mainan",
    image:
      "https://images.openai.com/static-rsc-1/ylXiZbkBEnIw7pfhexrtAOgZVkiY6ekwwoF8KXg9yvHYUkXfmGBOjT1RIm7ERYBLU3QUWfJBVixOa9xQMFMqQfNjeKzPB7y-6Uqa0aXXR7zTogB1oKj1HLwo0g_xRcHrCNWhbb5tiUP2NtU2PbkfAJC6fia2ZYztOJ-V5GLanrK-QBE0eP0A3b3s-ZndTXl_7-Fc5z3_2_E-T4HV2tgm0nYIxDt9BRFdACGmd2Ss3eE?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Pet Carrier Tas Gendong Kucing & Anjing Kecil",
    price: "Rp 125.000",
    category: "Aksesoris",
    image:
      "https://images.unsplash.com/photo-1599839619722-39751411ea63?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Tali Tuntun Leash Elastis Kualitas Premium",
    price: "Rp 85.000",
    category: "Aksesoris Anjing",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Snack Tulang Mainan Gigitan Anjing",
    price: "Rp 55.000",
    category: "Snack",
    image:
      "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-20 bg-slate-50 border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Produk Terlaris Kami
            </h2>
            <p className="text-slate-600 text-lg">
              Penuhi kebutuhan nutrisi dan kebahagiaan anabul Anda dengan produk
              pilihan terbaik dari toko kami.
            </p>
          </div>
          <a
            href={getWhatsAppUrl(WA_MESSAGES.katalog)}
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 text-teal-600 font-bold hover:text-teal-700 transition-colors group"
          >
            Lihat Full Katalog{" "}
            <ChevronRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-sm">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2 line-clamp-2 h-14">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-extrabold text-teal-600">
                    {product.price}
                  </span>
                  <a
                    href={getWhatsAppUrl(WA_MESSAGES.produk(product.name))}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-slate-50 hover:bg-teal-500 hover:text-white text-slate-600 p-3 rounded-2xl transition-colors shadow-sm inline-flex"
                  >
                    <ShoppingBag size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 text-center md:hidden">
          <a
            href={getWhatsAppUrl(WA_MESSAGES.katalog)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-800 px-8 py-4 rounded-full font-bold transition-colors"
          >
            Lihat Full Katalog <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
