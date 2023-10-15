import { createApp } from 'vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/scss/bootstrap.scss'
import ElementPlus from 'element-plus'
import * as ElIcons from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import '@/style/theme.scss'
import App from './App.vue'
//引入路由器
import router from './router'
//全局状态
import store from './store'

const app = createApp(App);
for (const [key, component] of Object.entries(ElIcons)) {
    app.component(key, component)
}

app.use(router);
app.use(store)
app.use(ElementPlus);
app.mount('#app');