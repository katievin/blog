import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import CodePage from '../views/CodePage.vue'
import CodeInfo from '../views/CodeInfo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/CodePage/:index?',
    name: 'CodePage',
    component: CodePage
  },
  {
    path: '/CodeInfo/:typeIndex:index',
    name: 'CodeInfo',
    component: CodeInfo
  }
]

const router = createRouter({
  history: createWebHistory('/blog/'),
  routes
})

export default router
