import { createRouter, createWebHistory } from 'vue-router';
import home from '../pages/home/home.vue';
import mine from '../pages/mine/mine.vue';
import login from '../pages/login/login.vue';

const routes = [
    {
        path: '/',
        redirect: '/login' // 将根路径重定向到登录页面x
    },
    {
        name: 'home',
        path: '/home',
        component: home
    },
    {
        name: 'mine',
        path: '/mine',
        component: mine
    },
    {
        name: 'login',
        path: '/login',
        component: login
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
