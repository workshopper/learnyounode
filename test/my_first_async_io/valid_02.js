const fs = require('fs')
const fsp = fs.promises

fsp.readFile(process.argv[2])
  .then(data => {
    const fileContentsLength = data.toString().split('\n').length - 1
    console.log(fileContentsLength)
  })
  .catch(error => {
    console.error(error)
  })
