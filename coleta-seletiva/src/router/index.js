import Vue from 'vue'
import VueRouter from 'vue-router'
import Pontos from '../views/Pontos.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/pontos',
    name: 'Pontos',
    component: Pontos
}]

const router = new VueRouter({
    routes
})

export default router