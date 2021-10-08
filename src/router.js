import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '/src/components/HelloWorld.vue'
import ShowPie from '/src/components/ShowPie.vue'
import ShowDonut from '/src/components/ShowDonut.vue'
import ShowAnimatedDonut from "/src/components/ShowAnimatedDonut.vue";
const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
    },
    {
        path: '/showpie',
        name: 'ShowPie',
        component: ShowPie,
    },
    {
        path: '/showDonut',
        name: 'ShowDonut',
        component: ShowDonut,
    },
    {
        path: '/animDonut',
        name: 'ShowAnimatedDonut',
        component: ShowAnimatedDonut,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
window.routes = routes
export default router
