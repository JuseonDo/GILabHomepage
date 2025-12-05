// client/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@shared': path.resolve(import.meta.dirname, 'src', 'shared'),
      '@assets': path.resolve(import.meta.dirname, 'src', 'assets'),
    },
  },
  // GitHub Pages base URL - 레포지토리 이름이 루트가 아닌 경우 수정
  // 예: base: '/GILab_Home_Page/'
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  }
})
