import type { Metadata } from "next";

export const siteMetadata = {
  title: "Paws & Tails - Klinik & Pet Shop Terpercaya #1",
  description:
    "Pusat perawatan hewan peliharaan terpadu. Memberikan kasih sayang dan layanan medis terbaik untuk anjing dan kucing kesayangan Anda dari grooming profesional hingga makanan berkualitas.",
  siteUrl: "https://paws-tails-petshop.com", // Ganti dengan URL asli website Anda jika sudah online
  siteName: "Paws & Tails",
  authors: [{ name: "Alpian Tabrani" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://paws-tails-petshop.com",
    siteName: "Paws & Tails",
    images: [
      {
        url: "/og-image.jpg", // Gambar default untuk OG Image
        width: 1200,
        height: 630,
        alt: "Paws & Tails - Klinik & Pet Shop Terpercaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pawstails",
    creator: "@pawstails",
  },
};

// Fungsi helper ini bisa digunakan di halaman mana pun untuk mengganti atribut meta secara dinamis
export function constructMetadata({
  title = siteMetadata.title,
  description = siteMetadata.description,
  image = siteMetadata.openGraph.images[0].url,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    authors: siteMetadata.authors,
    openGraph: {
      ...siteMetadata.openGraph,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...siteMetadata.twitter,
      title,
      description,
      images: [image],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
