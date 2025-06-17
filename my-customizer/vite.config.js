import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcss from './postcss.config.js' // 👈 ajout si besoin

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss, // 👈 force Vite à appliquer postcss.config.js
  }
})
