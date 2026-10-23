// DỮ LIỆU MẪU: thay tên, mô tả, giá và biểu tượng bằng thông tin sản phẩm thực tế.
const ZALO_NUMBER = "0964349029";
const products = {
  toys: [
    {
      name: "Bộ Xếp Hình Nam Châm MYkids 64-100 Chi Tiết",
      desc: `Đồ chơi xếp hình nam châm bằng nhựa ABS.
Thông tin sản phẩm:
👉 Tên sản phẩm: Đồ chơi xếp hình nam châm thông minh
👉 Chất liệu: Nhựa ABS, nam châm từ tính
👉 Chủng loại: 64PCS và 100PCS
👉 Độ tuổi phù hợp: Trên 2 tuổi

Công dụng:
👉 Kích thích tư duy hình học và khả năng sáng tạo.
👉 Giúp bé rèn luyện sự khéo léo qua việc lắp ghép mô hình.
👉 Hỗ trợ học đếm, nhận biết hình khối và màu sắc.
👉 Nhiều màu sắc, nhiều kích thước chi tiết.

Thuộc tính:
• Màu sắc: Nhiều màu
• Trọng lượng tham khảo: 900g
• Chất liệu: Nhựa ABS
• Hướng dẫn: Lắp ghép các chi tiết theo hướng dẫn của nhà sản xuất.`,
      price: 210000,
      oldPrice: 310000,
      emoji: "🧲",
tag: "SẢN PHẨM MỚI",
images: [
  "TOY005-1.jpg",
  "TOY005-2.jpg",
  "TOY005-3.jpg"
  "TOY005-4.jpg"
  "TOY005-5.jpg"
  "TOY005-6.jpg"
  "TOY005-7.jpg"
  "TOY005-8.jpg"
],
code: "TOY005"

  batteries: [
    {
      name: "Pin sạc 18650",
      desc: "Vui lòng xác nhận dung lượng, dòng xả và kích thước theo nhu cầu.",
      price: 35000,
      oldPrice: 49000,
      emoji: "🔋",
      tag: "PHỔ BIẾN",
      code: "BAT-001"
    },
    {
      name: "Pin LiPo 3.7V",
      desc: "Cần đối chiếu kích thước, dung lượng, dây và đầu nối trước khi mua.",
      price: 45000,
      oldPrice: 59000,
      emoji: "🔌",
      tag: "",
      code: "BAT-002"
    },
    {
      name: "Pin bộ 2S 7.4V",
      desc: "Chọn đúng dung lượng, mạch bảo vệ và cực tính theo thiết bị.",
      price: 99000,
      oldPrice: 129000,
      emoji: "⚡",
      tag: "",
      code: "BAT-003"
    },
    {
      name: "Đầu nối & linh kiện điện",
      desc: "Phụ kiện điện tử đa dạng; gửi hình hoặc mã linh kiện để xác nhận.",
      price: 15000,
      oldPrice: 25000,
      emoji: "🔧",
      tag: "",
      code: "ELE-001"
    }
  ]
};

const formatVND = value => new Intl.NumberFormat("vi-VN").format(value) + "đ";
function zaloLink(product) {
  const message = `Xin chào MYPP MYKISD Shop, tôi muốn hỏi mua: ${product.name} (Mã ${product.code}). Vui lòng xác nhận giá và tình trạng hàng.`;
  return `https://zalo.me/${ZALO_NUMBER}?message=${encodeURIComponent(message)}`;
}
function productCard(product) {
  const tag = product.tag ? `<span class="visual-tag">${product.tag}</span>` : "";
const imageHtml = product.images && product.images.length
  ? `<img class="product-image" src="${product.images[0]}" alt="${product.name}" loading="lazy">`
  : `<span class="emoji" aria-hidden="true">${product.emoji}</span>`;

return `<article class="product-card">
  <div class="product-visual">${tag}${imageHtml}</div>
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
