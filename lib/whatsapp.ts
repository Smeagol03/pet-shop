// ============================================
// Konfigurasi WhatsApp Terpusat
// Ubah nomor WA di sini saja, semua tombol CTA
// di seluruh website akan otomatis berubah.
// ============================================

export const WA_NUMBER = "6281547190395";

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Pesan otomatis WhatsApp sesuai PRD user flow
export const WA_MESSAGES = {
  grooming:
    "Halo min, saya lihat dari website. Saya ingin booking jadwal grooming untuk anabul saya 🐾",
  klinik:
    "Halo min, saya lihat dari website. Saya ingin konsultasi/booking jadwal dokter hewan 🏥",
  konsultasi:
    "Halo min, saya ingin konsultasi gratis tentang kesehatan hewan peliharaan saya 💬",
  produk: (nama: string) =>
    `Halo min, saya tertarik dengan produk "${nama}" yang ada di website. Apakah tersedia? 🛒`,
  katalog:
    "Halo min, saya ingin tahu katalog lengkap produk yang tersedia 📦",
  umum: "Halo min, saya lihat dari website Paws & Tails. Saya ingin bertanya 😊",
};
