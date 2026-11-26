import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";
const companySlug = process.env.NEXT_PUBLIC_COMPANY_SLUG;

const nextConfig: NextConfig = {
  ...(isDev && companySlug ? { distDir: `.next-${companySlug}` } : {}),
  trailingSlash: true,
  images: { unoptimized: true },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "src/app/globals.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
