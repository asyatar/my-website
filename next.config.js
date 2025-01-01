// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my-website',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;