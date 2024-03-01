import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false,
      }
    },
  },
  resolve: {
    alias: [
      { find: '~', replacement: fileURLToPath(new URL('../', import.meta.url)) },
      { find: '@api-package', replacement: fileURLToPath(new URL('../api-package', import.meta.url)) },
    ],
  }
})
