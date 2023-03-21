import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';
//pinia 数据持久化，将需要缓存的数据存入localStorage或sessionStorage

const store = createPinia();
store.use(createPersistedState());

export { store };

export * from './modules/notification';
export * from './modules/permission';
export * from './modules/user';
export * from './modules/setting';
export * from './modules/tabs-router';

export default store;