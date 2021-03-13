import Vue from 'vue'
import VueRouter from 'vue-router'
import Pontos from '../views/Pontos.vue'
import Contato from '../views/Contato.vue'
import TelaInicial from '../views/TelaInicial.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/pontos',
        name: 'Pontos',
        component: Pontos
    },
    {
        path: '/contato',
        name: 'Contato',
        component: Contato
    },
    {
        path: '/',
        name: 'TelaInicial',
        component: TelaInicial
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router