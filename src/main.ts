import { createApp } from 'vue';
import { store } from './store';
// import './style.css'
import App from './App.vue';
import { setupNaiveDiscreteApi, setupNaive, setupDirectives } from '@/plugins';
import router, { setupRouter } from './router';
import './permission';

const app = createApp(App);
app.use(store);

// 挂载路由
setupRouter(app);
// 注册全局常用的 naive-ui 组件
setupNaive(app);
// 挂载 naive-ui 脱离上下文的 Api
setupNaiveDiscreteApi();
// 注册全局自定义指令，如：v-permission权限指令
setupDirectives(app);
// 路由准备就绪后挂载 APP 实例
// https://router.vuejs.org/api/interfaces/router.html#isready
await router.isReady();

app.mount('#app');
