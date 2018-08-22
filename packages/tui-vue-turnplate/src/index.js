// 动效插件，让旋转更流畅和自然
import velocity from 'velocity-animate'

export default {
  name: 'turnplate',
  render(h) {
    return h('div', {
      class: 'turnplate',
    }, [h('canvas', {
      class: 'item',
      attrs: {
        id: 'wheelcanvas',
        width: `${this.turnplate.radius * 2}px`,
        height: `${this.turnplate.radius * 2}px`
      },
    }), h('div', {
      class: ['pointer', {'disabled': this.disabled}],
      on: {
        click: this.doRotate
      },
    }, this.$slots.default)])
  },
  props: {
    // 奖品列表
    gift: {
      type: Array,
      default: () => [],
    },
    // 大转盘奖品区块对应背景颜色，双色
    colors: {
      type: Array,
      default: () => ['#EAE4FD', '#FFFFFF'],
    },
    // 获取奖品结果的方法
    getResult: {
      type: Function,
      default: () => {},
    },
    // 宣布中奖结果
    showGift: {
      type: Function,
      default: () => {},
    },
    // 大转盘基础参数
    turnplate: {
      type: Object,
      default: () => ({
        radius: 300, // 大转盘的半径
        outsideRadius: 270, // 大转盘奖品区域半径
        textRadius: 220, // 大转盘奖品位置距离圆心的距离
        insideRadius: 0, // 大转盘内圆的半径
      }),
    },
    // 大转盘是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 大转盘是否在旋转
    rotate: {
      type: Boolean,
      default: false,
    },
    // 大转盘奖品文字配色
    fontColor: {
      type: Array,
      default: () => [
        '#EF1C85',
        '#9D5BFB',
        '#A8A8A8',
      ],
    },
  },
  mounted() {
    this.drawRouletteWheel(this.gift)
  },
  data() {
    return {
      img: [],
      // 是否可以转
      rotateable: false,
    }
  },
  watch: {
    gift: {
      /**
       * 监视奖品变化，及时渲染大转盘
       * @param {array} val 变化的奖品数据
       */
      handler(val) {
        this.drawRouletteWheel(val)
      },
      deep: true,
    },
  },
  methods: {
    /**
     * 如果没有定制的大转盘背景图，需要canvas绘制盘面
     * @param {array} val 数据
     */
    drawRouletteWheel(val) {
      if (!val.length) return
      const canvas = document.getElementById('wheelcanvas')
      if (canvas.getContext) {
        // 根据奖品个数计算圆周角度
        const arc = Math.PI / (val.length / 2)
        const ctx = canvas.getContext('2d')
        ctx.width = this.turnplate.radius * 2
        ctx.height = this.turnplate.radius * 2
        // 在给定矩形内清空一个矩形
        ctx.clearRect(0, 0, this.turnplate.radius, this.turnplate.radius)
        // strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式
        ctx.strokeStyle = '#fff'
        // font 属性设置或返回画布上文本内容的当前字体属性
        ctx.font = '24px Microsoft YaHei'
        for (let i = 0; i < val.length; i++) {
          const angle = i * arc
          // 双色大转盘
          ctx.fillStyle = this.colors[i % 2]
          ctx.beginPath()
          // arc(x,y,r,起始角,结束角,绘制方向) 方法创建弧/曲线（用于创建圆或部分圆）
          ctx.arc(this.turnplate.radius, this.turnplate.radius,
          this.turnplate.outsideRadius, angle, angle + arc, false)
          ctx.arc(this.turnplate.radius, this.turnplate.radius,
          this.turnplate.insideRadius, angle + arc, angle, true)
          ctx.stroke()
          ctx.fill()
          // 锁画布(为了保存之前的画布状态)
          ctx.save()

          // ----绘制奖品开始,如果没有奖品类型，就显示灰色字----
          ctx.fillStyle = this.fontColor[val[i].type - 1] || this.fontColor[2]
          let name = val[i].name || ''
          let text = val[i].content || ''
          // translate方法重新映射画布上的 (0,0) 位置
          ctx.translate(this.turnplate.radius +
          ((Math.cos(angle + (arc / 2)) * this.turnplate.textRadius)),
          this.turnplate.radius + (Math.sin(angle + (arc / 2)) * this.turnplate.textRadius))

          // rotate方法旋转当前的绘图
          ctx.rotate(angle + (arc / 2) + (Math.PI / 2))

          /** 下面代码根据奖品类型、奖品名称长度渲染不同效果，如字体、颜色、图片效果。(具体根据实际情况改变) **/
          const fontLen = 7
          const lineHeight = 28
          if (name.length > fontLen) { // 奖品名称长度超过一定范围
            name = `${name.substring(0, fontLen)}||${name.substring(fontLen)}`
            const texts = name.split('||')
            for (let j = 0; j < texts.length; j++) {
              ctx.fillText(texts[j], -ctx.measureText(texts[j]).width / 2, j * lineHeight)
            }
          } else {
            // 在画布上绘制填色的文本。文本的默认颜色是黑色
            // measureText()方法返回包含一个对象，该对象包含以像素计的指定字体宽度
            ctx.fillText(name, -ctx.measureText(name).width / 2, 0)
          }
          // 第二圈放置奖品名称
          ctx.fillText(text, -ctx.measureText(text).width / 2, 50)

          // 添加对应图标
          // if (val[i].type) {
          //   ctx.drawImage(this.img[val[i].type - 1], -50, 15, 100, 75)
          // }

          // 把当前画布返回（调整）到上一个save()状态之前
          ctx.restore()
          // ----绘制奖品结束----
        }
      }
    },
    /**
     * 转盘转起来
     * @param {object} id 奖品编号
     */
    rotateFn(id) {
      let angles = (id * (360 / this.gift.length)) -
        (360 / (this.gift.length * 2))
      if (angles < 270) {
        angles = 270 - angles
      } else {
        angles = (360 - angles) + 270
      }
      const el = document.getElementById('wheelcanvas')
      const rotateZ = angles + 1800
      velocity(el, {
        rotateZ: [rotateZ, 0],
      }, {
        duration: 3000,
        complete: () => {
          this.rotateable = !this.rotateable
          this.showGift()
        },
      })
    },
    /**
     * 点击抽奖
     */
    doRotate() {
      // 如果本身大转盘在转或者不允许转，不执行方法
      if (this.rotateable || this.disabled) return
      // 通过奖品id号，让转盘旋转后停在对应的盘面
      this.getResult().then(res => {
        // 一旦开始旋转，就锁定状态
        this.rotateable = !this.rotateable
        this.rotateFn(res)
      })
    },
  },
}