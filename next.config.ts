
import type { NextConfig } from 'next';

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
  serverExternalPackages: ['@genkit-ai/googleai', 'genkit', 'handlebars', 'dotprompt'],
  experimental: {
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['handlebars'] = false;
      config.resolve.alias['dotprompt'] = false;
      config.resolve.alias['@opentelemetry/api'] = false;
    }
    return config;
  },
};

export default nextConfig;
