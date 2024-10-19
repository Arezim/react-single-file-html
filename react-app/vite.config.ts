import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    target: 'esnext', // Stworzenie kodu dla nowoczesnych przeglądarek
    assetsInlineLimit: 100000000, // Limit inline'owania zasobów
    cssCodeSplit: false, // Inline'owanie CSS
  }
});

