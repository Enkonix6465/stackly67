import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,  // 👈 this will auto open browser
    port: 5173,
    host: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split vendor libraries into separate chunks
          if (id.includes('node_modules')) {
            // React core libraries
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
            // React Router
            if (id.includes('react-router')) {
              return 'router-vendor'
            }
            // Framer Motion (animation library)
            if (id.includes('framer-motion')) {
              return 'framer-vendor'
            }
            // i18next and translation libraries
            if (id.includes('i18next') || id.includes('react-i18next')) {
              return 'i18n-vendor'
            }
            // Other vendor libraries
            return 'vendor'
          }
        }
      }
    },
    // Increase chunk size warning limit (optional, but chunks should be smaller now)
    chunkSizeWarningLimit: 1000
  }
})
