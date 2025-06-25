/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    n8nUrl: process.env.N8N_URL || 'http://127.0.0.1:5678'
  }
};

module.exports = nextConfig;