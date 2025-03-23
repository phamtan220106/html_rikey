document.addEventListener("DOMContentLoaded", function () {
    let listproduct = [];

    // Lấy toàn bộ nút thêm vào giỏ hàng
    let buttons = document.querySelectorAll(".add-to-cart-btn");

    // Gán sự kiện click cho từng nút
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const productid = button.getAttribute("data-id"); // Lấy ID
            let productinfo = getProductInfo(productid); // Lấy thông tin sản phẩm

            if (!productinfo) return; // Nếu không tìm thấy sản phẩm, thoát

            // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
            let exists = listproduct.find(a => a.id === productid);
            if (!exists) {
                productinfo.quantity = 1; // Nếu chưa có, thêm mới với số lượng = 1
                listproduct.push(productinfo);
            } else {
                exists.quantity++; // Nếu có, tăng số lượng
            }

            // Cập nhật giao diện giỏ hàng
            viewcart();
        });
    });

    function viewcart() {
        let cartContainer = document.querySelector("#cart-items");
        let carttotal = document.querySelector(".cart-total");
        cartContainer.innerHTML = ""; // Xóa nội dung cũ trước khi cập nhật

        if (listproduct.length === 0) {
            carttotal.textContent = `0đ`;
            cartContainer.innerHTML = `<div class="empty-cart">Giỏ hàng trống</div>`;
            return;
        }

        listproduct = listproduct.filter(a => a.quantity > 0);
        
        let total = 0;
        carttotal = document.querySelector(".cart-total");
        listproduct.forEach(A => {
            let priceNumber = parseInt(A.price.replace(/\./g, "").replace(/₫/g, ""));
            total += priceNumber * parseInt(A.quantity);
            let in_cart = document.createElement("div");
            in_cart.classList.add("in-cart");

            in_cart.innerHTML = `
            <div class="amount">
                <p>${A.name}</p>
                <p class="amount-price">${A.price}<span><sup><u>đ</u></sup></span></p>
            </div>
            <div class="add-delete">
                <button class="giam">-</button>
                <p>${A.quantity}</p>
                <button class="buff">+</button>
                <button class="clear">X</button>
            </div>
        `;
            carttotal.textContent = `${total.toLocaleString("vi-VN")}đ`;
            cartContainer.appendChild(in_cart); // Thêm vào giao diện
            in_cart.querySelector(".giam").addEventListener("click", () => {
                if (A.quantity > 1) {
                    A.quantity--;
                } else {
                    listproduct = listproduct.filter(item => item.id !== A.id); // Xóa sản phẩm khỏi giỏ nếu về 0
                }
                viewcart(); // Cập nhật lại giao diện
            });

            in_cart.querySelector(".buff").addEventListener("click", () => {
                A.quantity++;
                viewcart(); // Cập nhật lại giao diện
            });

            in_cart.querySelector(".clear").addEventListener("click", () => {
                listproduct = listproduct.filter(item => item.id !== A.id); // Xóa sản phẩm khỏi giỏ
                viewcart(); // Cập nhật lại giao diện
            });

            document.querySelector("#checkout-btn").addEventListener("click", () => {
                if (listproduct.length === 0) {
                    alert("Giỏ hàng của bạn đang trống!");
                    return;
                }
            
                let confirmPayment = confirm(` xác nhận thanh toán ${total.toLocaleString("vi-VN")}vnd`);
                if (confirmPayment) {
                    alert("Thanh toán thành công! Cảm ơn bạn đã mua hàng.");
                    listproduct = [];
                    viewcart();
                }
            });
            
        });

    }

    function getProductInfo(productId) {
        let productElement = document.querySelector(`.add-to-cart-btn[data-id="${productId}"]`).closest(".product-card");
        if (productElement) {
            return {
                id: productId,
                name: productElement.querySelector(".product-title").innerText,
                price: productElement.querySelector(".product-price").innerText
            };
        }
        return null;
    }
});




