import router from '@/router';
import { createDiscreteApi } from 'naive-ui';

/**
 * 挂载 Naive-ui 脱离上下文的 API
 * 如果你想在 setup 外使用 useDialog、useMessage、useNotification、useLoadingBar，可以通过 createDiscreteApi 来构建对应的 API。
 * https://www.naiveui.com/zh-CN/dark/components/discrete
 */

const {loadingBar} = createDiscreteApi(['loadingBar']);

router.beforeEach(async (to, from, next) => {
  loadingBar?.start()
  next();
  // const permissionStore = getPermissionStore();
  // const { whiteListRouters } = permissionStore;

  // const userStore = getUserStore();
  // const { token } = userStore;

  // if (token) {
    /** 
  if (true) {
    if (to.path === '/login') {
      next();
      return;
    }

    const { asyncRoutes } = permissionStore;

    if (asyncRoutes && asyncRoutes.length === 0) {
      const routeList = await permissionStore.buildAsyncRoutes();
      routeList.forEach((item: RouteRecordRaw) => {
        router.addRoute(item);
      });

      if (to.name === PAGE_NOT_FOUND_ROUTE.name) {
        // 动态添加路由后，此处应当重定向到fullPath，否则会加载404页面内容
        next({ path: to.fullPath, replace: true, query: to.query });
      } else {
        const redirect = decodeURIComponent((from.query.redirect || to.path) as string);
        next(to.path === redirect ? { ...to, replace: true } : { path: redirect });
        return;
      }
    }

    try {
      await userStore.getUserInfo();

      if (router.hasRoute(to.name)) {
        next();
      } else {
        next(`/`);
      }
    } catch (error) {
      alert(error)
      next({
        path: '/login',
        query: { redirect: encodeURIComponent(to.fullPath) },
      });
      loadingBar.finish()
    }
  } else {
    /* white list router */
    /** 
    if (whiteListRouters.indexOf(to.path) !== -1) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: encodeURIComponent(to.fullPath) },
      });
    }
    
    loadingBar.finish()
  }
  */
});

router.afterEach((to) => {
  // if (to.path === '/login') {
  //   const userStore = getUserStore();
  //   const permissionStore = getPermissionStore();

  //   userStore.logout();
  //   permissionStore.restoreRoutes();
  // }
  loadingBar?.finish()
});
