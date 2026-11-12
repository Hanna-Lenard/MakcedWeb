// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Dominio de producción. Se usa para canonical, Open Graph y sitemap.
  site: 'https://www.makced.online',
  vite: {
    plugins: [tailwindcss()]
  }
});
