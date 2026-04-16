// /** @type {import('next').NextConfig} */
// const nextConfig = {
//      images: {
//     domains: ['ik.imagekit.io'], 
//     unoptimized: false,
//   },
//   reactStrictMode: true,

// };

// export default nextConfig;




/**** @type {import('next').NextConfig} ****/
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
