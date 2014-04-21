Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).

----------------------------------------------------------------------
## HINTS

You can access command-line arguments via the global `process` object. The `process` object has an `argv` property which is an array containing the complete command-line. i.e. `process.argv`.

To get started, write a program that simply contains:

```js
console.log(process.argv)
```

Run it with `node program.js` and some numbers as arguments. e.g:

```sh
$ node program.js 1 2 3
```

In which case the output would be an array looking something like:

```js
[ 'node', '/path/to/your/program.js', '1', '2', '3' ]
```

You'll need to think about how to loop through the number arguments so  you can output just their sum. The first element of the process.argv array is always 'node', and the second element is always the path to your program.js file, so you need to start at the 3rd element (index 2), adding each item to the total until you reach the end of the array.

Also be aware that all elements of `process.argv` are strings and you may need to *coerce* them into numbers. You can do this by prefixing the property with `+` or passing it to `Number()`. e.g. `+process.argv[2]` or `Number(process.argv[2])`.

{appname} will be supplying arguments to your program when you run `{appname} verify program.js` so you don't need to supply them yourself. To test your program without verifying it, you can invoke it with `{appname} run program.js`. When you use `run`, you are invoking the test environment that {appname} sets up for each exercise.

----------------------------------------------------------------------
