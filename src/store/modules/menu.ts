import { defineStore } from 'pinia';
import { UserMenu } from '../types';
/**
 * 登录页面跳转后，导航页菜单数据
*/
interface Menu {
  menu: UserMenu[];
}
export const useUserMenuStore = defineStore('menu', {
  state: (): Menu => ({ menu: [] }),
  getters: {
    getMenu(): UserMenu[] {
      return this.menu;
    },
  },
  actions: {
    setMenu(value: UserMenu[]): void {
      this.menu = value;
    },
  },
});
