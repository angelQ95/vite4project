import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import { viteMockServe } from 'vite-plugin-mock';
import { UserConfigExport, ConfigEnv } from 'vite';
// https://vitejs.dev/config/


const pathResolve = (dir: string): any => {
  return resolve(__dirname, '.', dir);
};

const alias: Record<string, string> = {
  '@': pathResolve('./src'),
};
//设置mock服务
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: command === 'serve',
      }),
    ],
    resolve: {
      // 配置路径别名
      alias,
    },
  }
}
//基本设置
// export default defineConfig({
//   plugins: [vue(),
//     viteMockServe({
//       // default
//       mockPath: 'mock',
//       localEnabled: command === 'serve',
//     })],
//   resolve: {
//     // 配置路径别名
//     alias,
//   },
// })
