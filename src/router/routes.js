let children = []

const component = [
  {
    path: 'qrcode',
    codepen: 'LBYmyE',
  },
  {
    path: 'barcode',
    codepen: 'EpxdLW',
  },
  {
    path: 'highcharts',
    codepen: 'NBWBRx',
  },
]

component.forEach(i => {
  children.push({
    path: i.path,
    name: i.path,
    meta: {
      codepen: i.codepen
    },
    component: () => import(`src/view/${i.path}/index.vue`)
  })
})

const routes = [
  {
    path: '/',
    component: () => import('src/view/index.vue'),
    name: 'home',
    meta: {
      codepen: 'LBYmyE'
    },
    children,
  },
  {
    path: '*',
    component: () => import('src/view/index.vue'),
  },
]

export default routes