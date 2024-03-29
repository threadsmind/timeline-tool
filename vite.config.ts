import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/timeline-tool/',
  resolve: {
    alias: {
      '@c': path.resolve(__dirname, './src/components'),
      '@a': path.resolve(__dirname, './src/assets'),
      '@s': path.resolve(__dirname, './src/stores'),
      '@u': path.resolve(__dirname, './src/utils'),
    },
  },
})
