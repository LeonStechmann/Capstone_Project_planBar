/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    dirs: ["pages", "components", "styles"],
  },
  images: {
    domains: ["maps.googleapis.com"],
  },
};

module.exports = nextConfig;
