import Image from "next/image";
import { Award, Heart, Shield, Truck } from "lucide-react";

const stats = [
  { value: "200+", label: "Hewan Dilayani" },
  { value: "4+", label: "Tahun Pengalaman" },
  { value: "4.6★", label: "Rating Pelanggan" },
  { value: "1", label: "Dokter Tersertifikasi" },
];

const features = [
  {
    icon: Award,
    title: "Tim Profesional Tersertifikasi",
    description:
      "Groomer & dokter hewan bersertifikat dengan pengalaman bertahun-tahun.",
    color: "teal",
  },
  {
    icon: Shield,
    title: "Fasilitas Bersih & Aman",
    description: "Sterilisasi rutin dan bebas paparan penyakit antar hewan.",
    color: "orange",
  },
  {
    icon: Heart,
    title: "Produk Hypoallergenic",
    description:
      "Kami hanya menggunakan produk premium yang aman untuk semua jenis kulit.",
    color: "pink",
  },
  {
    icon: Truck,
    title: "Layanan Jemput-Antar",
    description:
      "Pet taxi tersedia di seluruh kota — tinggal pesan, kami yang jemput.",
    color: "blue",
  },
];

const colorMap: Record<string, { bg: string; text: string; badge: string }> = {
  teal: { bg: "bg-teal-50", text: "text-teal-600", badge: "bg-teal-100" },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    badge: "bg-orange-100",
  },
  pink: { bg: "bg-pink-50", text: "text-pink-600", badge: "bg-pink-100" },
  blue: { bg: "bg-blue-50", text: "text-blue-600", badge: "bg-blue-100" },
};

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 font-semibold text-sm mb-4 border border-teal-100">
            <Heart size={14} className="fill-teal-400 text-teal-400" />
            Lebih dari Sekadar Toko
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Mengapa Memilih <span className="text-teal-500">Paws & Tails?</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Kami adalah komunitas pecinta hewan yang berdedikasi memberikan
            kualitas hidup terbaik bagi peliharaan Anda sejak 2018.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center mb-16 md:mb-20">
          {/* Image block */}
          <div className="relative order-2 lg:order-1">
            {/* Background decorasi */}
            <div className="absolute -inset-4 bg-linear-to-tr from-teal-50 to-orange-50 rounded-[2.5rem] z-0" />

            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dokter Hewan & Anjing di Paws & Tails"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              {/* Overlay keterangan */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-6">
                <p className="text-white font-bold text-base">
                  &ldquo;Setiap hewan berhak mendapat perawatan terbaik.&rdquo;
                </p>
                <p className="text-slate-300 text-sm mt-1">
                  — dr. Amir, Dokter Hewan Senior
                </p>
              </div>
            </div>

            {/* Floating badge kanan atas */}
            <div className="absolute -top-4 -right-4 md:-top-5 md:-right-5 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 flex items-center gap-3 z-20">
              <div className="text-2xl font-extrabold text-teal-500">
                {stats[0].value}
              </div>
              <div className="leading-tight">
                <div className="text-xs font-bold text-slate-700">
                  Hewan Peliharaan
                </div>
                <div className="text-xs text-slate-400">Berhasil Ditangani</div>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="order-1 lg:order-2 grid sm:grid-cols-2 gap-4">
            {features.map((feature) => {
              const c = colorMap[feature.color];
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 rounded-2xl p-5 flex flex-col gap-3 transition-all hover:shadow-lg group"
                >
                  <div
                    className={`w-11 h-11 ${c.badge} ${c.text} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-linear-to-r from-teal-500 to-teal-600 rounded-3xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="text-white">
              <div className="text-3xl md:text-4xl font-extrabold mb-1">
                {stat.value}
              </div>
              <div className="text-teal-100 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
