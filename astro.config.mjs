import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [  // solo la integración oficial de Astro para Tailwind
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});