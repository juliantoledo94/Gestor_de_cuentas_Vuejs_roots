import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IngresarView from '../views/IngresarView.vue'
import VerView from '../views/VerView.vue'
import AplicacionesView from '../views/AplicacionesView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ingresar',
    name: 'ingresar',
    component: IngresarView
  },
  {
    path: '/ver',
    name: 'ver',
    component: VerView
  },
  {
    path: '/aplicaciones/:id',
    name: 'aplicaciones',
    component: AplicacionesView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
