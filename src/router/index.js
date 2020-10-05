import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },

    {
        path: '/tablausuario',
        name: 'tablausuario',
        component: () =>
            import ( /* webpackChunkName: "tablausuario" */ '../views/Tablausuario.vue')
    },
    {
        path: '/json',
        name: 'json',
        component: () =>
            import ( /* webpackChunkName: "json" */ '../views/Json.vue')
    },
    {
        path: '/vistavuetify',
        name: 'vistavuetify',
        component: () =>
            import ( /* webpackChunkName: "Vistavuetify" */ '../views/Vistavuetify.vue')
    },
    {
        path: '/crudjs',
        name: 'crudjs',
        component: () =>
            import ( /* webpackChunkName: "Vistavuetify" */ '../views/Crudjs.vue')
    },

    {
        path: '/crudjson',
        name: 'crudjson',
        component: () =>
            import ( /* webpackChunkName: "Vistavuetify" */ '../views/Crudjson.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router