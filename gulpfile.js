const rollup = require('rollup')
const eslint = require('@rollup/plugin-eslint')
const babel = require('@rollup/plugin-babel').babel
const commonjs = require('@rollup/plugin-commonjs')
const nodeResolve = require('@rollup/plugin-node-resolve').nodeResolve
const terser = require('rollup-plugin-terser').terser

/**
 * rollup配置参数
 * @param {String} input 代码入口路径
 * @returns 配置
 */
const rollupOption = (input) => ({
  input,
  plugins: [
    terser(),
    nodeResolve(),
    commonjs(),
    eslint({
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      parser: "@babel/eslint-parser",
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 6,
        allowImportExportEverywhere: false,
        ecmaFeatures: {
          globalReturn: false,
        },
        requireConfigFile: false
      },
      extends: [
        'plugin:vue/essential',
        'eslint:recommended',
      ],
      plugins: [
        'vue',
      ],
      // add your custom rules here
      rules: {
        'no-unused-vars': [0],
      },
    }),
    babel({
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false
          }
        ]
      ],
      exclude: ['node_modules/**'],
      babelHelpers: 'bundled',
    }),
  ]
})

/**
 * rollup with dir
 * @param {String} dir 代码目录名称
 */
async function buildJS(dir) {
  const name = dir.replace(/-(\w)/g, ($0, $1) => $1.toUpperCase())
  console.log('buildJS', dir, name)
  const bundle = await rollup.rollup(rollupOption(`./packages/${dir}/src/index.js`))

  await bundle.write({
    file: `./packages/${dir}/dist/${dir}.min.js`,
    format: 'umd',
    name,
    sourcemap: false
  })

  await bundle.write({
    file: `./packages/${dir}/dist/${dir}.esm.js`,
    format: 'es',
    sourcemap: false
  })
  console.log('done', dir)
}

/**
 * rollup with dir
 * @param {String} dir 代码目录名称
 */
 async function buildDemoJS(dir) {
  const name = dir.replace(/-(\w)/g, ($0, $1) => $1.toUpperCase())
  console.log('buildDemoJS', dir, name)
  const bundle = await rollup.rollup(rollupOption(`./packages/${dir}/src/index.js`))

  await bundle.write({
    file: `demo/dist/${dir}.min.js`,
    format: 'umd',
    name,
    sourcemap: false
  })

  console.log('done', dir)
}

async function defaultTask(cb) {
  // place code for your default task here
  await buildJS('tui-vue-qrcode')
  await buildJS('tui-vue-barcode')
  await buildJS('tui-vue-logger')
  await buildJS('tui-vue-highcharts')
  await buildJS('tui-vue-swiper')
  await buildJS('tui-vue-turnplate')
  cb()
}

async function testTask (cb) {
  await buildDemoJS('tui-vue-logger')
  await buildDemoJS('tui-vue-qrcode')
  await buildDemoJS('tui-vue-barcode')
  await buildDemoJS('tui-vue-highcharts')
  await buildDemoJS('tui-vue-swiper')
  await buildDemoJS('tui-vue-turnplate')
  cb()
}

exports.default = defaultTask

exports.test = testTask
