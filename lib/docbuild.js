createDocs = require('node-offline-api').createDocs
buildOptions = require('node-offline-api').buildOptions

buildOptions.buildName = 'node_apidoc'
buildOptions.buildQuiet = true

createDocs()
