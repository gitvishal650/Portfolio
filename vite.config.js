import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // If you deploy to GitHub Pages at https://<user>.github.io/<repo>/,
  // uncomment the next line and put your repo name in it:
  // base: '/portfolio/',
})
