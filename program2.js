var result = 0;
var i;

for (i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i]);
}

console.log(result);
