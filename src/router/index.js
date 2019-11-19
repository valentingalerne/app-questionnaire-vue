import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Construction des différentes routes
const routes = [
  {
  // Route vers la page home
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  // Route vers la page questionnaire
  {
    path: '/questionnaire',
    name: 'questionnaire',
    component: () => import('../views/Questionnaire.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
