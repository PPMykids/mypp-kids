# MYPP MYKISD Shop — website bán hàng miễn phí

## Có gì trong bộ website?
- Giao diện responsive, ưu tiên điện thoại.
- Hai danh mục: đồ chơi trẻ em và pin/linh kiện điện tử.
- Thẻ sản phẩm có giá bán, giá tham khảo cũ, mô tả và nút hỏi mua.
- Nút Zalo gắn với số `0964349029`.
- Không cần cơ sở dữ liệu hoặc cài đặt phần mềm.

## Trước khi đăng website
**Quan trọng:** Sản phẩm, giá bán, giá cũ và mô tả trong bản mẫu là dữ liệu minh họa. Hãy thay bằng thông tin chính xác của shop trước khi công khai. Không dùng giá cũ nếu chưa có căn cứ về giá bán trước đó.

### Sửa sản phẩm
Mở `script.js` bằng trình soạn thảo văn bản:
- `products.toys`: danh sách đồ chơi.
- `products.batteries`: danh sách pin và linh kiện.
- `name`: tên sản phẩm.
- `desc`: mô tả.
- `price`: giá bán, chỉ nhập số, ví dụ `129000`.
- `oldPrice`: giá tham khảo cũ, chỉ nhập số.
- `emoji`: biểu tượng minh họa; có thể thay bằng hình ảnh thật sau khi nâng cấp.
- `code`: mã sản phẩm.
- `ZALO_NUMBER`: số Zalo của shop, chỉ gồm chữ số.

### Xuất bản miễn phí bằng GitHub Pages
1. Trên máy tính, giải nén file ZIP.
2. Tạo/đăng nhập tài khoản tại https://github.com.
3. Tạo repository mới, ví dụ `mypp-mykisd-shop`. Chọn Public.
4. Tải lên 4 file: `index.html`, `style.css`, `script.js`, `README.md` (hoặc các file trong thư mục).
5. Mở **Settings → Pages** của repository.
6. Ở phần **Build and deployment**, chọn **Deploy from a branch**.
7. Chọn branch `main`, folder `/ (root)`, bấm **Save**.
8. Chờ GitHub Pages xuất bản; địa chỉ thường có dạng `https://TEN-TAI-KHOAN.github.io/mypp-mykisd-shop/`.
9. Mở đường dẫn trên điện thoại, kiểm tra các nút Zalo và giá sản phẩm.

Lưu ý: GitHub Pages phù hợp với website tĩnh như bộ này; không có quản lý đơn hàng, tồn kho hoặc thanh toán trực tuyến tích hợp sẵn. Người mua sẽ nhắn Zalo để chốt đơn. Bạn có thể dùng Netlify để triển khai tương tự bằng cách tải thư mục website lên trang Deploy thủ công của Netlify.

## Lưu ý về liên kết Zalo
Nút mở hồ sơ/chat Zalo theo số điện thoại. Tùy thiết bị và trạng thái đăng nhập, Zalo có thể mở ứng dụng hoặc trình duyệt. Nội dung tin nhắn đặt sẵn có thể không tự điền trên mọi phiên bản Zalo; khách vẫn có thể gửi tên/mã sản phẩm thủ công.
