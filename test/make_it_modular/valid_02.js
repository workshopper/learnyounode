// use optional encoding parameter solution if current version of node supports it,
// otherwise fallback to the original version
var nodeMajorVersion = parseInt(process.version[1])
if (nodeMajorVersion >= 6) {
  require('./module_valid_02')(process.argv[2], process.argv[3], handleOutput)
} else {
  require('./module_valid_01')(process.argv[2], process.argv[3], handleOutput)
}

function handleOutput (error, list) {
  if (error) {
    return console.log(error)
  }

  list.forEach(function (entry) {
    console.log(entry)
  })
}
