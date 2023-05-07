import { createApp } from 'vue'
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/scss/bootstrap.scss'
import '@/style/theme.scss'
import App from './App.vue'
//引入路由器
import router from './router'

const app = createApp(App);
app.use(router);
app.mount('#app');