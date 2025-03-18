let lisphone=[];
let letcart=[];



function main() {
    let t = true;
    while (t) {
        let options = Number(prompt(`1: Hiển thị các sản phẩm theo tên danh mục.
2: shopping
3: Sắp xếp các sản phẩm trong cửa hàng theo giá.
4: Tính số tiền thanh toán trong giỏ hàng.
5: Nhập hàng.
6: Thoát.`));
        switch (options) {
            case 1:
                let h = viewMenu(products);
                alert(h);
                break;
            case 2:
                shoppingcart(products);
                break;
            case 3:
                soft(products);
                break;
            case 4:
                abate(shopping_cart);
                break;
            case 5:
                addmember(products);
                break;
            case 6:
                t = false;
                break;
            default:
                alert("Không hợp lệ");
        }
    }
}

main();