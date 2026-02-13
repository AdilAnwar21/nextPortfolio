/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nextPortfolio',
  assetPrefix: '/nextPortfolio',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'placehold.co'],
  },
};

export default nextConfig;
