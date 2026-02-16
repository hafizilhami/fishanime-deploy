/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net"
      }
    ]
  },
  reactCompiler: true,
};

export default nextConfig;
