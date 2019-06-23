
// 所有界面  公共路由
const commonRoter = [
  {
    path: '401',
    name: '401',
    component: () => import('@/components/errorpage/401.vue')
  },
  {
    path: '404',
    name: '404',
    component: () => import('@/components/errorpage/404.vue')
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default commonRoter
