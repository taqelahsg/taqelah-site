const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
  output: 'export',          // required for static export
  images: { unoptimized: true }, // GH Pages is static; disable Image Optimization
  // basePath: '',          // keep empty since you're on a custom domain root
  trailingSlash: true,      // optional; helps when serving pure static hosting
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = withContentlayer(nextConfig)
