import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import common from '@/router/common/index' // 所有界面公共路由
import layoutUIX1 from '@/components/layout/ui-x1/layout'

const layoutX1 = {
  name: '',
  path: '/',
  component: layoutUIX1,
  redirect: 'home',
  children: [{
    name: 'home',
    path: '/home',
    // component: () => import('@/page/index/home/index.vue')
    component: resolve => require(['@/page/index/home/index.vue'], resolve)
  }, {
    name: 'plug',
    path: '/plug',
    // component: () => import('@/page/index/plug/index.vue')
    component: resolve => require(['@/page/index/plug/index.vue'], resolve)
  }]
}

// 路由集合
let routes = []
routes.push(layoutX1)
routes = routes.concat(common.getCommonRoter())
const router = new Router({
  // mode: 'hash',
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes
})
export default router
