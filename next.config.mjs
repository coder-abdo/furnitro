/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        //plus.unsplash.com
        hostname: "plus.unsplash.com",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
};

export default nextConfig;
