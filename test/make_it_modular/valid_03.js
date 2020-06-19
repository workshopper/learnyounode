const mod = require('./module_valid_03')

mod(process.argv[2], process.argv[3], (error, list) => {
  if (error) return console.log(error)

  list.forEach((entry) => {
    console.log(entry)
  })
})
