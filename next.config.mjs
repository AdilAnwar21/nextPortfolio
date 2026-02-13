/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: '/nextPortfolio', // Set this if you are deploying to a subdirectory
  // assetPrefix: '/nextPortfolio', // Set this if you are deploying to a subdirectory
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'placehold.co'],
  },
};

export default nextConfig;
