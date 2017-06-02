var createDocs = require('node-offline-api').createDocs
var buildOptions = require('node-offline-api').buildOptions

buildOptions.buildDir = process.cwd()
buildOptions.buildName = 'node_apidoc'

createDocs()
