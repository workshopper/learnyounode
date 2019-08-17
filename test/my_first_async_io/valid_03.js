const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)

readFile(process.argv[2])
  .then(data => {
    const fileContentsLength = data.toString().split('\n').length - 1
    console.log(fileContentsLength)
  })
  .catch(err => {
    console.error(err)
  })
