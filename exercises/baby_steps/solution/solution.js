'use strict'

function myArgs(args){
  let sum=0
  for(let i=0;i<args.length;i++){
     sum=sum+parseInt(args[i])
  }
  console.log(sum)
}

myArgs(process.argv.slice(2))
