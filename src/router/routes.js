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
    path: '/barcode',
    component: () => import('src/view/barcode/index.vue'),
  },
  {
    path: '*',
    component: () => import('src/view/index.vue'),
  },
]

export default routes