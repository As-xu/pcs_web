import { createApp } from 'vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/scss/bootstrap.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/style/theme.scss'
import App from './App.vue'
//引入路由器
import router from './router'

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app');