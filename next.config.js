/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'res.cloudinary.com', "http2.mlstatic.com"],
    },
}

module.exports = nextConfig
