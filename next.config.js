/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'https://images.unsplash.com',
      'images.unsplash.com',
      'https://tailwindui.com',
    ]
  }
}

module.exports = nextConfig
