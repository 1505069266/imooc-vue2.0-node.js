import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', //指定路由为hash      history更加接近原生的
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/GoodsList',
      name: 'GoodsList',
      component: () => import('./views/GoodsList')
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('./views/me')
    },
    {
      path: '/cart',
      name: 'me',
      component: () => import('./views/cart')
    }
  ]
})
