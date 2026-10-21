import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/no-onion-garlic",
        destination: "/why-no-onion-garlic",
        permanent: true,
      },
      {
        source: "/no-onion-garlic/:id",
        destination: "/why-no-onion-garlic/:id",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
