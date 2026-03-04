import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ChevronRight } from "lucide-react";
import { getWhatsAppUrl, WA_MESSAGES } from "../lib/whatsapp";
import { topProducts } from "../lib/data";

export default function Products() {
  return (
    <section
      id="products"
      className="py-16 md:py-20 bg-slate-50 border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4 md:gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4">
              Produk Unggulan
            </h2>
            <p className="text-base md:text-lg text-slate-600">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-sm sm:max-w-none mx-auto">
          {topProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col group"
            >
              <Link
                href={`/produk/${product.slug}`}
                className="block relative h-64 overflow-hidden bg-slate-100"
              >
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
              </Link>
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <Link href={`/produk/${product.slug}`}>
                  <h3 className="font-bold text-base md:text-lg text-slate-900 mb-2 line-clamp-2 h-12 md:h-14 hover:text-teal-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center justify-between mt-3 md:mt-4">
                  <span className="text-xl md:text-2xl font-extrabold text-teal-600">
                    {product.price}
                  </span>
                  <Link
                    href={`/produk/${product.slug}`}
                    className="bg-slate-50 hover:bg-teal-500 hover:text-white text-slate-600 p-2.5 md:p-3 rounded-xl md:rounded-2xl transition-colors shadow-sm inline-flex"
                  >
                    <ShoppingBag size={18} className="md:w-5 md:h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 text-center md:hidden w-full px-4">
          <a
            href={getWhatsAppUrl(WA_MESSAGES.katalog)}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-800 w-full py-4 rounded-full font-bold transition-colors text-sm"
          >
            Lihat Full Katalog <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
