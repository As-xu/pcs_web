import { createRouter,createWebHashHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'center',
        component: () => import("@/pages/Center.vue"),
        alias: '/center',
        meta: {
            title: '个人中心'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("@/pages/Login.vue"),
        alias: '/login',
        meta: {
            title: '个人中心'
        }
    },
    {
        path: '/comic-book',
        name: 'comic-book',
        component: () => import("@/pages/ComicBook.vue"),
        alias: '/comic-book',
        meta: {
            title: '漫画'
        }
    },
    {
        path: '/idea',
        name: 'idea',
        component: () => import("@/pages/Idea.vue"),
        alias: '/idea',
        meta: {
            title: '想法'
        }
    },
    {
        path: '/movie',
        name: 'movie',
        component: () => import("@/pages/Movie.vue"),
        alias: '/movie',
        meta: {
            title: '电影'
        }
    },
    {
        path: '/music',
        name: 'music',
        component: () => import("@/pages/Music.vue"),
        alias: '/music',
        meta: {
            title: '音乐'
        }
    },
    {
        path: '/web-navigation',
        name: 'web-Navigation',
        component: () => import("@/pages/WebNavigation.vue"),
        alias: '/navigation',
        meta: {
            title: '网站导航'
        }
    },
    {
        path: '/setting',
        name: 'setting',
        component: () => import("@/pages/Setting.vue"),
        alias: '/setting',
        meta: {
            title: '设置'
        }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;