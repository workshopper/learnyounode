const { readdir } = require('fs')
const { extname } = require('path')

module.exports = (directory, extension, callback) => {
  const isExtension = (file) => extname(file) === `.${extension}`

  readdir(directory, (err, files) => {
    if (err) return callback(err)

    const matchingFiles = files.filter(isExtension)
    callback(null, matchingFiles)
  })
}
