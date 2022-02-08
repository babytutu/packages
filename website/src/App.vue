<template>
  <div class="container">
    <nav class="navbar">
      <!-- Navbar content -->
      <ul class="nav nav-pills">
        <li class="nav-item"
            v-for="i in menu"
            :key="i.name">
          <router-link :to="{
          path: i.path
        }"
                      class="nav-link"
                      :class="{'active': i.name === $route.name}">{{i.name}}</router-link>
        </li>
      </ul>
    </nav>
    <div class="card-body">
      <router-view></router-view>
    </div>
    <div class="card-body">
      <iframe height='400'
              scrolling='no'
              :src="link"
              frameborder='no'
              allowtransparency='true'
              allowfullscreen='true'
              style='width: 100%;'>
      </iframe>
    </div>
  </div>
</template>
<script>
import routes from '@/router/routes.js'

export default {
  data () {
    return {
      menu: routes,
      link: ''
    }
  },
  created () {
    this.link = `https://codepen.io/babytutu/embed/${this.$route.meta.codepen || 'LBYmyE'}/?height=300&&default-tab=html%2Cresult&theme-id=light`
  },
  watch: {
    $route (val) {
      this.link = ''
      if (val.meta.codepen) {
        setTimeout(() => {
          this.link = `https://codepen.io/babytutu/embed/${val.meta.codepen || 'LBYmyE'}/?height=300&?default-tab=html%2Cresult&theme-id=light`
        }, 2000)
      }
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
