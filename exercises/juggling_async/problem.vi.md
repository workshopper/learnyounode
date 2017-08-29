Bài toàn này tương tự như bài toán trước (tập kết HTTP) bằng cách sử dụng `http.get()`. Tuy nhiên, lần này bạn sẽ được cung cấp **ba** URL qua tham số đầu tiên.

Bạn phải tập kết toàn bộ nội dung đầy đủ của URL đã được cung cấp và in nó ra giao diện dòng lệnh (stdout). Bạn không cần phải in ra độ dài mà chỉ cần in dữ liệu ra dưới dạng String, với mỗi URL trên một dòng tương ứng. Tức là bạn **cần phải** in chúng ra đúng thứ tự của 3 URL đầu vào.

----------------------------------------------------------------------
## GỢI Ý

Các máy chủ từ URL này có thể trả về kết quả không theo thứ tự gọi, nên bạn không thể in ngay kết quả nhận được sau khi nhận được chúng.
Mà bạn sẽ phải giữ chúng lại theo đúng thứ tự đầu vào cho tới khi toàn bộ cả 3 URL đều được lấy hết. Khi bạn lấy được toàn bộ dữ liệu rồi thì bạn có thể in nó ra giao diện dòng lệnh.

Việc đếm thông qua các hàm phản hồi là một kĩ thuật quản lý bất đồng bộ căn bản trong Node. Thay vì phải tự mình thực hiện việc quản lý này, sẽ rất tiện nếu bạn sử dụng một thư viện thứ 3 nào đó chẳng hạn như [async](https://npmjs.com/async) hay [after](https://npmjs.com/after). Nhưng trong bài tập này, bạn hãy thử gắng tự thực hiện việc quản lý này xem sao nhé.
