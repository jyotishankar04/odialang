import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  turbopack: {
    root: process.cwd()
  }
};

export default nextConfig;
