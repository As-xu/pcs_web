import { defineConfig, loadEnv } from 'vite'
import path from "path";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_APP_ENV } = env
  console.log(env)
  return {
  plugins: [vue()],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/style/global.scss";` // 此处全局的scss文件
      }
    }
  }
  }
})