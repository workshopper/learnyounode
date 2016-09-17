var resultado = 0
for (var i = 2; i < process.argv.length; i++)
 resultado += +process.argv[i]
console.log(resultado)

