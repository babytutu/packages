const fs = require('fs')
const path = require('path')

const { FgCyan, FgRed, FgGreen } = require('./utils/color')

const { type, typeString, rule } = require('./utils/getType')

const data = `#!/usr/bin/env ruby
message = File.read(ARGV[0])

if !${rule}.match(message)
  puts "[warn] commit-msg with wrong format"
  puts "[tips] start with '${typeString}', separate by ':'"
  puts "[case] ${type[0]}:new function"
  exit 1
end
`

const { git } = require('./utils/getPath')

const hooks = path.join(git, 'hooks')
const commitMsgHook = path.join(hooks, 'commit-msg')

// check .git directory frist
if (!fs.existsSync(git)) {
  console.error(FgRed, `no ${git} directory found`)
  process.exit(0)
}

// check .git/hooks directory,if no, creat it
if (!fs.existsSync(hooks)) {
  console.info(FgCyan, 'no .git/hooks directory found，auto creat it')
  fs.mkdirSync(hooks)
}

// writeFile .git/hooks/commit-msg
fs.writeFile(commitMsgHook, data, function (err) {
  if (err) {
    console.warn(FgRed, err)
  } else {
    fs.chmodSync(commitMsgHook, '777')
    console.log(FgGreen, `commit-msg type: ${type}`)
    console.log(FgCyan, 'commit-msg githook setting completed.')
  }
})
