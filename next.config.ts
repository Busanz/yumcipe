import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'www.themealdb.com',
      },
    ],
  },
};

export default nextConfig;
