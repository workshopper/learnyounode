Viết một **máy chủ** HTTP chỉ nhận các request dạng POST và chuyển đổi các kí tự trong phần nội dung (body) nhận được thành dạng chữ viết HOA, sau đó gửi lại chuỗi đã HOA hóa đó cho máy khách.

Máy chủ của bạn cần lắng nghe trên một cổng được chỉ định từ tham số dòng lệnh đầu tiên.

----------------------------------------------------------------------
## GỢI Ý

Tuy không ép buộc, nhưng sẽ dễ dàng hơn nếu bạn sử dụng các khả năng của dòng dữ liệu với 2 đối tượng`request` và `response`.

Có một số gói khác trong trong npm cho phép bạn có thể *"chuyển đổi"* (transform) dòng dữ liệu khi đẩy nó đi thông qua các hàm xử lý. Trong bài tập này, bạn hãy sử dụng gói `through2-map` vì nó cung cấp một số API rất đơn giản về dễ sử dụng.

`through2-map` cho phép bạn tạo một *dòng chuyển đổi* (transform stream), sử dụng chỉ một hàm nhận một khúc dữ liệu và trả ra một khúc dữ liệu đã được chuyển đổi thành. Nó được thiết kế để hoạt động gần như với `Array#map()` nhưng được áp dụng cho các dòng dữ liệu:

```js
const map = require('through2-map')
inStream.pipe(map(function (chunk) {
  return chunk.toString().split('').reverse().join('')
})).pipe(outStream)
```

Với ví dụ trên, dòng dữ liệu tới từ `inStream` sẽ được chuyển sang dạng String (nếu nó không phải là dạng String), sau đó các kí tự được sắp xếp ngược lại và kết quả cuối cùng sẽ được truyền cho `outStream`. Vì vậy ta có thể xáo ngược các kí tự từ một khúc dữ liệu mà không cần đợi đủ toàn bộ! Lưu ý rằng kích cỡ của các khúc dữ liệu được quyết định bởi nguồn dữ liệu và bạn chỉ có thể điều khiển được chúng khi dữ liệu đã tới và sẵn sàng sử dụng được.

Cài đặt `through2-map`:

```sh
$ npm install through2-map
```

Nếu bạn không có kết nối Internet, đơn giản, hãy tạo một thư mục con `node_modules` trong thư mục {appname} và copy mô-đun bạn muốn sử dụng vào đó:

  {rootdir:/node_modules/through2-map}

Tài liệu về through2-map được cài đặt sẵn cùng với {appname} trên hệ thống của bạn và bạn có thể đọc nó ở đây:

  {rootdir:/docs/through2-map.html}
