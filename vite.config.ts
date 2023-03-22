import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/


const pathResolve = (dir: string): any => {
  return resolve(__dirname, '.', dir);
};

const alias: Record<string, string> = {
  '@': pathResolve('./src'),
};


export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias,
  },
})
