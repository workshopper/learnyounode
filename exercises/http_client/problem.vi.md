Viết một chương trình nhận một URL qua tham số đầu tiên và lấy nội dung của URL đó thông qua HTTP GET request. Sau đó hãy in **từng** "dữ liệu" ở mỗi sự kiện của response ra một dòng mới ở giao diện dòng lệnh (stdout).

----------------------------------------------------------------------
## GỢI Ý

Với bài tập này bạn cần sử dụng mô-đun `http` trong lõi của Node.

Bạn có thể xem thêm  tài liệu về mô-đun `http` tại đây:
  {rootdir:/docs-nodejs/http.html}

Bạn có thể sử dụng phương thức `http.get()` để tạo một GET request đơn giản. Tham số đầu tiên của `http.get()` có thể là một URL bạn muốn thực hiện GET, và tham số thứ 2 là một hàm phản hồi.

Không giống như các hàm phản hồi khác được xây dựng sẵn trong Node, hàm này chỉ có một tham số đầu vào như sau:

```js
function callback (response) { /* ... */ }
```

Trong đó đối tượng `response` là một đối tượng **Stream** (dòng dữ liệu) của Node. Bạn cũng có thể xử lý đối tượng Streams của Node giống như các đối tượng phát sự kiện khác. Thường có 3 sự kiện hay được sử dụng để thực hiện thao tác là: "data", "error" và "end". Bạn có thể lắng nghe một sự kiện kiểu như sau:

```js
response.on('data', function (data) { /* ... */ })
```

Sự kiện "data" được phát ra khi có một khúc dữ liệu được nạp thành công và ta có thể xử lý. Kích cỡ của khúc dữ liệu phụ thuộc vào nguồn dữ liệu.

Đối tượng `response` / Stream mà bạn lấy từ `http.get()` cũng có thể được mã hóa với phương thức `setEncoding()`. Giả sử, bạn gọi phương thức này với mã "utf8", thì sự kiện "data" sẽ phát ra một Strings thay vì là một đối tượng `Buffer` của Node. Nếu không làm như vậy, khi bạn muốn sử dụng dữ liệu dưới dạng Strings bạn phải chuyển đổi đối tượng `Buffer` ra Strings.
