import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dynamicImport from "vite-plugin-dynamic-import"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dynamicImport(),
  ],
  resolve: {
    alias: {
      '~bootstrap': 'bootstrap',
    }
  },
  build: {
    sourcemap: true, // Enable source maps in production build
  },
  css: {
    devSourcemap: true, // Enable CSS source maps in development
  }
})
