import { createRouter,createWebHashHistory } from 'vue-router'


const routes = [
    {
        path: '/center',
        name: 'center',
        component: () => import("@/pages/Center.vue"),
        alias: '/center',
        meta: {
            title: '个人中心'
        }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;