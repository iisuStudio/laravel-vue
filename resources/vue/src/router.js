import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Empty from './pages/404.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./pages/Home.vue')
    },
    {
        path: '/hello',
        name: 'hello',
        component: () => import('./pages/HelloWorld.vue')
    },
    {
        path: '/table',
        name: 'table',
        component: () => import('./pages/Table.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta: { layout: 'no-sidebar' },
        component: () => import('./pages/Login.vue')
    },
    {
        path: '*',
        name: '404',
        meta: { layout: 'no-sidebar' },
        component: Empty
    }
];

export function createRouter () {
    return new VueRouter({
        base: '/app1/',
        mode: 'history',
        routes: routes
    })
}
