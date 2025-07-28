import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind(),  // usa la integración sin opciones a menos que tengas una razón específica
    react(),
  ],
  // No agregues el plugin tailwindcss manualmente en vite.plugins
});
