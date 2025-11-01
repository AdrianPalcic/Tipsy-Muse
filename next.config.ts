import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { webpack }) => {
    // Ignore the tipsy-db directory completely
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /tipsy-db/,
      })
    );
    
    return config;
  },
};

export default nextConfig;
