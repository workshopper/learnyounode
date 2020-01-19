Viết một **máy chủ** HTTP trả về dữ liệu JSON khi nhận được một request GET qua đường dẫn '/api/parsetime'. Request này sẽ chứa một chuỗi truy vấn (query string) với một khóa (key) là 'iso', và giá trị là một thông số thời gian dạng ISO (ISO-format time).

Ví dụ:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

Response JSON sẽ chỉ bao gồm 3 thuộc tính là 'hour' (giờ), 'minute' (phút) and 'second' (giây). Ví dụ:

```json
{
  "hour": 14,
  "minute": 23,
  "second": 15
}
```

Thêm một điểm cuối kết nối (endpoint) thứ 2 với đường dẫn '/api/unixtime'. Đường dẫn này cũng nhận một chuỗi truy vấn như trên, nhưng sẽ trả về thời gian UNIX mili-giây (khoảng thời gian tính bằng mili-giây tính từ 1/1/1970 00:00:00 UTC) với thuộc tính 'unixtime'. Ví dụ:

```json
{ "unixtime": 1376136615474 }
```

Máy chủ của bạn sẽ lắng nghe ở cổng được truyền vào chương trình qua tham số đầu tiên.

----------------------------------------------------------------------
## GỢI Ý

Đối tượng `request` từ một máy chủ HTTP có một  thuộc tính `url`, bạn sẽ cần sử dụng thuộc tính này để *"điều hướng"* (route) các request cho từng điểm cuối kết nối (endpoint).

Bạn có thể phân tích (parse) URL và chuỗi truy vấn (query string) bằng cách sử dụng mô-đun 'url' trong lõi Node. `new URL(request.url)` sẽ phân tích nội dung của request.url và trả lại cho bạn một đối tượng với các thuộc tính hữu ích.

Ví dụ, gõ lệnh sau trên giao diện dòng lệnh:

```sh
$ node -pe "new URL('/test?q=1', 'http://example.com')"
```

Xem thêm chi tiết về mô-đun `url` tại:
  {rootdir:/docs-nodejs/url.html}

Response sẽ được trả lại dưới dạng JSON. Bạn tìm hiểu `JSON.stringify()` để biết thêm nhé.

Bạn cũng nên trả lại thuộc tính Content-Type, vì bạn đang làm việc với Website mà, cách trả như sau:

```js
res.writeHead(200, { 'Content-Type': 'application/json' })
```

Đối tượng `Date` của JavaScript có thể in ra thời gian dưới dạng ISO, ví dụ: `new Date().toISOString()`. Nó cũng có thể phân tích được một chuỗi dạng này khi bạn truyền nó cho hàm khởi tạo của lớp `Date`.  Ngoài ra, ta còn có thể dễ dàng sử dụng `Date#getTime()` để quy đổi ra dạng UNIX mili-giây.
