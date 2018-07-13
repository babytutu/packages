const routes = [
  {
    path: '/',
    component: () => import('src/view/index.vue'),
    name: 'home'
  },
  {
    path: '/qrcode',
    name: 'qrcode',
    component: () => import('src/view/qrcode/index.vue'),
  },
  {
    path: '/barcode',
    name: 'barcode',
    component: () => import('src/view/barcode/index.vue'),
  },
  {
    path: '*',
    component: () => import('src/view/index.vue'),
  },
]

export default routes