import type { NextConfig } from "next";
import { RemotePattern } from "next/dist/shared/lib/image-config";
import withBundleAnalyzer from "@next/bundle-analyzer";
import nextSafe from "next-safe";

const isDev = process.env.NODE_ENV !== "production";
const allowedImageHostnames: string[] = [];
const imageRemotePatterns: RemotePattern[] = allowedImageHostnames.map(
  (hostname) => ({
    protocol: "https",
    hostname: hostname,
  })
);

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: (nextSafe as any)({
          contentTypeOptions: "nosniff",
          contentSecurityPolicy: {
            mergeDefaultDirectives: true,
            "default-src": "'self'",
            "connect-src": [
              "nusantaradev.chakra.uno",
              "nusantara.chakra.uno",
              "be-chilgo-prenagen-dev-d33dgvhu5a-as.a.run.app",
              "articlecommunityapi.chakra.uno",
              "storage.googleapis.com",
              "fastly.jsdelivr.net",
              "facebook.com",
              "www.google-analytics.com",
              "revamp-loyalty-bff-wcjse4tjjq-et.a.run.app",
              "nusantara.chakrarewards.com",
              "revamp-loyalty-bff-dev-chdcaf35ya-et.a.run.app",
              "be-chilgo-prenagen-dev-chdcaf35ya-et.a.run.app",
              "revamp-loyalty-bff-dev-12772865132.asia-southeast2.run.app",
              "be-chilgo-prenagen-dev-12772865132.asia-southeast2.run.app",
              "analytics.tiktok.com",
              "https://stats.g.doubleclick.net",
              "analytics.google.com",
              "www.google.com",
              "www.googleadservices.com",
              "www.google.co.id",
              "https://kpoinkalbe.api.useinsider.com",
              "https://iowizard.api.useinsider.com",
              "https://segment.api.useinsider.com",
              "https://locationv2.api.useinsider.com",
              "https://hit.api.useinsider.com",
              "https://unification.useinsider.com",
              "https://mobile.useinsider.com",
              "https://contact.useinsider.com",
              "https://mail.useinsider.com",
              "https://web-push.api.useinsider.com",
              "https://sms.useinsider.com",
              "https://verify.useinsider.com",
              "https://whatsapp.useinsider.com",
              "https://catalog.api.useinsider.com",
              "https://eureka.api.useinsider.com",
              "https://eurekaevent.api.useinsider.com",
              "https://recommendation.api.useinsider.com",
              "https://analytics.api.useinsider.com",
              "https://web-push.apis.useinsider.com",
              "https://analytics.api.useinsider.com",
              "https://cdn.useinsider.com",
              "https://cdn.api.useinsider.com",
              "https://assets.useinsider.com",
              "https://assets.api.useinsider.com",
              "https://insider-sw-sdk.useinsider.com",
              "https://insider-sw-sdk.api.useinsider.com",
              "ws:",
              "wss://*.useinsider.com",
              "unpkg.com",
              "cdn.jsdelivr.net",
            ],
            "font-src": [
              "fonts.gstatic.com",
              "*.useinsider.com",
              "*.api.useinsider.com",
            ],
            "img-src": ["*", "data:", "blob:"],
            "media-src": ["*", "data:"],
            "object-src":
              "'self' 'unsafe-inline' *.useinsider.com *.api.useinsider.com",
            "frame-src": ["*"],
            "style-src": [
              "fonts.googleapis.com",
              "fonts.gstatic.com",
              "cdn.jsdelivr.net",
              "tinyurl.com",
              "www.gstatic.com",
              "www.googletagmanager.com",
              "cdn.tiny.cloud",
              "*.useinsider.com",
              "*.api.useinsider.com",
              "'unsafe-inline'",
            ],
            "script-src": [
              "www.google.com",
              "www.gstatic.com",
              "www.google-analytics.com",
              "www.googletagmanager.com",
              "www.facebook.com",
              "connect.facebook.net",
              "tinyurl.com",
              "cdn.tiny.cloud",
              "assets.adobedtm.com",
              "analytics.tiktok.com",
              "www.googleadservices.com",
              "www.google.co.id",
              "https://kpoinkalbe.api.useinsider.com",
              "https://iowizard.api.useinsider.com",
              "https://segment.api.useinsider.com",
              "https://locationv2.api.useinsider.com",
              "https://hit.api.useinsider.com",
              "https://unification.useinsider.com",
              "https://mobile.useinsider.com",
              "https://contact.useinsider.com",
              "https://mail.useinsider.com",
              "https://web-push.api.useinsider.com",
              "https://sms.useinsider.com",
              "https://verify.useinsider.com",
              "https://whatsapp.useinsider.com",
              "https://catalog.api.useinsider.com",
              "https://eureka.api.useinsider.com",
              "https://eurekaevent.api.useinsider.com",
              "https://recommendation.api.useinsider.com",
              "https://analytics.api.useinsider.com",
              "https://web-push.apis.useinsider.com",
              "https://analytics.api.useinsider.com",
              "https://cdn.useinsider.com",
              "https://cdn.api.useinsider.com",
              "https://assets.useinsider.com",
              "https://assets.api.useinsider.com",
              "https://insider-sw-sdk.useinsider.com",
              "https://insider-sw-sdk.api.useinsider.com",
              "*.useinsider.com",
              "*.api.useinsider.com",
              "'unsafe-inline'",
              "'wasm-unsafe-eval'",
              "'unsafe-eval'",
            ],
            "worker-src": ["*"],
            "prefetch-src": false,
            reportOnly: false,
          },
          frameOptions: "DENY",
          isDev: isDev,
          permissionsPolicy: false,
          referrerPolicy: "origin-when-cross-origin",
          xssProtection: "1; mode=block",
          StrictTransportSecurity: "max-age=31536000; includeSubDomains",
        }),
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate",
          },
        ],
      },
    ];
  },
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: false,
  compiler: {
    removeConsole: !isDev,
  },
  compress: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    formats: ["image/webp"],
    remotePatterns: imageRemotePatterns,
  },
  turbopack: {
    resolveAlias: {
      underscore: "lodash",
    },
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.minimize = true;
    }
    return config;
  },
};

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withAnalyzer(nextConfig);
