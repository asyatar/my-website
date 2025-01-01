/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my-website', // Must match repo name exactly
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;