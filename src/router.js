import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '/src/components/HelloWorld.vue'
import ShowPie from '/src/components/ShowPie.vue'
import ShowDonut from '/src/components/ShowDonut.vue'
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
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router