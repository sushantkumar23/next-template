/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  }
}

const { withContentlayer } = require('next-contentlayer')
module.exports = withContentlayer(nextConfig)
