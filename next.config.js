/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'mblogthumb-phinf.pstatic.net',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/settings/deleted_page',
        destination: '/settings',
        permanent: true,
      },
      {
        source: '/settings/block_page',
        destination: '/settings',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/seogun',
        destination: '/test/about/seogun',
      },
      {
        source: '/item/:slug',
        destination: '/settings/:slug',
      },
    ];
  },
};

module.exports = nextConfig;
