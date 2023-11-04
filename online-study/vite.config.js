import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path"


export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  bulid:{
    rollupOptions:{
      input:{
        login: resolve(__dirname,'login.html'),
        index: resolve(__dirname,'index.html'),
        home: resolve(__dirname,'home.html'),
        mine: resolve(__dirname,'mine.html')
      }
    }
  }
})
