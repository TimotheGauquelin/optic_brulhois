/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Optimisation SEO
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;

