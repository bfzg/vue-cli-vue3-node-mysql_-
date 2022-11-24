import { createRouter, createWebHistory } from 'vue-router'
import home from "@/views/home";

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/school',
    name: 'school',
    component: () => import('../views/school.vue')
  },
  {
    path:'/person',
    name:'person',
    component: ()=> import('../views/person.vue')
  },
  {
    path:'/login',
    name:'login',
    component: ()=>import('../views/login')
  },
  {
    path:'/upload',
    name:'upload',
    component: ()=>import('../views/upload')
  }
  // {
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//路由守卫
// router.beforeEach((to,from,next)=>{
//
// })

export default router
