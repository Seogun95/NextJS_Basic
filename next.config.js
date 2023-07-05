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
};

module.exports = nextConfig;
