import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path: '/admin/login',
        component: () => import('../components/Admin/DangNhap/index.vue')
    },
    {
        path: '/teamSOS/login',
        component: () => import('../components/TeamSOS/DangNhap/index.vue')
    },
    {
        path: '/user/login',
        component: () => import('../components/User/DangNhap/index.vue')
    },
    {
        path: '/user/signup',
        component: () => import('../components/User/DangKy/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router