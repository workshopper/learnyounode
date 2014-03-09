----------------------------------------------------------------------

## Task

Create a program that takes a directory and an extension as arguments, and prints the files in that directory with the given extension

----------------------------------------------------------------------

## Description

You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument. Your program should list all of the files in the given directory that end with the extension given.

## Example

Given /path/to/dir/ and 'txt' as the second argument, the program will list only files in /path/to/dir/ that **end with .txt**:

```
  $ ls /path/to/dir/
  myprogram.js       myotherprogram.js       sometext.txt         moretext.txt

  $ node myprogram.js /path/to/dir/ txt
  sometext.txt
  moretext.txt
```

## Conditions

* The list of files should be printed to the console, one file per line.
* You **must** use asynchronous I/O.

## Resources

Documentation on the `fs` module can be found by pointing your browser here:
  {rootdir:/node_apidoc/fs.html}

Documentation on the `path` module can be found by pointing your browser here:
  {rootdir:/node_apidoc/path.html}

----------------------------------------------------------------------

## Hints

You may find node's `path` module helpful, particularly the `extname` method.

The `fs.readdir()` method takes a pathname as its first argument and a callback as its second. The callback signature is:

```js
// `err` is an Error object, if an error occurred, falsey otherwise.
// `list` is an Array of filenames as Strings.
function callback (err, list) { /* ... */ }
```

----------------------------------------------------------------------
