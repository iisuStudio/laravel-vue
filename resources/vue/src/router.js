import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import HelloWorld from '@/pages/HelloWorld'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/hello', component: HelloWorld }
]

export function createRouter () {
    return new VueRouter({
        routes
    })
}
