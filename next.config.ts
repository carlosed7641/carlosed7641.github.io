import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // Permite abrir el dev server desde el celular en la red local
  // (p. ej. http://192.168.1.22:3000). Sin esto Next bloquea los JS de
  // desarrollo, React no hidrata y los <Reveal> se quedan invisibles.
  allowedDevOrigins: ["192.168.1.*"],
  experimental: {
    agentUpgrade: "security",
  },
  turbopack: {
    rules: {  
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
