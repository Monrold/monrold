import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // No agregues el plugin tailwindcss manualmente en vite.plugins
  integrations: [
    tailwind(),  // usa la integración sin opciones a menos que tengas una razón específica
    react(),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});