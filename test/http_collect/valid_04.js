const http = require('http')
const concat = require('concat-stream')

http.get(process.argv[2], response => {
  response.pipe(concat(data => {
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})
