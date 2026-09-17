/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // O Prisma Client é resolvido em runtime no servidor; evita bundling agressivo.
  serverExternalPackages: ['@prisma/client', '.prisma/client'],
};

export default nextConfig;
