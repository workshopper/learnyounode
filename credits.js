const fs             = require('fs')
    , path           = require('path')

function read (file) {
    return fs.createReadStream(path.join(__dirname, file), {encoding: 'utf8'})
}

function credits (workshopper) {
  require('combined-stream')
    .create()
    .append(read ('./i18n/credits/' + workshopper.i18n.lang() + '.txt'))
    .append(read ('./credits.txt'))
    .on("error", function (err) {
      console.log(err)
      throw err
    })
    .on("data", function (data) {
      console.log(require('colors-tmpl')(data))
    })
    .resume()
}

module.exports = credits
