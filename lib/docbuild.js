var createDocs = require('node-offline-api')
var fs = require('fs')

fs.stat('../node-apidoc', function (err) {
  if (err.code === 'ENOENT') { createDocs(process.cwd(), 'node_apidoc') }
})
