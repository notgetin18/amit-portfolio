/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // swcMinify: true,
    productionBrowserSourceMaps: false, // Disabled in production
    images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "localhost", pathname: "**" },
      { protocol: "https", hostname: "cdn.sanity.io", pathname: "**" },
    ],
        // unoptimized: true,
    },
}

module.exports = nextConfig
