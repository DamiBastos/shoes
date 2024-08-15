import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Configura Vite para escuchar en todas las interfaces de red
    port: 3000, // Puedes cambiar el puerto si es necesario
  },
})
