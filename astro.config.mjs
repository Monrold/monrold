import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [  // solo la integración oficial de Astro para Tailwind
    react(),
  ],
});
