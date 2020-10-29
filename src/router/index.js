import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Category from '../views/category/category.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect:'/category',
    children:[
      {
        path: 'category',
        name: 'category',
        component: Category
      },
      {
        path: 'categoryDetail/:id',
        name: 'categoryDetail',
        component: () => import('../views/category/categoryDetail.vue')
      },
      {
        path: '/questions',
        name: 'questions',
        component: () => import('../views/questions/questions.vue')
      },
      {
        path: '/questionDetail/:id',
        name: 'questionDetail',
        component: () => import('../views/questions/questionDetail.vue')
      },
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
