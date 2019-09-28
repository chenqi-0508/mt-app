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
      children: [{
        path: '/index',
        name: 'index',
        component: () => import('@/page/index.vue')
      }]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: () => import('@/layout/blank.vue')
    }
  ]
})
