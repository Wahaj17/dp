import LoginView from '../views/LoginView.vue';
import PasswordSuccess from '../views/PasswordSuccess.vue';
import { createRouter, createWebHistory } from 'vue-router'
// Remove the default import for HomeView if it exists
// import HomeView from '../views/HomeView.vue'

// 1. Import your new component
import CreatePassword from '../views/CreatePassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 2. Change the default route ('/') to use CreatePassword
    {
      path: '/',
      name: 'create-password', // Give it a name (optional but good practice)
      component: CreatePassword // Tell it which component to load
    },
    {
      path: '/password-success',
      name: 'password-success',
      component: PasswordSuccess
    },
    {
      path: '/login',
      name: 'login',
      // For now, just reuse PasswordSuccess component as a placeholder
      // Later, you'll create a real LoginView component here
      component: () => import('../views/LoginView.vue') // Assuming you'll create LoginView.vue
      // OR temporary placeholder: component: PasswordSuccess
    },
    // 3. You can keep, modify, or remove other routes like '/about'
    //    Let's remove it for now to keep things simple.
    /*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
    */
  ]
})

export default router
