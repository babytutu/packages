const fs = require('fs')
const path = require('path')

const { FgCyan, FgRed, FgGreen } = require('./color')
const { git, commitMsgHookPath } = require('./getPath')

// check .git/hooks/commit-msg directory,if yes, remove it
const commitMsgHook = '.git/hooks/commit-msg'

if (!fs.existsSync(commitMsgHookPath)) {
  console.info(FgRed, `no ${commitMsgHook} found`)
  process.exit(0)
} else {
  fs.unlink(commitMsgHookPath, (err) => {
    if (err) throw err
    console.log(FgGreen, `${commitMsgHook} was deleted`)
  })
}