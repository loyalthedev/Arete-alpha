/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  experimental: {
    appDir: true,
  },
	devIndicators: {
    buildActivity: true,
  },
}

module.exports = nextConfig
