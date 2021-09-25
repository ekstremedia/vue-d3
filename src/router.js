import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '/src/components/HelloWorld.vue'
import Pie from '/src/components/Pie.vue'
import ShowPie from '/src/components/ShowPie.vue'
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
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router