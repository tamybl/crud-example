import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Main',
        component: () =>
            import ( /* webpackChunkName: "home" */ '../components/Main.vue')
    },
    {
        path: '/list',
        name: 'list',
        component: () =>
            import ( /* webpackChunkName: "List" */ '../views/List.vue')
    },    
    {
        path: '/vistavuetify',
        name: 'vistavuetify',
        component: () =>
            import ( /* webpackChunkName: "Vistavuetify" */ '../views/Vistavuetify.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router