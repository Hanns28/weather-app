/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // ⬅️ Esto desactiva el fallo por errores ESLint
  },
};

module.exports = nextConfig;
