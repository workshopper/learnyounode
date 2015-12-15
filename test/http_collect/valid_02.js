require('http').get(process.argv[2], function (response) {
  response.pipe(require('bl')(function (err, data) {
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))  
})