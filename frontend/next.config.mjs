/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export for Netlify
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    qualities: [75, 85],
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
