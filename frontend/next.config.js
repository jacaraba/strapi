/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost","node170096-strapi.sh1.hidora.net"],
  },
}

module.exports = nextConfig