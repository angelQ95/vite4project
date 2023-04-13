import { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { RedirectRoute } from '@/router/base';
import { PageEnum } from '@/enums/pageEnum';
import { createRouterGuards } from './router-guards';
import type { IModuleType } from './types';

/**
 * 这段代码使用了 ES2020 中的动态导入语法 import.meta.glob()，它会根据指定的模式匹配符('./modules/...')，
 * 在指定目录('./modules')下查找所有的 .ts 文件，返回一个对象。
 * 对象的键是文件的路径，值是一个 Promise 对象，用于异步地加载对应的模块。
 * 此处还加了一个选项 { eager: true }，表示在导入时立即加载所有匹配的模块。
 */
const modules = import.meta.glob<IModuleType>('./modules/**/*.ts', { eager: true });

const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

function sortRoute(a, b) {
  return (a.meta?.sort || 0) - (b.meta?.sort || 0);
}

routeModuleList.sort(sortRoute);

export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  // component: () => import('@/pages/Main.vue'),
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/pages/login/index.vue'),
  meta: {
    title: '登录',
  },
};

//需要验证权限
export const asyncRoutes = [...routeModuleList];

//普通路由 无需验证权限
export const constantRouter: any[] = [LoginRoute, RootRoute, RedirectRoute];

const router = createRouter({
  history: createWebHashHistory(''),
  routes: constantRouter,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App) {
  app.use(router);
  // 创建路由守卫
  createRouterGuards(router);
}

export default router;
