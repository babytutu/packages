// get root package.json
const { pkg } = require('./getPath')

const hook = require(pkg)["tui-vue-hooks"] || {}
const commitMsg = hook["commit-msg"]

// default type
let type = ["feat", "fix", "css"]

// check commitMsg,if array & length > 0,replace type
if (commitMsg && (commitMsg instanceof Array) && commitMsg.length > 0) {
  type = commitMsg
}

const typeString = type.join("|")

const rule = new RegExp(`^(${typeString}):.+`)

module.exports = {
  type,
  typeString,
  rule
}
