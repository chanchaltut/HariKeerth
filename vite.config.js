import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    rollupOptions: {
      // The SSR prerender bundle keeps dependencies external, so vendor chunking only applies to the client
      output: isSsrBuild ? {} : {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['react-icons'],
          seo: ['react-helmet-async'],
        }
      }
    },
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      }
    },
    chunkSizeWarningLimit: 500,
  },
  ssr: {
    // CommonJS packages without ESM named exports — bundle them into the prerender build
    noExternal: ['react-helmet-async'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async', 'react-icons']
  }
}))
