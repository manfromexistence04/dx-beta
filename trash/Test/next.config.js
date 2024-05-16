const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  sw: 'service-worker.js',
  disable: process.env.NODE_ENV === 'development',
  // scope: '/srr/app',
  //...
})

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  // Add your Next.js configuration options here (optional)
};

module.exports = withPWA({
  ...nextConfig,
})