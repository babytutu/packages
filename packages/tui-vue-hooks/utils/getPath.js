const path = require('path')
const fs = require('fs')

function getPath(dir, root = process.cwd()) {
  return path.join(root, dir)
}

let git = getPath('.git')
let pkg = getPath('package.json')

// because files in node_modules/tui-vue-hooks, so add '../../'to before the path
const gitPath = getPath('../../.git')
const pkgPath = getPath('../../package.json')

if (fs.existsSync(gitPath)) {
  git = gitPath
}

if (fs.existsSync(pkgPath)) {
  pkg = pkgPath
}

const commitMsgHookPath = getPath('/hooks/commit-msg', git)

module.exports = {
  git,
  pkg,
  commitMsgHookPath
}