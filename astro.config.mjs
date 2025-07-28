import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind(),  // solo la integración oficial de Astro para Tailwind
    react(),
  ],
});
