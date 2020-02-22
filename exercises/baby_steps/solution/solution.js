'use strict'
let sum = 0;
function myArgs(args){
  for(let i = 0;i<args.length;i++){
     sum = sum + parseInt(args[i])
  }
  console.log(sum)
}

myArgs(process.argv.slice(2))
