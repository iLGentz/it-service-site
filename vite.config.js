import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/nome-repo/',  // ← Aggiungi questa linea
  plugins: [react()],
})
