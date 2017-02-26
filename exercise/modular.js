let filterFn = require('.module.filter.js')
let dir = process.argv[2]
let filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list)
{
  if (err) {
    return console.log('There was an error:', err)

  }
  list.forEach(function (file) {
    console.log(file)
  })
})
