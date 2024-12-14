/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  distDir: "build",
  skipTrailingSlashRedirect: true,
  images: {
    loader: "custom",
    loaderFile: './imageLoader.js'
  },
  /* images: {
    domains: ["img.youtube.com"],
  }, */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
