import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  server: {
    port: 4321,
    host: true,
  },
  vite: {
    server: {
      hmr: {
        clientPort: 4321,
      },
    },
  },
});