module.exports = function () {
  const fs = require('fs')
  const path = require('path')
  const dir = process.argv[2]
  const fileExt = '.' + process.argv[3]
  const files = []

  function listFiles () {
    fs.readdir(dir, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }

      for (let i = 0; i < list.length; i++) {
        if (path.extname(list[i]) === fileExt) {
          files.push(list[i])
        }
      }

      const answer = files.join('\n')

      console.log(answer)
    })
  }

  listFiles()
}
