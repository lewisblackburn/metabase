import type { NextConfig } from "next";

const storageUrl = process.env.NEXT_PUBLIC_NHOST_STORAGE_URL;

const storageHostname = storageUrl
  ? new URL(storageUrl).hostname
  : "localhost";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: storageHostname,
      },
    ],
  },
};

export default nextConfig;
