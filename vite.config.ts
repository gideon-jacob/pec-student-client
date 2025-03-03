import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env,
  },
  plugins: [react(), svgr()],
  server: {
    host: true,
    port: 3000,
    watch: { usePolling: true },
    allowedHosts: ['.ngrok-free.app',]
  },
})
