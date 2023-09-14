/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost","http://node170096-strapi.sh1.hidora.net:11238"],
  },
}

module.exports = nextConfig
