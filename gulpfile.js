const rollup = require('rollup')
const eslint = require('@rollup/plugin-eslint')
const babel = require('@rollup/plugin-babel').babel
// 将 CommonJS 转换成 ES2015 模块
const commonjs = require('@rollup/plugin-commonjs')
// 告诉 Rollup 如何查找外部模块。 安装它
const nodeResolve = require('@rollup/plugin-node-resolve').nodeResolve
// 压缩代码
const terser = require('rollup-plugin-terser').terser
const VuePlugin = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')
/**
 * rollup配置参数
 * @param {String} input 代码入口路径
 * @returns 配置
 */
const rollupOption = (input) => ({
  input,
  plugins: [
    postcss({
      extensions: ['.stylus']
    }),
    nodeResolve(),
    commonjs(),
    VuePlugin({
      css: true,
      compileTemplate: true
    }),
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
    terser(),
  ]
})

/**
 * rollup with dir
 * @param {String} dir 代码目录名称
 */
async function buildJS (dir) {
  const name = dir.replace(/-(\w)/g, (args) => args[1].toUpperCase())
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
async function buildDemoJS (dir) {
  const name = dir.replace(/-(\w)/g, (args) => args[1].toUpperCase())
  console.log('buildDemoJS', dir, name)
  const bundle = await rollup.rollup(rollupOption(`./packages/${dir}/src/index.js`))

  await bundle.write({
    file: `demo/dist/${dir}.min.js`,
    format: 'umd',
    name,
  })

  console.log('done', dir)
}

// 默认gulp任务
async function defaultTask (cb) {
  // place code for your default task here
  await buildJS('tui-vue-player')
  cb()
}

// 本地测试gulp任务
async function testTask (cb) {
  await buildDemoJS('tui-vue-player')
  cb()
}

exports.default = defaultTask

exports.test = testTask
