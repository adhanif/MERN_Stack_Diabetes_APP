import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    watch: {
      usePolling: true,
      interval: 100,
    },
    allowedHosts: ['app', 'localhost'],
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
