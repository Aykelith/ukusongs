/** @type {import('next').NextConfig} */
const path = require("path");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = withPWA({
    reactStrictMode: true,
    future: {
        webpack5: true,
    },
    pwa: {
        dest: "public",
        runtimeCaching,
    },
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
