/** @type {import('next').NextConfig} */
const path = require("path");
const withPWA = require("next-pwa");

const nextConfig = withPWA({
    reactStrictMode: true,
    pwa: {
        dest: "public",
        register: true
    },
    output: "standalone",
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,

            use: ["@svgr/webpack"],
        });

        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        };

        return config;
    }
});

module.exports = nextConfig;
