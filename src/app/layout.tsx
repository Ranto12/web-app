import "@/app/globals.css";

import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
  title: "Loyalty Kpoin Brand Landing",
  description:
    "Kumpulkan poin dan nikmati berbagai hadiah keren. Temukan keseruan baru dengan KPOIN, aplikasi tukar poin terlengkap persembahan Kalbe!",
  openGraph: {
    siteName: "KPoin",
    title: "KPoin",
    description:
      "Kumpulkan poin dan nikmati berbagai hadiah keren. Temukan keseruan baru dengan KPOIN, aplikasi tukar poin terlengkap persembahan Kalbe!",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_URL}`,
    locale: "id_ID",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/images/brands/kpoin.webp`,
        type: "image/webp",
        width: 2048,
        height: 2048,
        alt: "KPoin - Tukar Poin dan Dapatkan Hadiah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KPoin",
    description:
      "Kumpulkan poin dan nikmati berbagai hadiah keren. Temukan keseruan baru dengan KPOIN, aplikasi tukar poin terlengkap persembahan Kalbe!",
    images: [`${process.env.NEXT_PUBLIC_URL}/images/brands/kpoin.webp`],
  },
  keywords: ["KPoin", "Loyalty", "Loyalty KPoin", "KPoin App", "KPoin Apps"],
  icons: `${process.env.NEXT_PUBLIC_URL}/favicon.ico`,
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE || "",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}`,
  },
  robots:
    process.env.NEXT_PUBLIC_ISPROD === "1"
      ? "index, follow"
      : "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=5, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta name="copyright" content="PT Medika Komunika Teknologi" />
      </head>
      <body className={`${workSans.className}`}>{children}</body>
    </html>
  );
}
