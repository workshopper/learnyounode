var createDocs = require('node-offline-api').createDocs
var buildOptions = require('node-offline-api').buildOptions
var fs = require('fs')

buildOptions.buildDir = process.cwd()
buildOptions.buildName = 'node_apidoc'

fs.stat('../node-apidoc', function (err) {
  if (err) { createDocs() }
})
