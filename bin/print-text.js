const fs         = require('fs')
    , path       = require('path')
    , colorsTmpl = require('colors-tmpl')

function printText (appname, file, callback) {
  var variables = {
      appname : appname
    , rootdir : path.resolve(__dirname, '..')
  }

  fs.readFile(file, 'utf8', function (err, contents) {
    if (err)
      throw err

    contents = contents.toString()
    contents = colorsTmpl(contents)
    Object.keys(variables).forEach(function (k) {
      contents = contents.replace(new RegExp('\\{' + k + '\\}', 'gi'), variables[k])
    })
    console.log(contents)
    callback && callback()
  })
}

module.exports = printText