----------------------------------------------------------------------

## Task

Write a program that prints the text "HELLO WORLD" to stdout.

----------------------------------------------------------------------

## Description

Node has a console API very similar to the console API found in the browser:

```js
console.log("text") // prints "text" to stdout (without quotes).
console.error("error") // prints "error" to stderr (without quotes).
```

Use Node's console API to print "HELLO WORLD" to stdout.

## Example

  $ node myprogram.js
  HELLO WORLD

  $ {appname} run myprogram.js
  HELLO WORLD

  $ {appname} verify myprogram.js
  "HELLO WORLD" == "HELLO WORLD"
  ...
  ✓ Submission results match expected
  ...
  Your solution to HELLO WORLD passed!

## Conditions

* Your submission will be judged for correct output.

----------------------------------------------------------------------

## Hints

To make Node.js program, create a new file with a `.js` extension and start writing JavaScript!

You can execute your program by running it with the `node` command. e.g.

```sh
$ node myprogram.js
```

For many exercises, {appname} will supply your program with arguments during verification. These values are usually randomised. You can test how your program behaves with the {appname} supplied arguments without actually verifying using:

```sh
$ {appname} run myprogram.js
```

When you are happy your program does what is expected in the current exercise, run the following command to verify:

```sh
$ {appname} verify myprogram.js
```

Your program will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful. Type {appname} to select the next lesson!

----------------------------------------------------------------------
