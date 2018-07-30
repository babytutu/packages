module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module',
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
}