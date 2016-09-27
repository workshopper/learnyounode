'use strict';

let fs = require('fs');

let content = fs.readFileSync(process.argv[2]);
let lineNum = content.toString().split('\n').length - 1;

console.log(lineNum);
