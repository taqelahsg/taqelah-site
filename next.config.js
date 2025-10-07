const { withContentlayer } = require('next-contentlayer')

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || ''

const nextConfig = {
  output: 'export',
  basePath: '/taqelah-site',
  assetPrefix: '/taqelah-site/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = withContentlayer(nextConfig)
