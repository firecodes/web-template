import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import commonRoter from '@/router/common/index' // 所有界面公共路由
import layoutUIX1 from '@/components/layout/ui-x1/layout'

const layoutX1 = [{
  name: '',
  path: '/',
  component: layoutUIX1,
  redirect: 'home',
  children: [{
    name: 'home',
    path: '/home',
    component: () => import('@/page/index/home/index.vue')
  }]
}]

// 路由集合
const routes = [...layoutX1, ...commonRoter]

const router = new Router({
  mode: 'hash',
  routes
})
export default router
