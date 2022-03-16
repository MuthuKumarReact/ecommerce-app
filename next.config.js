/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  target: "serverless",
  images: {
    domains: ["image.api.playstation.com"],
  },
};

module.exports = nextConfig;
