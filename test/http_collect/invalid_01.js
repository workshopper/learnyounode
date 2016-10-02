require('http').get(process.argv[2], function (response) {
  response.pipe(require('bl')(function (err, data) {
    err
    console.log(data.length)
    console.log(data)
  }))
})
