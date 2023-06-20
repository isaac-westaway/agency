/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'https://images.unsplash.com',
      'images.unsplash.com',
      'https://tailwindui.com',
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
