import type { NextConfig } from 'next';

const nextConfig:NextConfig = {

    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true, // i will change in future (adding valid types)
      },
      typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },

      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.seyonacademy.com',
            port: '',
            pathname: '/static/**',
          },
        ],
      },
};

export default nextConfig;
