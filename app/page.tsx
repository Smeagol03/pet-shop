import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Products from "../components/Products";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

// Untuk Pet Shop (Kategori UMKM), poin rasa sakit (pain points) mereka biasanya adalah: manajemen antrean grooming yang berantakan, kurangnya visibilitas online untuk layanan dokter hewan, dan pelanggan yang sering menanyakan katalog makanan hewan. Sebagai Digital Problem Solver, kita tidak hanya menjual "website", tapi kita menjual "Mesin Pembuat Janji Temu & Kasir Online 24/7". Berikut adalah rancangan sample Landing Page bergaya modern (seperti standar Next.js) dengan Tailwind CSS yang telah saya siapkan. Website ini dilengkapi Navbar dengan smooth-scrolling, seksi layanan, katalog produk, dan CTA yang langsung mengarah ke WhatsApp—fitur yang sangat disukai UMKM lokal.
