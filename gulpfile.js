const gulp = require('gulp')
const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')
const minify = require('rollup-plugin-babel-minify')
const eslint = require('rollup-plugin-eslint')

/**
 * str to camelCase
 * @param {string} str -
 * @returns {string} camelCase
 */
function camelCase(str){
  return str.replace(/-(\w)/g, ($0, $1) => $1.toUpperCase())
}

/**
 * rollup with dir
 * @param {String} dir dir
 */
function buildJS(dir) {
  const name = camelCase(dir)
  const task = dir.replace('tui-vue-', '')
  gulp.task(task, async () => {
    const bundle = await rollup.rollup({
      input: `./packages/${dir}/src/index.js`,
      plugins: [
        minify({
          sourceMap: false,
          comments: false,
        }),
        resolve(),
        commonjs(),
        eslint(),
        babel({
          // don't look for .babelrc
          babelrc: false,
          presets: [
            [
              "env", {
                modules: false
              }
            ],
            "stage-0"
          ],
          exclude: ['node_modules/**'],
          plugins: [
            'external-helpers'
          ]
        }),
      ]
    })

    await bundle.write({
      file: `./packages/${dir}/dist/${dir}.min.js`,
      format: 'umd',
      name
    })

    await bundle.write({
      file: `./packages/${dir}/dist/${dir}.esm.js`,
      format: 'esm',
    })
  })
}

buildJS('tui-vue-qrcode')

buildJS('tui-vue-barcode')

buildJS('tui-vue-logger')

buildJS('tui-vue-highcharts')

buildJS('tui-vue-swiper')