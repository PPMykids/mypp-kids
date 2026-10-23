console.log("Đã tải sản phẩm:", allProducts);
  } catch (error) {
    console.error("Lỗi tải sản phẩm:", error);

    if (toyContainer) {
      toyContainer.innerHTML =
        "<p>Chưa tải được sản phẩm. Vui lòng tải lại trang sau ít phút.</p>";
    }

    if (batteryContainer) {
      batteryContainer.innerHTML =
        "<p>Chưa tải được sản phẩm. Vui lòng tải lại trang sau ít phút.</p>";
    }
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

loadProducts();
