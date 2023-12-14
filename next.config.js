/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  experimental: {
    optimizePackageImports: ["chakra-ui", "framer-motion"],
  },
};

module.exports = nextConfig;
