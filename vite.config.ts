import { defineConfig } from 'vite'
import react from '@vitejs/react-vite'

// Optimized for Vercel Deployment
export default defineConfig({
  plugins: [react()],
  base: '/', 
})
