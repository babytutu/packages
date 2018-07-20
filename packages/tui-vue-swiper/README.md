# tui-vue-swiper[<img src="https://img.shields.io/npm/v/tui-vue-swiper.svg">](https://www.npmjs.com/package/tui-vue-swiper)

a vue swiper component dependence on [swiper@4](http://idangero.us/swiper/)

## Install

```bash
npm i tui-vue-swiper
```

## Usage

```js
import swiper from 'tui-vue-swiper'

Vue.use(swiper)

// or
import swiper from 'tui-vue-swiper'

Vue.component('swiper', swiper.swiper)
Vue.component('swiper-slide', swiper.swiperSlide)

// or load js with script
Vue.use(tuiVueSwiper)
```

```css
@import 'https://unpkg.com/swiper@4.3.3/dist/css/swiper.min.css'
```

```html
<template>
  <swiper :height="height" :options="options">
    <swiper-slide>1</swiper-slide>
    <swiper-slide>2</swiper-slide>
    <swiper-slide>3</swiper-slide>
    <swiper-slide>4</swiper-slide>
    <swiper-slide>5</swiper-slide>
    <div slot="pagination" class="swiper-pagination"></div>
    <div slot="next" class="swiper-button-next"></div>
    <div slot="prev" class="swiper-button-prev"></div>
  </swiper>
</template>
<script>
export default {
  data() {
    return {
      height: 300
    }
  },
  computed: {
    options() {
      return {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
      }
    }
  },
}
</script>
```

## Props

|Name|Desc|Type|Default|
|---|---|---|---|
|height|swiper height|string/number|-|
|options|swiper options|object|-|

## Slots

|Name|Desc|
|---|---|
|-|swiper-slide|
|pagination|swiper pagination|
|next|swiper next|
|prev|swiper prev|


### Options

> dependence swiper@4

[options](http://idangero.us/swiper/api/)