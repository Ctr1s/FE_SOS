import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [

    // client
    {
        path : '/client/register',
        component: ()=>import('../components/Client/DangKy/index.vue')
        
    },
    {
        path : '/client/login',
        component: ()=>import('../components/Client/DangNhap/index.vue')
        
    },
    {
        path : '/',
        component: ()=>import('../components/Client/TrangChu/index.vue'),
        meta: { layout: "client" },
    },
    {
        path : '/client/history',
        component: ()=>import('../components/Client/LichSuYeuCau/index.vue'),
        meta: { layout: "client" },
    },
    {
        path: "/safety",
        component: () => import("../components/Client/ThongTinAnToan/index.vue"),
        meta: { layout: "client" },
    },
    {
        path: "/contact",
        component: () => import("../components/Client/LienHe/index.vue"),
        meta: { layout: "client" },
    },

    // admin
    {
        path: "/admin/login",
        component: () => import("../components/Admin/DangNhap/index.vue"),
    },
    {
        path: "/admin",
        component: () => import("../components/Admin/DashBoard/index.vue"),
        meta: { layout: "admin" },
    },
    {
        path: "/admin/queue",
        component: () => import("../components/Admin/Queue/index.vue"),
        meta: { layout: "admin" },
    },
    {
        path: "/admin/assignments",
        component: () => import("../components/Admin/Assignments/index.vue"),
        meta: { layout: "admin" },
    },
    {
        path: "/admin/heatmap",
        component: () => import("../components/Admin/Heatmap/index.vue"),
        meta: { layout: "admin" },
    },
    {
        path: "/admin/tracking",
        component: () => import("../components/Admin/Tracking/index.vue"),
        meta: { layout: "admin" },
    },
    {
        path: "/admin/reports",
        component: () => import("../components/Admin/Reports/index.vue"),
        meta: { layout: "admin" },
    },
    {
        path: "/admin/incident-types",
        component: () => import("../components/Admin/IncidentTypes/index.vue"),
        meta: { layout: "admin" },
    },
    {
        path: "/admin/resources",
        component: () => import("../components/Admin/Resources/index.vue"),
        meta: { layout: "admin" },
    },
    {
        path: "/admin/ai-scoring",
        component: () => import("../components/Admin/AIScoring/index.vue"),
        meta: { layout: "admin" },
    },
    {
        path: "/admin/accounts",
        component: () => import("../components/Admin/Accounts/index.vue"),
        meta: { layout: "admin" },
    },

    // rescuser
    {
        path : '/rescuser/login',
        component: ()=>import('../components/Rescuer/DangNhap/index.vue')
    },
    {
        path: "/rescuer/home",
        component: () => import("../components/Rescuer/TrangChu/index.vue"),
        meta: { layout: "rescuer" },
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router