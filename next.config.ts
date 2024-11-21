import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "napkinsdev.s3.us-east-1.amazonaws.com",
        pathname: "/next-s3-uploads/**",
      },
    ],
  },
};

export default nextConfig;
