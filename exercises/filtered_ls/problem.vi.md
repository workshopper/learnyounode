Tạo một chương trình in ra danh sách các file được lọc theo phần mở rộng trong một thư mục nào đó.
Chương trình của bạn cần nhận một đường dẫn thư mục qua tham số dòng lệnh đầu tiên (vd: '/path/to/dir/'), và một phần mở rộng để lọc qua tham số thứ 2.

Ví dụ, nếu 'txt' là phần mở rộng được nhập qua tham số thứ 2, bạn cần lọc ra một danh tất cả các file **kết thúc với .txt**.
Lưu ý, tham số thứ 2 **không được** chứa tiền tố '.'.

Danh sách các file lọc được sẽ được in ra giao diện dòng lệnh với mỗi file nằm trên một dòng.
Trong bài toán này bạn cần **phải** sử dụng I/O bất đồng bộ (asynchronous I/O).

----------------------------------------------------------------------
## GỢI Ý

Hàm `fs.readdir()` sẽ nhận một đường dẫn thư mục qua tham số thứ nhất và một hàm phản hồi qua tham số thứ hai. Hàm phản hồi có mẫu như sau:

```js
function callback (err, list) { /* ... */ }
```

Trong đó  `list` là một mảng chứa các tên file trong thư mục tương ứng.

Bạn có thể xem thêm về mô-đun `fs` ở đây:
  {rootdir:/docs-nodejs/fs.html}

Bạn cũng có thể tìm mô-đun `path` của nodejs để làm việc với hàm `extname` hiệu quả hơn.

Tài liệu cho mô-đun `path` có thể xem ở đây:
  {rootdir:/docs-nodejs/path.html}
