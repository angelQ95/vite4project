import { createApp } from 'vue'
import { store } from './store';
import './style.css'
import App from './App.vue'
import router from './router';
// // 通用字体5
// import 'vfonts/Lato.css'
// // 等宽字体
// import 'vfonts/FiraCode.css'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
