import Vue from 'vue'
import VueRouter from 'vue-router'
import Pontos from '../views/Pontos.vue'
import Contato from '../views/Contato.vue'

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
    }
]

const router = new VueRouter({
    routes
})

export default router