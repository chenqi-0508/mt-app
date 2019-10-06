import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: () => import('@/layout/default.vue'),
      redirect: 'index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('@/page/index.vue')
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: () => import('@/page/changeCity.vue')
        }, {
          path: '/goodsList',
          name: 'goodsList',
          component: () => import('@/page/goodsList.vue')
        }
      ]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: () => import('@/layout/blank.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('@/page/login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('@/page/register.vue')
        }
      ]
    }
  ]
})
