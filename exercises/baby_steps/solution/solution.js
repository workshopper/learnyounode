for (var i = 2, sum = 0; i < process.argv.length; sum += parseInt(process.argv[i++],10));
console.log(sum);
