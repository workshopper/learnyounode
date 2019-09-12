Viết một chương trình nhận một URL qua tham số đầu tiên và thực hiện một HTTP GET request. Tập kết **tất cả** dữ liệu từ máy chủ (không chỉ có sự kiện "data" đầu tiên) và sau đó hãy in ra 2 dòng như sau trên giao diện dòng lệnh (stdout).

1. Dòng thứ 1: In ra số kí tự nhận được từ máy chủ.
2. Dòng thứ 2: In ra đầy đủ chuỗi nội dung nhận được từ máy chủ.

----------------------------------------------------------------------
## GỢI Ý

Trong bài tập này bạn có thể phải đối mặt với 2 vấn đều lớn sau:

**1)** Tập kết dữ liệu thông suốt nhiều sự kiện "data" và nối kết quả lại với nhau trước khi có thể in ra màn hình. Ở đây, bạn sẽ dùng sự kiện "end" để biết được khi nào dòng dữ liệu nạp về đã được kết thúc, sau đó bạn có thể in chúng ra màn hình.

**2)** Sử dụng một gói thư viện thứ 3 để có thể bỏ qua được sự phức tạp khi tập kết các dòng dữ liệu lại với nhau. Ở đây, ta có thể sử dụng 2 gói khác nhau cung cấp các API rất tiện dụng để giải quyết vấn đề này (có thể có nhiều thư viện như vậy!) là: `bl` (Buffer List) và `concat-stream`.

  <https://npmjs.com/bl>
  <https://npmjs.com/concat-stream>

Để cài đặt một gói thư viện Node, hãy sử dụng Trình Quản Lý Gói của Node (Node Package Manager) `npm`. Ví dụ lệnh sau sẽ cài đặt gói `bl` vào thư mục cục bộ hiện tại của bạn:

```sh
$ npm install bl
```

Với lệnh này, nó sẽ nó tải về và cài đặt phiên bản mới nhất của một gói thư viện trong thư mục con (con của thư mục hiện tại) tên là `node_modules`. Tất cả các gói trong thư mục con này đều có thể nạp được vào file chương trình chính của bạn với lệnh `require` mà không cần phải thêm tiền tố './'. Ví dụ:

```js
const bl = require('bl')
```

Khi thực hiện lệnh `require`, Node sẽ tìm kiếm trong các mô-đun lõi của Node trước, sau đó mới tìm kiếm tới các mô-đun trong thư mục con `node_modules`.

Nếu bạn không có kết nối Internet, bạn có thể tự tạo một thư mục con `node_modules` trong thư mục ứng dụng {appname} và copy từng gói thư viện mà bạn muốn sử dụng trong đó:

  {rootdir:/node_modules/bl}
  {rootdir:/node_modules/concat-stream}

Cả 2 mô-đun `bl` và `concat-stream` đều chứa có một dòng dữ liệu dạng *ống* (piped) và chúng sẽ thu thập dữ liệu cho bạn. Khi một dòng dữ liệu kết thúc (được nạp hết), thì một hàm phản hồi sẽ được gọi thực thi với dữ liệu thu được:

```js
response.pipe(bl(function (err, data) { /* ... */ }))
// or
response.pipe(concatStream(function (data) { /* ... */ }))
```

Lưu ý rằng bạn có thể sẽ cần chuyển đổi Buffer qua String bằng `data.toString()`.

Tài liệu cho cả 2 mô-đun này đều đã được cài đặt cùng với {appname} trên hệ thống của bạn và bạn có thể đọc chúng ở đây:

  {rootdir:/docs/bl.html}
  {rootdir:/docs/concat-stream.html}
