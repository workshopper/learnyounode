Viết một **máy chủ** HTTP trả về cùng một file text giống nhau cho mỗi request nó nhận được.

Máy chủ của bạn sẽ lắng nghe tại một cổng được chỉ định qua tham số đầu tiền của chương trình.

Còn tham số dòng lệnh thứ 2 sẽ cung cấp vị trí của file sẽ được phục vụ cho mỗi request. Bạn **cần phải** sử dụng phương thức `fs.createReadStream()` để tạo dòng dữ liệu từ file đó và gửi cho response nội dung nhận được từ dòng dữ liệu đó.

----------------------------------------------------------------------
## GỢI Ý

Trong bài này, ta dùng gói `http` trong lõi của Node để tạo máy chủ HTTP chứ không cần phải tạo máy chủ TCP ở mức dưới. Cũng như gói `net`, gói `http` cũng phương thức tên là `http.createServer()` nhưng phương thức này sẽ tạo ra một máy chủ HTTP.

`http.createServer()` sẽ sử dụng một hàm phản hồi để thực thi mỗi khi có một kết nối tới. Hàm phản hồi này có mẫu như sau:

```js
function callback (request, response) { /* ... */ }
```

Trong đó, `request` sẽ là đối request nhận được và `response` sẽ là đối tượng response tương ứng với request nhận được. `request` được sử dụng để truy cập các thuộc tính từ request nhận được như header và chuỗi truy vấn (query-string), còn `response` sẽ được sử dụng để gửi dữ liệu cho máy khách bao gồm cả header và body.

Cả 2 đối tượng `request` và `response` đều là dòng dữ liệu (Node streams)! Có nghĩa là bạn có thể gửi nhận dữ liệu trên đó.

`http.createServer()` cũng trả ra một thực thể (instance) của `máy chủ`. Sau đó bạn sử dụng nó để bắt đầu lắng nghe sự kiện trên một cổng nào đó bằng phương thức `server.listen(portNumber)`.

Một máy chủ HTTP với Node thường có dạng như sau:

```js
const http = require('http')
const server = http.createServer(function (req, res) {
  // xử lý logic cho request...
})
server.listen(8000)
```

Bạn có thể xem thêm tài liệu về mô-đun `http` tại đây:
  {rootdir:/docs-nodejs/http.html}

Mô-đun lõi `fs` cũng cung cấp API để tạo dòng dữ liệu từ các file như phương thức `fs.createReadStream()`. Phương thức này trả về một đối tượng dòng dữ liệu và bạn có thể sử dụng `src.pipe(dst)` để đẩy (pipe) dữ liệu từ dòng `src` tới dòng `dst`. Với các này, bạn có thể nối kết được một dòng dữ liệu của file nào đó với dòng response HTTP.
