import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import add_delete from '../views/HomeView.vue'
import login from "@/views/login.vue";
import train_data from "@/views/train_data.vue";
import add_model from "@/views/add_model.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add_delete.vue',
    name: 'add_delete',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/add_delete.vue')
  },
  {
    path: '/train_data.vue',
    name: 'train_data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/train_data.vue')
  },
  {
    path: '/add_date.vue',
    name: 'add_data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/add_date.vue')
  },
  {
    path: '/register.vue',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/register.vue')
  },
  {
    path: '/add_model',
    name:'add_model',
    component: () => import(/* webpackChunkName: "about" */ '../views/add_model.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
