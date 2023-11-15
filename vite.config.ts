import { defineConfig, loadEnv } from 'vite'
import path from "path";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_TARGET } = env
  console.log(env)
  return {
  plugins: [vue()],
  server: {
    port: 8080,
    open: false, //项目启东时是否打开页面
    proxy: {
      "/api": {
        target: 'http://127.0.0.1:5000', // 从环境变量中获取
        changeOrigin: true /* 允许跨域 */,
        rewrite: (path) => {
          console.log(path)
          console.log(path.replace(/^\/api/, ""))
          return path.replace(/^\/api/, "")
        },
      },
    },

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