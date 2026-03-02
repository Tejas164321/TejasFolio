
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  allowedDevOrigins: ['https://6000-firebase-studio-1749053760183.cluster-sumfw3zmzzhzkx4mpvz3ogth4y.cloudworkstations.dev'],
  experimental: {
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'tejasfolio.vercel.app' }],
        destination: 'https://tejasfolio.in/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
