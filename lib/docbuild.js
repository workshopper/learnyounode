var createDocs = require('node-offline-api').createDocs
var buildOptions = require('node-offline-api').buildOptions

buildOptions.buildName = 'node_apidoc'
buildOptions.buildQuiet = true

createDocs()
