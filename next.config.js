/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash:true,
  assetPrefix: '/bakoh'
};

module.exports = nextConfig;
