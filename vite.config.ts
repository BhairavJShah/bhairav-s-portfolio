import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Optimized for Vercel Deployment
export default defineConfig({
  plugins: [react()],
  base: '/', 
})
