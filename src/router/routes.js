const routes = [
  {
    path: '/',
    component: () => import('src/view/index.vue'),
  },
  {
    path: '/qrcode',
    component: () => import('src/view/qrcode/index.vue'),
  },
  {
    path: '*',
    component: () => import('src/view/index.vue'),
  },
]

export default routes