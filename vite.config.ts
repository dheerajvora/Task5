import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Import tailwindcss plugin
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()], // Add tailwindcss plugin
})