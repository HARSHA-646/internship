import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'cdn.britannica.com',
      'upload.wikimedia.org',
      'images.unsplash.com',
      'cf.bstatic.com',               // Booking.com CDN
      'media-cdn.tripadvisor.com', 
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
