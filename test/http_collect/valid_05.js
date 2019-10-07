/**
 * Credits: https://github.com/SufiyanSamnani
 */
const http = require('http')
let outputData = ''

http.get(process.argv[2], response => {
  response.setEncoding('utf8')

  // error handling
  response.on('error', console.error)

  response.on('data', (data) => {
    outputData += data
  })
  response.on('end', () => {
    console.log(outputData.length)
    console.log(outputData)
  })
})
