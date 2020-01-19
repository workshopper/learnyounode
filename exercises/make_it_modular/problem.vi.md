Bài toán này cũng tương tự như bài toán trước nhưng ở đây bạn sẽ làm quen với khái niệm **mô-đun**. Bạn sẽ cần tạo ra 2 file .js để giải quyết bài tập này.

Tạo một chương trình in ra một danh sách các file được lọc với đuôi mở rộng từ một thư mục được chỉ định. Tham số đầu tiên sẽ là tên thư mục, còn tham số thứ 2 sẽ là đuôi mở rộng. Sau đó in ra mỗi file trên một dòng ở giao diện dòng lệnh (stdout). Bạn **cần phải** sử dụng I/O bất đồng bộ ở đây.

Hầu hết công việc sẽ được thực hiện ở file *mô-đun*. Mô-đun sẽ *export* một hàm duy nhất, và hàm này nhận **ba** tham số theo thứ tự: tên thư mục, tên mở rộng và một hàm phản hồi. Tham số tên mở rộng phải giống với tên file mở rộng mà chương trình nhận được, tức là không biến đối nó như không dùng RegExp, không thêm tiền tố ".", hay nghịch bất kì cái gì với nó, chỉ đơn giản là truyển nó cho mô-đun của bạn.

Hàm phản hồi phải được khai báo giống như các hàm phản hồi thông dụng được quy ước của Node: `function(err, data)`. Với quy ước này, bạn sẽ có thể truyền được lỗi phát sinh qua tham số đầu tiên nếu có, còn khi không có lỗi phát sinh thì nó được truyền giá trị là null, và tham số thứ 2 sẽ được sử dụng để truyền dữ liệu của bạn. Cụ thể trong bài tập này, dữ liệu của bạn thu được sẽ là một danh sách các file đã được lọc, ví dụ như một đối tượng Array chứa các file đã lọc được. Khi phát sinh lỗi, ví dụ lỗi phát sinh từ `fs.readdir()` chẳng hạn, bạn cần gọi hàm phản hồi với lỗi được truyền qua tham số đầu tiên, còn tham số thứ 2 không cần truyền.

Bạn **không được** in trực tiếp ra màn hình từ file mô-đun, mà phải in nó trong file chương trình chính.

Trong trường hợp có lỗi xảy ra ảnh hưởng tới file chương trình chính, đơn giản hãy kiểm tra nó và in ra một thông đẹp có tính thông tin ra màn hình.

Mô-đun của bạn cần phải tuân theo các quy tắc sau:

1. Export một hàm duy nhất, và hàm này có các tham số đầu vào chính xác như đã mô tả phía trên.
2. Gọi hàm phản hồi đúng đắn với một lỗi phát sinh hoặc các dữ liệu như đã mô tả.
3. Không thay đổi bất cứ thứ gì như biến toàn cục hay stdout.
4. Xử lý tất cả các lỗi có thể xảy ra và truyền nó cho hàm phản hồi.

Điểm lợi có thể thấy khi tuân theo các quy tắc là mô-đun của bạn có thể dễ dàng sử dụng với bất cứ ai.

----------------------------------------------------------------------
## GỢI Ý

Tạo một file js trong cùng thư mục với file chương trình chính và viết một hàm lọc file với mô tả như trên. Để *export* một *hàm đơn*, bạn gắn hàm của bạn cho đối tượng `module.exports`, giống như đoạn mã dưới đây:

```js
module.exports = function (args) { /* ... */ }
```

Hàm ví dụ trên không có tên nhưng bạn hoàn toàn có thể gắn tên bất kì nào cho nó.

Bạn cần sử dụng `require()` để nạp mô-đun bạn vừa tạo ra giống như cách ta nạp mô-đun `fs` bằng lệnh `require('fs')`. Ở đây chỉ có một điểm khác là file mô-đun cần phải được thêm tiền tố './' khi truyền cho phương thức `require()`. Giả sử file mô-đun của bạn là mymodule.js, thì ta sẽ nạp nó như sau:

```js
const mymodule = require('./mymodule.js')
```

Đuôi mở rộng '.js' là không bắt buộc nên bạn có thể bỏ nó đi cũng được.

Với đoạn mã trên, thì giờ bạn đã có một đối tượng `module.exports` được gắn cho biến `mymodule` trong chương trình. Vì bạn export một hàm đơn nên `mymodule` cũng chính là hàm mà bạn cần gọi!

Ngoài ra, bạn cũng nên tạo thói quen kiểm tra lỗi trước và nếu có lỗi thì nên trả ra hàm phản hồi sớm:

```js
function bar (callback) {
  foo(function (err, data) {
    if (err) { return callback(err) } // có lỗi, ta trả ra sớm

    // ... không có lỗi, ta tiếp tục xờ nắn `data`

    // khi xử lý xong, gọi tới hàm phản hồi với tham số thứ nhất (đối tượng lỗi) là `null`

    callback(null, data)
  })
}
```
