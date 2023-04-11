import type { RouteRecordRaw, RouteMeta } from 'vue-router';
import { defineComponent } from 'vue';

export type Component<T extends any = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

/*
  这两种类型虽然都是用于定义Vue路由的，但它们是不同的类型。
  AppRouteRecordRaw类型是在使用Vue Router时，
  通过createRouter函数传入routes数组参数时所用的类型，
  而RouteRecordRaw类型则是Vue Router中内置的路由类型。

  Omit是TypeScript标准库中的一个类型操作工具，
  它用于从一个对象类型中排除指定的属性，然后返回一个新的对象类型，
  该对象类型包含除了指定属性之外的所有属性。
*/
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: RouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
}

export interface Meta {
  // 名称
  title: string;
  // 是否忽略权限
  ignoreAuth?: boolean;
  permissions?: string[];
  // 是否不缓存
  noKeepAlive?: boolean;
  // 是否固定在tab上
  affix?: boolean;
  // tab上的图标
  icon?: string;
  // 跳转地址
  frameSrc?: string;
  // 外链跳转地址
  externalLink?: string;
  //隐藏
  hidden?: boolean;
}

export interface Menu {
  title: string;
  label: string;
  key: string;
  meta: RouteMeta;
  name: string;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
  icon?: any;
  path: string;
  permissions?: string[];
  redirect?: string;
  sort?: number;
}

export interface IModuleType {
  default: Array<RouteRecordRaw> | RouteRecordRaw;
}
