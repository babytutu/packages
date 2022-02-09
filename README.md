# Packages

## tui-vue-hooks[<img src="https://img.shields.io/npm/v/tui-vue-hooks.svg">](https://www.npmjs.com/package/tui-vue-hooks)

- [README.md](https://github.com/babytutu/packages/tree/master/packages/tui-vue-hooks)

## tui-vue-logger[<img src="https://img.shields.io/npm/v/tui-vue-logger.svg">](https://www.npmjs.com/package/tui-vue-logger)

- [README.md](https://github.com/babytutu/packages/tree/master/packages/tui-vue-logger)

## tui-vue-qrcode[<img src="https://img.shields.io/npm/v/tui-vue-qrcode.svg">](https://www.npmjs.com/package/tui-vue-qrcode)

- [README.md](https://github.com/babytutu/packages/tree/master/packages/tui-vue-qrcode)

## tui-vue-barcode[<img src="https://img.shields.io/npm/v/tui-vue-barcode.svg">](https://www.npmjs.com/package/tui-vue-barcode)

- [README.md](https://github.com/babytutu/packages/tree/master/packages/tui-vue-barcode)

## tui-vue-highcharts[<img src="https://img.shields.io/npm/v/tui-vue-highcharts.svg">](https://www.npmjs.com/package/tui-vue-highcharts)

- [README.md](https://github.com/babytutu/packages/tree/master/packages/tui-vue-highcharts)

## tui-vue-swiper[<img src="https://img.shields.io/npm/v/tui-vue-swiper.svg">](https://www.npmjs.com/package/tui-vue-swiper)

- [README.md](https://github.com/babytutu/packages/tree/master/packages/tui-vue-swiper)

## tui-vue-player[<img src="https://img.shields.io/npm/v/tui-vue-player.svg">](https://www.npmjs.com/package/tui-vue-player)

- [README.md](https://github.com/babytutu/packages/tree/master/packages/tui-vue-player)

# lerna

- A tool for managing JavaScript projects with multiple packages.

- [DOCS](https://lerna.js.org/)

## commands

```bash
// init repo with Fixed/Locked mode
lerna init

// init repo with independent mode.
lerna init -i

// installs all of packages dependencies
lerna bootstrap

// List all of the public packages in the current Lerna repo
lerna ls

// publish all packages
lerna publish
```

## lerna.json

[lerna github](https://github.com/lerna/lerna)

```json
{
  // 包路径
  "packages": [
    "packages/*"
  ],
  // 安装依赖包方式。默认`npm`，可配置为`yarn`
  "npmClient": "yarn",
  // 指定lerna版本
  "version": "independent",
  "command": {
    "publish": {
      // lerna changed命令忽略的文件改动，数组形式
      "ignoreChanges": ["package.json", "*.lock", "package-lock.json"]
    }
  }
}
```
