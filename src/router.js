import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/menu',
      name: 'menu',
      // 懒加载
      component: () => import('./views/Menu.vue')
    },
    {
      path: '/manage',
      name: 'manage',
      // 懒加载
      component: () => import('./views/Manage.vue')
    },
    {
      path: '/about',
      name: 'about',
      // 懒加载
      component: () => import('./views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      // 懒加载
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      // 懒加载
      component: () => import('./views/Register.vue')
    },
    {
      // 如果在访问路径时没找到，就会走这个
      path: "*",
      redirect: "/"
    }
  ]
})
