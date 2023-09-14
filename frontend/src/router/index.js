import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/Home.vue'

const routes = [
    {
        path: '/', component: Home
    },
    {
        path: '/home', component: Home
    },
    {
        path: '/login', component: () => import("../components/Login.vue")
    },
    {
        path: '/register', component: () => import("../components/Register.vue")
    },
    {
        path: '/date-booking', component: () => import("../components/DateBooking.vue")
    },
    {
        path: '/news', component: () => import("../components/News.vue")
    },
    {
        path: '/services', component: () => import("../components/Services.vue")
    },
    {
        path: '/team', component: () => import("../components/Team.vue")
    },
    {
        path: '/dashboard', component: () => import("../components/Dashboard.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
