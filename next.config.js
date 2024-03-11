const withImages = require('next-images');
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: {
    experimental: {
      fontLoaders: [
        {
          loader: 'next/font/google',
          options: { subsets: ['Noto Sans Devanagari'] }
        }
      ]
    }
  },
  images: {
    unoptimized: true
  },
  webpack: (config, { isServer }) => {
    // Add file-loader to handle font files
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '/_next/static/fonts/',
          outputPath: `${isServer ? '../' : ''}/fonts/`
        }
      }
    });

    return config;
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
