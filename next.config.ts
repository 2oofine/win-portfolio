import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Other config options here if you have any

  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow", // ✅ allow indexing
          },
        ],
      },
    ];
  },
};

export default nextConfig;
