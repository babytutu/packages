<template>
  <div class="container card-body">
    <div class="card">
      <div class="card-header">
        <!-- Navbar content -->
        <ul class="nav nav-tabs card-header-tabs">
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
      </div>
      <div class="card-body">
        <router-view></router-view>
      </div>
      <div class="card-footer text-end" v-if="$route.meta.codepen">
        <a class="btn btn-primary" :href="`https://codepen.io/babytutu/embed/${$route.meta.codepen}`" target="_blank">在codepen中体验</a>
      </div>
    </div>
  </div>
</template>
<script>
import routes from '@/router/routes.js'

export default {
  data () {
    return {
      menu: routes,
    }
  },
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
