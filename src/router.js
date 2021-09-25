import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '/src/components/HelloWorld.vue'
import Pie from '/src/components/Pie.vue'
import ShowPie from '/src/components/ShowPie.vue'
import Donut from '/src/components/Donut.vue'
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
        path: '/donut',
        name: 'Donut',
        component: Donut,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router