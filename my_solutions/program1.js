var sum = 0;
//console.log(process.argv);
for(var n=2; n < process.argv.length; n++) {
    sum += Number(process.argv[n]);
}
console.log(sum);