import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/sobre',
    name: 'SobreView',
    component: () => import( '../views/SobreView.vue')
  },
  {
    path: '/reservas',
    name: 'ReservasView',
    component: () => import( '../views/ReservasView.vue')
  },
  {
    path: '/acomodacoes',
    name: 'QuartosView',
    component: () => import( '../views/QuartosView.vue')
  },
  {
    path: '/contato',
    name: 'ContatoView',
    component: () => import( '../views/ContatoView.vue')
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import( '../views/LoginView.vue')
  },
  {
    path: '/cadastro',
    name: 'CadastroView',
    component: () => import( '../views/CadastroView.vue')
  }

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
