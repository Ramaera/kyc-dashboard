const withImages = require('next-images');
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    unoptimized: true
  }
};
const redirects = {
  async redirects() {
    return [
      {
        source: '/dashboards',
        destination: '/dashboard',
        permanent: true
      },
      {
        source: '/',
        destination: '/dashboard',
        permanent: true
      }
    ];
  }
};

// module.exports = [withImages(redirects),]
module.exports = nextConfig;
