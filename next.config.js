/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    productionBrowserSourceMaps: false, // Disabled in production
    images: {
        formats: ["image/avif", "image/webp"],
        dangerouslyAllowSVG: true,
        remotePatterns: [
            { protocol: "https", hostname: "cdn.sanity.io", pathname: "**" },
            { protocol: "https", hostname: "**.sanity.io", pathname: "**" },
        ],
    },
    async redirects() {
        return [
            {
                source: '/blog',
                destination: '/blogs',
                permanent: true,
            },
            {
                source: '/blog/:slug',
                destination: '/blogs/:slug',
                permanent: true,
            },
        ]
    },
    serverExternalPackages: ['isomorphic-dompurify'],
}

export default nextConfig
