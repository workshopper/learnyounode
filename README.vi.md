# Cho đời phong phú hơn với Node.js!
[![Build Status](https://travis-ci.org/workshopper/learnyounode.svg?branch=master)](https://travis-ci.org/workshopper/learnyounode)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nodeschool/discussions?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

**Giới thiệu về Node.js qua các bài tập.**

[![NPM](https://nodei.co/npm/learnyounode.png?downloads=true&&downloadRank=true&stars=true)](https://nodei.co/npm/learnyounode/) [![NPM](https://nodei.co/npm-dl/learnyounode.png?months=3&height=3)](https://nodei.co/npm/learnyounode/)

![Learn You The Node.js For Much Win!](https://raw.github.com/rvagg/learnyounode/master/learnyounode.png)

  1. Cài đặt [Node.js](http://nodejs.org/)
  2. Chạy lệnh `sudo npm install learnyounode -g`
  3. Chạy lệnh `learnyounode`
  4. **.. Nghiệm thu!**

<b><code>learnyounode</code></b> là một tập các bài tập về Node.js. Các bài tập này được sắp xếp theo độ phức tạp từ cơ bản với *"HELLO WORLD"* tới các phần nâng cao hơn như làm việc với xuất/nhập đồng bộ và bất đồng bộ, hệ thống file, lập trình mạng với TCP và HTTP, các sự kiện và dòng dữ liệu.

Sau khi hoàn thành các bài tập phần <b><code>learnyounode</code></b> này, bạn nên tiếp tục làm phần  <b><code>[stream-adventure](https://github.com/substack/stream-adventure)</code></b> để hiểu sâu hơn về các dòng dữ liệu của Node.

### Cộng tác viên

<b><code>learnyounode</code></b> tự hào được sự đóng góp của các hacker dưới đây:

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
</tbody></table>

## Giấy phép

**learnyounode** thuộc bản quyền (c) 2013-2015 cộng tác viên learnyounode (liệt kê phía trên) và cấp phép dưới giấy phép MIT. Tất cả các quyền không rõ ràng được cấp bởi giấy phép MIT sẽ được quy định riêng. Xem thêm file LICENSE.md để biết thêm chi tiết.

**learnyounode** là thành quả dựa trên sự làm việc cần mẫn của 2 lập trình viên [@substack](https://github.com/substack) và [@maxogden](https://github.com/maxogden). Hai lập trình viên tuyệt vời này đã tạo ra **[stream-adventure](https://github.com/substack/stream-adventure)** - một nền tảng cơ bản cho **learnyounode**.
