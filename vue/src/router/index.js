import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import( '../views/HomeView.vue')
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
  },
  {
    path: '/minhasreservas',
    name: 'MinhasReservasView',
    component: () => import( '../views/MinhasReservasView.vue')
  },
  {
    path: '/loginAdmin',
    name: 'LoginAdmin',
    component: () => import('../views_Admin/LoginAdminView.vue')
  },
  {
    path: '/homeAdmin',
    name: 'HomeAdmin',
    component: () => import('../views_Admin/HomeAdminView.vue'),
    meta: { hideNavigation: true, hideFooter: true}
  },
  {
    path: '/hospedesAdmin',
    name: 'HospedesAdmin',
    component: () => import('../views_Admin/HospedesAdminView.vue'),
    meta: { hideNavigation: true, hideFooter: true}
  },
  {
    path: '/reservasAdmin',
    name: 'ReservasAdmin',
    component: () => import('../views_Admin/ReservasAdminView.vue'),
    meta: { hideNavigation: true, hideFooter: true}
  },
  {
    path: '/staffAdmin',
    name: 'StaffAdmin',
    component: () => import('../views_Admin/StaffAdminView.vue'),
    meta: { hideNavigation: true, hideFooter: true}
  },
  {
    path: '/consumoAdmin',
    name: 'ConsumoAdmin',
    component: () => import('../views_Admin/ConsumoAdminView.vue'),
    meta: { hideNavigation: true, hideFooter: true}
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
