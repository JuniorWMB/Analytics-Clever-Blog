/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "adjama-bucket.s3.eu-west-2.amazonaws.com",
      "res.cloudinary.com",
      "tuk-cdn.s3.amazonaws.com",
      "media.graphassets.com",
    ],
  },
};

module.exports = nextConfig;
