/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["www.datocms-assets.com", "picsum.photos"],
  },
};

module.exports = nextConfig;
