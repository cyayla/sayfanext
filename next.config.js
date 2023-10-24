const { withContentlayer } = require("next-contentlayer");

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  output: "export",
  distDir: "dist",
};

module.exports = withContentlayer(nextConfig);

