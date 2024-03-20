/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'yet-another-react-lightbox.com',
                port: '',
                pathname: '/images/**',
            },
        ],
    },
};

export default nextConfig;
