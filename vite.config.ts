import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import commonjs from '@rollup/plugin-commonjs';
import requireTransform from 'vite-plugin-require-transform';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    commonjs({include: '/src/proto/'}),
    requireTransform({
      fileRegex: /.js$|.vue$/
    }),
  ],
  optimizeDeps: {
    include: ['example-module'], // 添加你的 CommonJS 模块名称
  },
  resolve: {
    alias: { // 重命名路径
      // 设置路径
      '~': path.resolve(__dirname, './'),
      // 设置别名
      '@': path.resolve(__dirname, './src'),
    }
  }
})
