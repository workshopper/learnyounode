const http = require('http')
const bufferArray = []

http.get(process.argv[2], response => {
  response.on('data', chunk => {
    bufferArray.push(chunk)
  }).on('end', () => {
    const data = Buffer.concat(bufferArray).toString()
    console.log(data.length)
    console.log(data)
  })
})
