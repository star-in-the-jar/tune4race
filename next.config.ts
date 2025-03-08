import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/tune4race" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/tune4race/" : "",
};

export default nextConfig;
