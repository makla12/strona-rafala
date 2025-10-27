import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',      // The protocol used (http or https)
        hostname: 'placehold.co', // The exact domain you need to allow
        port: '',               // Leave blank unless a specific port is required
        pathname: '/**',        // Allows any path on that domain
      },
    ],
  },
};

export default nextConfig;
