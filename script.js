// DỮ LIỆU MẪU: thay tên, mô tả, giá và biểu tượng bằng thông tin sản phẩm thực tế.
const ZALO_NUMBER = "0964349029";
const products = {
  toys: [
    {name:"Bộ xếp hình sáng tạo 3D", desc:"Đồ chơi lắp ghép giúp bé rèn luyện sự khéo léo và tư duy.", price:129000, oldPrice:199000, emoji:"🧩", tag:"BÁN CHẠY", code:"TOY-001"},
    {name:"Bộ lắp ráp kỹ sư nhí", desc:"Nhiều chi tiết lắp ghép, phù hợp cho hoạt động học qua chơi.", price:159000, oldPrice:219000, emoji:"🛠️", tag:"ƯU ĐÃI", code:"TOY-002"},
    {name:"Trò chơi ghi nhớ hình ảnh", desc:"Trò chơi tương tác giúp bé luyện trí nhớ và khả năng quan sát.", price:89000, oldPrice:119000, emoji:"🎯", tag:"", code:"TOY-003"},
    {name:"Bảng bận rộn Montessori", desc:"Đồ chơi thực hành kỹ năng cơ bản; kiểm tra độ tuổi khuyến nghị trước khi mua.", price:189000, oldPrice:249000, emoji:"🧸", tag:"GỢI Ý", code:"TOY-004"}
  ],
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
