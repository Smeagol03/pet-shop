import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ShoppingBag } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import { topProducts } from "@/lib/data";
import { getWhatsAppUrl, WA_MESSAGES } from "@/lib/whatsapp";

// Konfigurasi SEO Dinamis: Generate Meta Tags berdasarkan slug produk!
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const product = topProducts.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    return constructMetadata({
      title: "Produk Tidak Ditemukan",
    });
  }

  // Gunakan template yang kita buat di fungsi SEO
  return constructMetadata({
    title: `${product.name} | Paws & Tails`,
    description: product.description,
    image: product.image,
  });
}

// Fitur Next.js: Pastikan halaman dirender saat build dengan generateStaticParams
export function generateStaticParams() {
  return topProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const product = topProducts.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-600 font-medium mb-8 transition-colors"
        >
          <ChevronLeft size={20} /> Kembali ke Katalog
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
          {/* Bagian Gambar */}
          <div className="md:w-1/2 relative min-h-[300px] md:min-h-full bg-slate-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Bagian Detail */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="inline-block bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-bold mb-4 w-max">
              {product.category}
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
              {product.name}
            </h1>

            <p className="text-2xl font-black text-teal-500 mb-6">
              {product.price}
            </p>

            <p className="text-slate-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="border-t border-slate-100 pt-8 mt-auto">
              <a
                href={getWhatsAppUrl(WA_MESSAGES.produk(product.name))}
                target="_blank"
                rel="noreferrer"
                className="w-full flex justify-center items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-teal-500/30"
              >
                <ShoppingBag size={24} />
                Beli via WhatsApp Sekarang
              </a>
              <p className="text-center text-xs text-slate-400 mt-4">
                Klik tombol di atas untuk cek ketersediaan stok admin kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
