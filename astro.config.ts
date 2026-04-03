import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import unocss from 'unocss/astro';

export default defineConfig({
  // In 2026, GitHub Pages needs this if your repo isn't 'username.github.io'
  site: 'https://astronaut.github.io',
  base: 'fear-prey-predator-gecco2026',
  integrations: [
    react(),
    unocss({
      injectReset: true, // Useful for research sites to keep styling clean
    })
  ],
});
