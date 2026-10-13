import { defineConfig } from 'vite';

export default defineConfig({
  base: '/maisies-farm/',
  build: { chunkSizeWarningLimit: 1200 },
});
