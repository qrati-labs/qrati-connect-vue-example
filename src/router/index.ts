import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import ConnectPage from '../pages/ConnectPage.vue'
import { useAuth } from '../composables/useAuth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', 
      component: ConnectPage, meta: { requiresAuth: true } },
    { path: '/login', component: LoginPage }
  ],
})

router.beforeEach((to) => {
  const { user } = useAuth()
  if (to.meta.requiresAuth && !user.user) {
    return '/login'
  }
})

export default router
