require('http').get(process.argv[2], function (response) {
  response.pipe(require('bl')(function (_, data) {
    console.log(data.length)
    console.log(data)
  }))
})
