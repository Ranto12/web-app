import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.NEXT_PUBLIC_ISPROD === "1";
  const baseUrl = process.env.NEXT_PUBLIC_URL || "";
  return {
    rules:
      process.env.NEXT_PUBLIC_ISPROD === "1"
        ? [
            {
              userAgent: "facebookexternalhit",
              disallow: "",
            },
            {
              userAgent: "Twitterbot",
              disallow: "",
            },
            {
              userAgent: "Mediapartners-Google",
              disallow: "",
            },
            {
              userAgent: "*",
              disallow: ["/*?"],
            },
          ]
        : [
            {
              userAgent: "*",
              disallow: "/",
            },
          ],
    sitemap: isProd ? `${baseUrl}/sitemap.xml` : undefined,
  };
}
