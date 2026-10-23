// DỮ LIỆU MẪU: thay tên, mô tả, giá và biểu tượng bằng thông tin sản phẩm thực tế.
const ZALO_NUMBER = "0964349029";
const products = {
  toys: {
  name: "Bộ Xếp Hình Nam Châm 64, 100  chi tiết, Đồ Chơi Ghép Hình Nam Châm mykids",
  desc: " Bộ Đồ chơi xếp hình nam châm, nam châm xếp hình thông minh, chất liệu nhựa nguyên sinh ABS cao cấp
Thông tin sản phẩm:
👉 Tên sản phẩm: Đồ chơi xếp hình nam châm, nam châm xếp hình thông minh
👉 Chất liệu: Nhựa ABS cao cấp, Nam Châm Từ Tính.
👉 Chủng loại: 64PCS và 100PCS
👉 Độ tuổi phù hợp: Trên 2 tuổi trở lên
Công dụng sản phẩm:
👉 Kích thích phát triển tư duy hình học và không gian, đồ chơi sử dụng lực từ tính của các thanh nam châm giúp bé có thể xây dựng được bất cứ hình khối nào mà bé tưởng tượng.
👉 Khám phá và phát triển sự khéo léo của bé, bé sẽ kiến tạo được nhiều mô hình, mô hình càng phức tạp.
👉 Mẹ có thể dạy bé tại nhà qua việc xếp thành con số, con chữ, học đếm,... Việc vừa học vừa chơi giúp bé hào hứng khi học bài và nhớ lâu.
👉 Sản phẩm bao gồm nam châm và thanh nhựa ABS an toàn tuyệt đối, không gây độc hại cho trẻ.
👉 Thiết kế nhiều màu sắc đa dạng, kích thích hứng thú chơi của trẻ.
THUỘC TÍNH SẢN PHẨM
• Màu sắc: Nhiều màu
• Kích thước: Nhiều kích thước các chi tiết khác nhau
• Trọng lượng: 900g
• Chất liệu: Nhựa ABS an toàn tuyệt đối
• Hướng dẫn sử dụng: Bóc sản phẩm ra khỏi vỏ hộp, lắp ghép các chi tiết với nhau.
• Độ tuổi: 2 tuổi trở lên
.",
  price: 210000,
  oldPrice: 310000,
  emoji: "🚗",
  tag: "SẢN PHẨM MỚI",
  code: "TOY005"
},


  batteries: [
    {name:"Pin sạc 18650", desc:"Vui lòng xác nhận dung lượng, dòng xả và kích thước theo nhu cầu.", price:35000, oldPrice:49000, emoji:"🔋", tag:"PHỔ BIẾN", code:"BAT-001"},
    {name:"Pin LiPo 3.7V", desc:"Cần đối chiếu kích thước, dung lượng, dây và đầu nối trước khi mua.", price:45000, oldPrice:59000, emoji:"🔌", tag:"", code:"BAT-002"},
    {name:"Pin bộ 2S 7.4V", desc:"Chọn đúng dung lượng, mạch bảo vệ và cực tính theo thiết bị.", price:99000, oldPrice:129000, emoji:"⚡", tag:"", code:"BAT-003"},
    {name:"Đầu nối & linh kiện điện", desc:"Phụ kiện điện tử đa dạng; gửi hình hoặc mã linh kiện để xác nhận.", price:15000, oldPrice:25000, emoji:"🔧", tag:"", code:"ELE-001"}
  ]
};

const formatVND = value => new Intl.NumberFormat("vi-VN").format(value) + "đ";
function zaloLink(product) {
  const message = `Xin chào MYPP MYKISD Shop, tôi muốn hỏi mua: ${product.name} (Mã ${product.code}). Vui lòng xác nhận giá và tình trạng hàng.`;
  return `https://zalo.me/${ZALO_NUMBER}?message=${encodeURIComponent(message)}`;
}
function productCard(product) {
  const tag = product.tag ? `<span class="visual-tag">${product.tag}</span>` : "";
  return `<article class="product-card">
    <div class="product-visual">${tag}<span class="emoji" aria-hidden="true">${product.emoji}</span></div>
    <div class="product-info">
      <h3>${product.name}</h3>
      <p class="product-desc">${product.desc}</p>
      <div class="price-line"><span class="sale-price">${formatVND(product.price)}</span><span class="old-price">${formatVND(product.oldPrice)}</span></div>
      <a class="buy-btn" href="${zaloLink(product)}" target="_blank" rel="noopener">HỎI MUA QUA ZALO ↗</a>
    </div>
  </article>`;
}
document.getElementById("toyProducts").innerHTML = products.toys.map(productCard).join("");
document.getElementById("batteryProducts").innerHTML = products.batteries.map(productCard).join("");
document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
