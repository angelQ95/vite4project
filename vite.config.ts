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
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true,
          additionalData: `@import "src/styles/var.less";`,
        },
      },
    },
    resolve: {
      // 配置路径别名
      alias,
    },
    build: {
      sourcemap: true,//Vite 在构建过程中会生成与输出的压缩代码对应的源映射文件。这样，在浏览器中调试时，可以在开发者工具中看到原始的、易于理解的代码，而不是压缩后的代码。
    }
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
