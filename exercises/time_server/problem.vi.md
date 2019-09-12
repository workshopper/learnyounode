Viết một chương trình **Máy chủ thời gian TCP**!

Máy chủ của bạn sẽ lắng nghe kết nối TCP qua một cổng được nhập vào qua tham số đầu tiên. Với mỗi một kết nối tới, bạn sẽ gửi lại một thời gian hiện tại theo mẫu sau:

```
"YYYY-MM-DD hh:mm"
```

với hậu tố là một kí tự **xuống dòng**. Ngày, tháng, giờ và phút cần *thêm 0* để có dạng 2 kí tự. Ví dụ:

```
"2013-07-06 17:42"
```

----------------------------------------------------------------------
## GỢI Ý

Trong bài tập này bạn chỉ cần tạo một máy chủ TCP cơ bản với mô-đun `net` - tích hợp sẵn trong lõi Nodejs, chứ không phải là máy chủ HTTP.

Mô-đun `net` có phương thức `net.createServer()` và phương thức này sẽ nhận một hàm phản hồi. Nhưng điểm đặc biệt là không giống như các hàm phản hồi thông dụng trong Node, hàm phản hồi của `createServer()` sẽ được gọi nhiều lần. Tức là mỗi khi có một kết nối tới, hàm phản hồi này sẽ lại được gọi để thực thi. Hàm phản hồi này có mẫu nhau sau:

```js
function callback (socket) { /* ... */ }
```

`net.createServer()` sẽ trả ra một thực thể (instance) của `server`. Để bắt đầu lắng nghe kết nối trên một cổng nào đó, bạn cần gọi tới `server.listen(portNumber)`, trong đó `portNumber` là cổng mà bạn muốn lắng nghe.

Thường thì một máy chủ TCP đơn giản sẽ được thực hiện như sau:

```js
const net = require('net')
const server = net.createServer(function (socket) {
  // Xử lý logic của socket
})
server.listen(8000)
```

Trong bài này, bạn cần lưu ý rằng bạn phải sử dụng một cổng cung cấp qua tham số đầu tiên để lắng nghe.

Đối tượng `socket` chứa rất nhiều thông tin meta-data của kết nối tương ứng, những nó cũng là một dòng dữ liệu kép của Node (Node duplex Stream) - là dòng dữ liệu vừa có thể đọc, vừa có thể viết. Với bài tập này, ta chỉ cần viết dữ liệu cho socket và sau đó đóng nó lại là xong.

Sử dụng `socket.write(data)` để viết dữ liệu cho socket và `socket.end()` để đóng socket. Ngoài ra, phương thức `.end()` còn có thể nhận một đối tượng dữ liệu để viết dữ liệu cho socket trước khi đóng socket lại: `socket.end(data)`.

Tài liệu cho mô-đun `net` có thể xem tại:

  {rootdir:/docs-nodejs/net.html}

Để tạo thời gian, bạn có thể sử dụng đối tượng `new Date()`, sau đó dùng các phương thức hữu dụng như:

```js
date.getFullYear()
date.getMonth() // bắt đầu từ 0
date.getDate() // trả ra ngày của tháng
date.getHours()
date.getMinutes()
```

Hoặc, nếu bạn muốn pro hơn thì có thể sử dụng gói (package) `strftime` từ npm. Hàm `strftime(fmt, date)` nhận dạng dữ liệu của date y như lệnh `date` của unix. Xem thêm thông tin về strftime tại: https://github.com/samsonjs/strftime
