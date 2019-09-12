const dir = process.argv[2]
const ext = process.argv[3]
const cmd = 'ls -1 ' + dir
const pathUtil = require('path')
require('child_process').exec(cmd, function (err, stdout) {
  if (err) {
    console.log(err)
  }
  let files = stdout.split('\n')
  if (ext) {
    files = files.filter(function (file) {
      return pathUtil.extname(file) === '.' + ext
    })
  }
  console.log(files.join('\n'))
})
