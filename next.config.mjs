/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "swiper/react"],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      {
      protocol: "https",
      hostname: "flagcdn.com",
    },
    ]
  }
};
export default nextConfig;
