Viết một chương trình sử dụng thao tác đọc một file bằng phương pháp đồng bộ và sau đó in ra số kí tự xuống dòng (\n) trong file đó ra giao diện dòng lệnh (stdout), tương tự như lệnh `cat file | wc -l`.

Đường dẫn của file sẽ được cung cấp qua tham số dòng lệnh đầu tiên. Bạn không nhất thiết phải tạo một file để kiểm tra vì môi trường giả lập đã cung cấp sẵn các file cho bạn rồi.

----------------------------------------------------------------------
## GỢI Ý

Để thực hiện các thao tác với hệ thống file, bạn cần sử dụng mô-đun `fs` được tích hợp sẵn trong lõi thư viện Node. Để nạp những mô-đun được tích hợp sẵn, hoặc các mô-đun "toàn cục", sử dụng `require(module_name)` để nạp:

```js
const fs = require('fs')
```

Với mã nạp như trên bạn sẽ nạp được đầy đủ mô-đun `fs`, và có thể sử dụng chúng như một biến trong chương trình.

Tất cả các phương thức thao tác hệ thống file đồng bộ (hay blocking) của mô-đun  `fs` đều kết thúc với 'Sync'. Đê đọc một file đồng bộ, bạn cần sử dụng `fs.readFileSync('/đường_dẫn/tới/file')`. Phương thức này sẽ *trả ra* một đối tượng bộ đệm `Buffer` chứa toàn bộ nội dung của file tương ứng.

Tài liệu cho mô-đun `fs` có thể xem tại:
  {rootdir:/docs-nodejs/fs.html}

Sử dụng đối tượng `Buffer` là một cách hiệu quả để biểu diễn một mảng các dữ liệu tùy ý trong Node, tức là nó có thể biểu diễn được dữ liệu dạng ascii, nhị phân hay bất cứ một dạng nào khác. Để chuyển đổi đối tượng `Buffer` qua dạng chuỗi string, ta chỉ cần gọi phương thức `toString()` của nó là được. Ví dụ. `const str = buf.toString()`.

Bạn có thể đọc thêm tài liệu về `Buffer`s tại:
  {rootdir:/docs-nodejs/buffer.html}

Nếu bạn đang tìm kiếm một giải pháp để đếm số kí tự xuống dòng trong một chuỗi, thì nhớ lại một chút là `String` trong JavaScript có thể được phân rã bằng `.split()` thành một mảng của các chuỗi con và '\n' có thể được sử dụng làm tham số phân rã chuỗi. Chú ý rằng file kiểm tra của bài này sẽ không có kí tự xuống dòng ('\n') ở dòng cuối cùng, nên nếu  bạn sử dụng cách phân rã này thì bạn sẽ thu được một mảng có số phần tử lớn hơn số kí tự xuống dòng của file đầu vào một đơn vị.
