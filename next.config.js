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
      'media.cntraveler.com',
      'www.guestready.com',
      'bringmethenews.com',
      'static.onecms.io',
    ],
  },
};

module.exports = nextConfig;
