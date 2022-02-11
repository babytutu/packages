<template>
  <div class="audio-player-container" @mousedown="onDragBegin" :style="mini ? floatStyleObj : ''">
    <player ref="player" :rates="rates" :miniable="miniable" :list="list" @change="changeStatus" @close="close"></player>
  </div>
</template>
<script>
import player from './player.vue'

/**
 * 音频播放器
 * @module vue-player
 */
export default {
  name: 'vue-player',
  components: {
    player,
  },
  /**
   * @name Props
   * @prop {Array} list 音频文件数组
   * @prop {Boolean} [miniable = false] 是否可最小化，默认否
   */
  props: {
    /**
     * 音频文件数组
     */
    list: {
      type: Array,
    },
    /**
     * 是否可最小化，默认否
     */
    miniable: {
      type: Boolean,
      default: false,
    }
  },
  data () {
    return {
      rates: [1, 1.5, 2], // 倍速选项
      mini: false, // 最下化
      // 拖拽效果临时参数
      dragStartX: 0,
      dragStartY: 0,
      floatOriginX: 0,
      floatOriginY: 0,
      floatOffsetLeft: 0,
      floatOffsetTop: 0,
      clientWidth: 0,
      clientHeight: 0,
    }
  },
  computed: {
    /**
     * 拖拽时样式
     */
    floatStyleObj () {
      return {
        transform: `translate(${this.floatOffsetLeft}px, ${this.floatOffsetTop}px)`,
        cursor: 'move'
      }
    },
  },
  methods: {
    /**
     * 回到常规模式
     * @param {boolean} val 是否迷你模式
     */
    changeStatus (val) {
      /**
       * 切换模式
       * @event change
       * @param {boolean} val 是否迷你模式
       */
      this.$emit('change', val)
      this.mini = val
    },
    /**
     * 关闭音频播放器，供外部调用触发
     */
    closePlayer () {
      this.$refs.player.closePlayer()
    },
    /**
     * 最小化后的内部关闭按钮触发
     */
    close () {
      /**
       * 关闭迷你模式
       * @event close
       */
      this.$emit('close')
    },
    /**
     * mini模式下，数据拖拽开始
     */
    onDragBegin (e) {
      if (this.mini) {
        this.clientWidth = document.body.clientWidth
        this.clientHeight = document.body.clientHeight
        this.floatOriginX = this.floatOffsetLeft
        this.floatOriginY = this.floatOffsetTop
        this.dragStartX = e.clientX
        this.dragStartY = e.clientY
        document.addEventListener('mousemove', this.onDocumentMouseMove)
        document.addEventListener('mouseup', this.onDocumentMouseUp)
      }
    },
    /**
     * 鼠标按下且拖拽时，实时更新播放器位置，限制在一定范围内
     */
    onDocumentMouseMove (e) {
      const left = this.floatOriginX + e.clientX - this.dragStartX
      const top = this.floatOriginY + e.clientY - this.dragStartY
      if (left > 0) {
        this.floatOffsetLeft = 0
      } else if (left < -this.clientWidth + 84) {
        this.floatOffsetLeft = -this.clientWidth + 84
      } else {
        this.floatOffsetLeft = left
      }
      if (top > this.clientHeight - 120) {
        this.floatOffsetTop = this.clientHeight - 120
      } else if (top < -60) {
        this.floatOffsetTop = -60
      } else {
        this.floatOffsetTop = top
      }
    },
    /**
     * 鼠标移开，取消监听
     */
    onDocumentMouseUp () {
      document.removeEventListener('mouseup', this.onDocumentMouseUp)
      document.removeEventListener('mousemove', this.onDocumentMouseMove)
    },
  }
}
</script>
