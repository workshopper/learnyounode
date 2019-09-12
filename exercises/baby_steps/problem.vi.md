Viết một chương trình nhận một hoặc nhiều số đầu vào qua tham số dòng lệnh và in tổng của chúng ra giao diện dòng lệnh (stdout).

----------------------------------------------------------------------
## Gợi ý

Bạn có thể truy cập tham số dòng lệnh qua đối tượng toàn cục `process`. Đối tượng `process` có một thuộc tính là `argv`. Thuộc tính này là một mảng chứa đầy đủ thông số dòng lệnh. Ví dụ: `process.argv`.

Để bắt đầu, bạn thử  viết một chương trình  `(program.js)` đơn giản thế này:

```js
console.log(process.argv)
```

Sau đó, chạy chương trình này với lệnh `node program.js` và một vài tham số lệnh đầu vào. Ví dụ:

```sh
$ node program.js 1 2 3
```

Với lệnh chạy trên ta sẽ có kết quả như sau:

```js
['node', '/đường_dẫn/tới/thư_mục_chương_trình/program.js', '1', '2', '3']
```

Giờ bạn cần chạy vòng lặp để duyệt tất cả các tham số đầu vào để tính được tổng của chúng. Phần tử đầu tiên của mảng process.argv luôn là 'node', và phần tử thứ 2 luôn là đường dẫn tới chương trình của bạn, vì vậy bạn cần bắt đầu duyệt từ tham số thứ 3(tức là 'process.argv[2]') tới hết để truy cập được toàn bộ tham số đầu vào và tính tổng của chúng.

Chú ý rằng toàn bộ các phần tử của mảng `process.argv` là các string nên bạn cần phải chuyển đổi chúng qua dạng số. Bạn có thể chuyển qua dạng số bằng cách thêm `+` vào đầu hoặc sử dụng hàm `Number()`. Ví dụ: `+process.argv[2]` hoặc `Number(process.argv[2])`.

Dùng lệnh `{appname} verify program.js` để kiểm tra chương trình chạy đúng hay chưa. Khi thực thi lệnh {appname}, nó sẽ tự truyền tham số đầu vào cho bạn, nên bạn không cần truyền tham số vào nữa. Nếu bạn muốn chạy trường trình của mình thì có thể sử dụng lệnh `{appname} run program.js`. Bằng việc sử dụng `run`, chương trình của bạn sẽ được cung cấp môi trường thử mà {appname} đã thiết lập sẵn cho các bài tập.
