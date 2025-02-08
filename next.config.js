/** @type {import('next').NextConfig} */
const path = require("path"); // Ensure 'path' module is imported

const nextConfig = {
  eslint: {
    // Ignore all ESLint errors during the build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore TypeScript errors during the build
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    // Add alias configuration
    config.resolve.alias["@"] = path.resolve(__dirname, "src");

    // Suppress all Webpack warnings and errors
    config.ignoreWarnings = [/./]; // Match all warnings
    config.stats = "none"; // Suppress Webpack logs

    return config;
  },
};

module.exports = nextConfig;
