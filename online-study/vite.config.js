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
        index: resolve(_dirname,'index.html'),
        home: resolve(_dirname,'home.html'),
        mine: resolve(_dirname,'mine.html')
      }
    }
  }
})
