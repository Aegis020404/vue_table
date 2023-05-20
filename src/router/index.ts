import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddStaffView from '../views/AddStaffView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add_staff',
    name: 'add_staff',
    component: AddStaffView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
