/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'assets.stickpng.com',
      'mir-s3-cdn-cf.behance.net',
      'media.wired.com',
      'news.airbnb.com',
      'links.papareact.com',
    ],
  },
};

module.exports = nextConfig;
