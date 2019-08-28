# Learn You The Node.js For Much Win!
[![Build Status](https://travis-ci.org/workshopper/learnyounode.svg?branch=master)](https://travis-ci.org/workshopper/learnyounode)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nodeschool/discussions?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![Help Contribute to Open Source](https://www.codetriage.com/workshopper/learnyounode/badges/users.svg)](https://www.codetriage.com/workshopper/learnyounode)

**An intro to Node.js via a set of self-guided workshops.**

[What is Node.js](https://github.com/nodeschool/what-is-node/blob/master/simple.en.md)

[![NPM](https://nodei.co/npm/learnyounode.png?downloads=true&&downloadRank=true&stars=true)](https://nodei.co/npm/learnyounode/) [![NPM](https://nodei.co/npm-dl/learnyounode.png?months=3&height=3)](https://nodei.co/npm/learnyounode/)

## What is learnyounode?

![Learn You The Node.js For Much Win!](https://raw.github.com/rvagg/learnyounode/master/learnyounode.png)

<b><code>learnyounode</code></b> is a Node.js package that contains a series of workshop lessons which will teach you the basics of writing Node.js applications. The lessons start with a basic *"HELLO WORLD"* lesson, and then move on to more advanced exercises about dealing with synchronous & asynchronous I/O, filesystem operations, TCP and HTTP networking, events and streams.

## Installing learnyounode

1. Install [Node.js](http://nodejs.org/)
2. Run `npm install -g learnyounode` (this installs the learnyounode Node.js package globally). If this step fails, try one of the following fixes:
    - Prefix the install command with sudo:
      `sudo npm install -g learnyounode`

      or
    - [fix your npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions).
3. Test that learnyounode has been installed successfully by running the command `learnyounode` in your terminal. This will start the learnyounode application, and you should see a blue screen similar to the one in the screenshot above.
    - (Ubuntu users) In case step 3 fails, run `sudo apt-get install nodejs-legacy`
4. **profit!**

## Completing your first exercise

1. **Start up learnyounode** in your terminal by running the command `learnyounode` (you should see a blue screen similar to the one in the screenshot above).
2. **Start a learnyounode exercise** by using the arrow keys to navigate, and the enter key to select a lesson. For this example, scroll to the "HELLO WORLD" lesson and press enter. This will result in three things happening:
    1. The instructions for the "HELLO WORLD" lesson will now be printed out to your terminal (note: You may need to scroll up in your terminal to see the beginning of the lesson instructions if it has been cut off by your terminal window).
    2. The `learnyounode verify` command will now be set to verify any script that you pass into it with the expected output of the lesson that you selected (in the case of the "HELLO WORLD" lesson, the command `learnyounode verify` will now check that the script file you pass in satisfies the expected outcomes of the "HELLO WORLD" lesson by making sure the script prints the text "HELLO WORLD" to stdout).
    3. The learnyounode application will exit, allowing you to use your terminal again.
3. **Create your solution for the exercise** by creating a new script file named "program.js" and following the instructions and hints that were printed out above for the lesson. For the "HELLO WORLD" lesson, your script "program.js" should have code in it that prints the text "HELLO WORLD" to stdout when run with Node.js (you can test your script file with Node.js by using the command: `node program.js`).
4. **Verify that your solution to the lesson is correct** by running the command `learnyounode verify program.js` (note: if you named your script file something other than "program.js", replace "program.js" with the correct filename). If your solution is not correct, you will see a FAIL message along with some information about why your solution didn't pass the tests. In the case of a FAIL message, rework your solution until running the verify command passes. If your solution passes the tests, you should see a "PASS" message. Congratulations! :)
5. **Move on to the next lesson** if you have verified that your solution is correct. Repeat these instructions from step 1 and select the next lesson that you would like to do (it is suggested to do the lessons in order from top to bottom).

Once you have finished <b><code>learnyounode</code></b>, graduate to <b><code>[stream-adventure](https://github.com/substack/stream-adventure)</code></b> for a set of exercises that dig in to Node's streams.

### Contributors

<b><code>learnyounode</code></b> is proudly brought to you by the following hackers:

<table><tbody>
<tr><th align="left">Rod Vagg</th><td><a href="https://github.com/rvagg">GitHub/rvagg</a></td><td><a href="http://twitter.com/rvagg">Twitter/@rvagg</a></td></tr>
<tr><th align="left">Andrey Sidorov</th><td><a href="https://github.com/sidorares">GitHub/sidorares</a></td><td><a href="http://twitter.com/sidorares">Twitter/@sidorares</a></td></tr>
<tr><th align="left">Julián Duque</th><td><a href="https://github.com/julianduque">GitHub/julianduque</a></td><td><a href="http://twitter.com/julian_duque">Twitter/@julian_duque</a></td></tr>
<tr><th align="left">Lars-Magnus Skog</th><td><a href="https://github.com/ralphtheninja">GitHub/ralphtheninja</a></td><td><a href="http://twitter.com/ralphtheninja">Twitter/@ralphtheninja</a></td></tr>
<tr><th align="left">Tim Inman</th><td><a href="https://github.com/thehack">GitHub/thehack</a></td><td><a href="http://twitter.com/timinman">Twitter/@timinman</a></td></tr>
<tr><th align="left">Dan Flettre</th><td><a href="https://github.com/Flet">GitHub/Flet</a></td><td><a href="http://twitter.com/flettre">Twitter/@flettre</a></td></tr>
<tr><th align="left">Leigh Zhu</th><td><a href="https://github.com/lisposter">GitHub/lisposter</a></td><td><a href="http://twitter.com/lisposter">Twitter/@lisposter</a></td></tr>
<tr><th align="left">Lucas F. da Costa</th><td><a href="https://github.com/lucasfcosta">GitHub/lucasfcosta</a></td><td></td></tr>
<tr><th align="left">Martin Heidegger</th><td><a href="https://github.com/martinheidegger">GitHub/martinheidegger</a></td><td><a href="http://twitter.com/leichtgewicht">Twitter/@leichtgewicht</a></td></tr>
<tr><th align="left">Toshiharu Harada</th><td><a href="https://github.com/haradats">GitHub/haradats</a></td><td><a href="http://twitter.com/haradats">Twitter/@haradats</a></td></tr>
<tr><th align="left">Eric Douglas</th><td><a href="https://github.com/ericdouglas">GitHub/ericdouglas</a></td><td><a href="http://twitter.com/ericdouglas_">Twitter/@ericdouglas_</a></td></tr>
<tr><th align="left">Alejandro Oviedo</th><td><a href="https://github.com/a0viedo">GitHub/a0viedo</a></td><td><a href="http://twitter.com/a0viedo">Twitter/@a0viedo</a></td></tr>
<tr><th align="left">Leonardo Nascimento</th><td><a href="https://github.com/leonascimento">GitHub/leonascimento</a></td><td><a href="http://twitter.com/leonardo386">Twitter/leonardo386</a></td></tr>
<tr><th align="left">Christophe Porteneuve</th><td><a href="https://github.com/tdd">GitHub/tdd</a></td><td><a href="http://twitter.com/porteneuve">Twitter/@porteneuve</a></td></tr>
<tr><th align="left">Do Minh Hai</th><td><a href="https://github.com/dominhhai">GitHub/dominhhai</a></td><td><a href="http://twitter.com/minhhai3b">Twitter/@minhhai3b</a></td></tr>
<tr><th align="left">Phung Van Tu</th><td><a href="https://github.com/minatu2d">GitHub/minatu2d</a></td><td><a href="http://twitter.com/minatu2d">Twitter/@minatu2d</a></td></tr>
<tr><th align="left">Shim</th><td><a href="https://github.com/marocchino">GitHub/marocchino</a></td><td><a href="http://twitter.com/marocchino">Twitter/@marocchino</a></td></tr>
<tr><th align="left">Chayoung You</th><td><a href="https://github.com/yous">GitHub/yous</a></td><td><a href="http://twitter.com/_Yous">Twitter/@_Yous</a></td></tr>
<tr><th align="left">Espen Dalløkken</th><td><a href="https://github.com/leftieFriele">GitHub/leftieFriele</a></td><td><a href="http://twitter.com/leftieFriele">Twitter/leftieFriele</a></td></tr>
</tbody></table>

## License

**learnyounode** is Copyright (c) 2013-2015 learnyounode contributors (listed above) and licenced under the MIT licence. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE.md file for more details.

**learnyounode** builds on the excellent work by [@substack](https://github.com/substack) and [@maxogden](https://github.com/maxogden) who created **[stream-adventure](https://github.com/substack/stream-adventure)** which serves as the original foundation for **learnyounode**.
