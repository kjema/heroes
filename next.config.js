/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/heroes",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
