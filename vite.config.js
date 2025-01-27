import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 10000, // Use the port from the environment variable or default to 3000
    host: '0.0.0.0', 
    allowedHosts: ['sport1-16455.onrender.com'], 
},
});
