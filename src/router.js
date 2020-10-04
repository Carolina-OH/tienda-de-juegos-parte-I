import Vue from 'vue'
import Router from 'vue-router'
const inicio =() => import('./components/Inicio.vue')
const busquedas = () => import('./views/busquedas.vue')
const ventas = () => import('./views/ventas.vue')
const total = () => import('./views/total.vue')
const NotFound = () => import('./views/NotFound.vue')

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [

        {
            path:'/inicio',
            name:'inicio',
            component:inicio,
        },
        {
            path:'/',
            redirect:'/inicio'
        },
        {
            path:'/busquedas',
            name:'busquedas',
            component:busquedas
        },    
        {
            path:'/ventas',
            name:'ventas',
            component:ventas
        },    
        {
            path:'/total',
            name:'total',
            component:total
        },
        {
            path:'/*',
            name: 'NotFound',
            component: NotFound
        }         

    ]
})