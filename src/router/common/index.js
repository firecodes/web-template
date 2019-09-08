
// import page401 from '@/components/errorpage/401.vue'
// import page404 from '@/components/errorpage/404.vue'

// 所有界面  公共路由
const common = {
  getCommonRoter() {
    let router = []
    router = router.concat(this.errorRouter())
    return router
  },
  errorRouter() {
    const router = [
      { path: '/401', name: '401', component: resolve => require(['@/components/errorpage/401.vue'], resolve) },
      { path: '/404', name: '404', component: resolve => require(['@/components/errorpage/404.vue'], resolve) },
      { path: '*', redirect: '/404', hidden: true }
    ]
    return router
  }
}

export default common
