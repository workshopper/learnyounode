//function callback (error, lista) { /* ... */ }
//fs.readdir(path[, options], callback)

const fs = require('fs');
const path = require('path')

var  whereLookingFor = process.argv[2]
var  extension = '.' + process.argv[3]

fs.readdir(whereLookingFor, function(err, archivos){
 if (err) throw err;
 archivos.forEach(function(archivo){
  if(path.extname(archivo) === extension)
   console.log(archivo)
 })
})

 
