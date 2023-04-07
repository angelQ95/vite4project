/**
 * 全局设置文件
 */

import { Ref, UnwrapRef } from 'vue'
import { RouteMeta, RouteRecordNormalized, RouteRecordRaw } from 'vue-router'

export enum LayoutMode {
  LTR = 'ltr',
  LCR = 'lcr',
  TTB = 'ttb',
}

export enum DeviceType {
  PC = 'pc',
  PAD = 'pad',
  MOBILE = 'mobile',
}

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum SideTheme {
  DARK = 'dark',
  WHITE = 'white',
  BLUE = 'blue',
  IMAGE = 'image',
}

//页面切换动画
export enum PageAnim {
  FADE = 'fade', //渐隐渐现
  OPACITY = 'opacity',//左右滑动
  DOWN = 'down',//上下滑动
  SCALE = 'scale',//缩放效果
}

export interface UserState {
  userId: number
  token: string
  roleId: number
  roles: string[] | null
  userName: string
  nickName: string
  avatar: string
}

export interface AppConfigState {
  projectName: string
  theme: ThemeMode
  sideTheme: SideTheme
  themeColor: string
  layoutMode: LayoutMode
  deviceType: DeviceType
  sideWidth: number //侧边栏宽度
  pageAnim: PageAnim
  isFixedNavBar: boolean
  isCollapse: boolean
  actionBar: {
    isShowSearch: boolean
    isShowMessage: boolean
    isShowRefresh: boolean
    isShowFullScreen: boolean
  }
}


//RouteRecordNormalized:Normalized version of a route record.路由记录的规范化版本
export interface VisitedRouteState {
  visitedRoutes: RouteRecordNormalized[]
  affixRoutes: RouteRecordNormalized[]
}

export interface CachedRouteState {
  cachedRoutes: string[]
}

export interface OriginRoute {
  parentPath?: string
  menuUrl: string
  menuName?: string
  routeName?: string
  hidden?: boolean
  outLink?: string
  affix?: boolean
  cacheable?: boolean
  isRootPath?: boolean
  iconPrefix?: string
  icon?: string
  badge?: string | number
  isSingle?: boolean
  localFilePath?: string
  children?: Array<OriginRoute>
}


//RouteMeta:Interface to type meta fields in route records. 接口，用于在路由记录中键入元字段。
export interface RouteMetaType extends RouteMeta {
  icon?: string
  title?: string
  cacheable?: boolean
  affix?: boolean
}

export interface SplitTab {
  label: string
  iconPrefix?: string | unknown
  icon: string
  fullPath: string
  children?: Array<RouteRecordRaw>
  checked: Ref<UnwrapRef<boolean>>
}
