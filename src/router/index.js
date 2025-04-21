// import DashboardView from '../views/DashboardView.vue';
import OutsourceScreenView from '../views/OutsourceScreenView.vue';
// import LoginView from '../views/LoginView.vue';
import PasswordSuccess from '../views/PasswordSuccess.vue';
import { createRouter, createWebHistory } from 'vue-router'
// Remove the default import for HomeView if it exists
// import HomeView from '../views/HomeView.vue'

import CreatePassword from '../views/CreatePassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'create-password',
      component: CreatePassword
    },
    {
      path: '/password-success',
      name: 'password-success',
      component: PasswordSuccess
    },
    {
      path: '/login',
      name: 'login',

      component: () => import('../views/LoginView.vue')

    },
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   component: DashboardView
    // },
    {
      path: '/outsource',
      name: 'outsource-screen',
      component: OutsourceScreenView
    }
  ]
})

export default router
