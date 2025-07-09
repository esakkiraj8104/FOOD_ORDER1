import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/FOOD_ORDER1/",  // <-- Match your repo name exactly
  plugins: [react()],
})
