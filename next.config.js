/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'https://images.unsplash.com',
      'images.unsplash.com',
      'https://tailwindui.com',
      'localhost:3000',
      'https://sparkdigital.vercel.app',
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/src/pages/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
