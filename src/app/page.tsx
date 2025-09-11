import { Metadata } from "next";
import Script from "next/script";
import HomePage from "@/app/view";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Solusi Pintar Tukar Poin Jadi Hadiah",
    description:
      "Kumpulkan poin dan nikmati berbagai hadiah keren. Temukan keseruan baru dengan KPOIN, aplikasi tukar poin terlengkap persembahan Kalbe!",
    openGraph: {
      title: "Solusi Pintar Tukar Poin Jadi Hadiah",
      description:
        "Kumpulkan poin dan nikmati berbagai hadiah keren. Temukan keseruan baru dengan KPOIN, aplikasi tukar poin terlengkap persembahan Kalbe!",
    },
    twitter: {
      title: "Solusi Pintar Tukar Poin Jadi Hadiah",
      description:
        "Kumpulkan poin dan nikmati berbagai hadiah keren. Temukan keseruan baru dengan KPOIN, aplikasi tukar poin terlengkap persembahan Kalbe!",
    },
  };
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Loyalty Kpoin Brand Landing",
    url: `${process.env.NEXT_PUBLIC_URL}`,
    logo: `${process.env.NEXT_PUBLIC_URL}/images/brands/kpoin.webp`,
    sameAs: ["https://www.facebook.com/kpoin", "https://www.twitter.com/kpoin"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+6281901402000",
      contactType: "Customer Service",
    },
  };

  return (
    <>
      <Script id="json-ld" type="application/ld+json" strategy="lazyOnload">
        {JSON.stringify(jsonLd)}
      </Script>
      <HomePage />
    </>
  );
}
