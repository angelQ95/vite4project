import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { ExclamationCircleOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';

/**
 * @param name 路由名称, 必须设置,且不能重名
 * @param meta 路由元信息（路由附带扩展信息）
 * @param redirect 重定向地址, 访问这个路由时,自定进行重定向
 * @param meta.disabled 禁用整个菜单
 * @param meta.title 菜单名称
 * @param meta.icon 菜单图标
 * @param meta.keepAlive 缓存该路由
 * @param meta.sort 排序越小越排前
 *
 * */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/psychological',
    name: 'psychological',
    redirect: '/psychological/cuedTaskSwitching',
    component: Layout,
    meta: {
      title: 'psychological',
      icon: renderIcon(ExclamationCircleOutlined),
      sort: 3,
    },
    children: [
      {
        path: 'cuedTaskSwitching',
        name: 'cuedTaskSwitching',
        meta: {
          title: 'cuedTaskSwitching',
        },
        component: () => import('@/pages/psychological/cuedTaskSwitching.vue'),
      },
      {
        path: 'psychological-404',
        name: 'psychological-404',
        meta: {
          title: '404',
        },
        component: () => import('@/pages/psychological/404.vue'),
      },
      {
        path: 'psychological-500',
        name: 'psychological-500',
        meta: {
          title: '500',
        },
        component: () => import('@/pages/psychological/500.vue'),
      },
    ],
  },
];

export default routes;
