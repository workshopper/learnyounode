'use strict'

let result = 0

for (let i = 2; i < process.argv.length; i++) {
  parsedArg = Number(process.argv[i])
  if (isNaN(parsedArg)) continue
  result += parsedArg
}

console.log(result)