import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/it-service-site/',  // ← Aggiungi questa linea
  plugins: [react()],
})
