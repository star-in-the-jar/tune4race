import type { NextConfig } from "next";
console.log("process.env.NEXT_PUBLIC_GH_PAGES", process.env.NEXT_PUBLIC_GH_PAGES);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_GH_PAGES === "yes" ? "/tune4race" : "",
  assetPrefix: process.env.NEXT_PUBLIC_GH_PAGES === "yes" ? "/tune4race/" : "",
};

export default nextConfig;
