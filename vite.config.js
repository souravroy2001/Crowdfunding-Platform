import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    // Add the dependencies that you want Vite to optimize
    include: ['@editorjs/editorjs'],
    // Or use exclude if needed to avoid optimization for certain packages
    exclude: ['some-package-to-exclude']
  },
})
