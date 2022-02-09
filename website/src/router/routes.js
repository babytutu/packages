const routes = [
  {
    path: '/',
    name: 'qrcode',
    meta: {
      codepen: 'LBYmyE'
    },
    component: () => import('@/views/qrcode/index.vue')
  },
  {
    path: '/barcode',
    name: 'barcode',
    component: () => import('@/views/barcode/index.vue'),
    meta: {
      codepen: 'EpxdLW'
    }
  },
  {
    path: '/highcharts',
    name: 'highcharts',
    component: () => import('@/views/highcharts/index.vue'),
    meta: {
      codepen: 'NBWBRx'
    }
  },
  {
    path: '/swiper',
    name: 'swiper',
    component: () => import('@/views/swiper/index.vue'),
    meta: {
      codepen: 'GBNYoX'
    }
  },
  {
    path: '/turnplate',
    name: 'turnplate',
    component: () => import('@/views/turnplate/index.vue'),
    meta: {
      codepen: 'rZaRyq'
    }
  },
  {
    path: '/player',
    name: 'player',
    component: () => import('@/views/player/index.vue'),
    meta: {
      codepen: 'VwrpQZm'
    }
  }
]

export default routes
