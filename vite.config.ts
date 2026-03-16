import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Corrected plugin for Vercel Deployment
export default defineConfig({
  plugins: [react()],
  base: '/', 
})
