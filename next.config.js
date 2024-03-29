/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["download.logo.wine", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
