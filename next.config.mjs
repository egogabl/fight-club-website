/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Для Vercel можно убрать trailingSlash, но оставляем для совместимости
  trailingSlash: true,
  // Оптимизации производительности
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Оптимизация компиляции
  swcMinify: true,
}

export default nextConfig
