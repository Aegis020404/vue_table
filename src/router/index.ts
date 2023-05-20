import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddStaffView from '../views/AddStaffView.vue'
import EditStaff from '../views/EditStaff.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/add_staff',
    component: AddStaffView
  },
  {
    path: '/edit_staff/:id',
    component: EditStaff
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
