const { withContentlayer } = require('next-contentlayer')

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || ''

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: isProd ? 'export' : undefined,
  basePath: isProd ? '/taqelah-site' : '',
  assetPrefix: isProd ? '/taqelah-site/' : '',
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
