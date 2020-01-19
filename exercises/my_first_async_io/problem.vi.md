Viết một chương trình sử dụng thao thác **bất đồng bộ** với file hệ thống để đọc một file và in ra số kí tự xuống dòng của nó ra giao diện dòng lệnh (stdout), tương tự như lệnh `cat file | wc -l`.

Đường dẫn của file sẽ được cung cấp qua tham số dòng lệnh đầu tiên.

----------------------------------------------------------------------
## GỢI Ý

Giải pháp cho vấn đề này *hầu như* giống bài trước, ngoại trừ lần này bạn phải sử dụng một **tính năng cơ bản của Node.js**: bất đồng bộ.

Thay vì sử dụng `fs.readFileSync()`, lần này bạn sẽ dùng `fs.readFile()` và thay vì sử dụng giá trị được trả ra của phương thức này, bạn cần phải tự kết tập giá trị được truyền lại qua hàm phản hồi (hàm phản hồi được cung cấp qua tham số thứ 2). Nếu bạn muốn biết thêm về hàm phản hồi thì có thể xem tại: https://github.com/maxogden/art-of-node#callbacks.

Hàm phản hồi được xây dựng sẵn trong Node.js thường có mẫu như sau:

```js
function callback (err, data) { /* ... */ }
```

vì vậy, bạn có thể kiểm tra được lỗi phát sinh nếu có qua tham số đầu tiên là `err`. Nếu không có lỗi xảy ra thì bạn sẽ nhận được một đối tượng `Buffer` qua tham số thứ 2 là `data`. Cũng như với `readFileSync()`, bạn có thể truyền 'utf8' qua tham số thứ 2 và truyền hàm phản hồi qua tham số thứ 3, khi đó bạn sẽ nhận được một `String` thay vì một `Buffer` ở hàm phản hồi của bạn.

Tài liệu về mô-đun `fs` có thể xem ở đây:
  {rootdir:/docs-nodejs/fs.html}
