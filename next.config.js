/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeFonts: true,
  },
}

module.exports = nextConfig 