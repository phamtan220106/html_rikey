let products = [];
let shopping_cart = [];

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

function member() {
    return {
        id: validate(1),
        name: validate(2),
        price: validate(3),
        quantity: validate(4),
        category: validate(5)
    };
}

function validate(type) {
    while (true) {
        switch (type) {
            case 1:
                return products.length === 0 ? 1 : products[products.length - 1].id + 1;
            case 2:
                let name = prompt("Nhập tên món ăn").trim();
                if (!name || name.length < 3 || name.length > 20) {
                    alert("Tên không hợp lệ");
                    continue;
                }
                return name;
            case 3:
                let price = Number(prompt("Giá sản phẩm:"));
                if (isNaN(price) || price < 0) {
                    alert("Giá không hợp lệ");
                    continue;
                }
                return price;
            case 4:
                let quantity = Number(prompt("Số lượng sản phẩm:"));
                if (isNaN(quantity) || quantity <= 0) {
                    alert("Số lượng không hợp lệ");
                    continue;
                }
                return quantity;
            case 5:
                while (true) {
                    let t = Number(prompt(`Phân loại:\n1: Kinh\n2: Mông`));
                    if (t === 1) return "Món ăn dân tộc Kinh";
                    if (t === 2) return "Món ăn dân tộc Mông";
                    alert("Loại không hợp lệ");
                }
            case 6:
                let n = Number(prompt("Số lượng: "));
                if (isNaN(n) || n < 0) {
                    alert("Số lượng không hợp lệ");
                    continue;
                }
                return n;
            case 7:
                let newid = Number(prompt("Nhập ID: "));
                if (checksp(newid, products)) return newid;
                alert("ID không tồn tại");
                break;
            default:
                alert("Không hợp lệ");
        }
    }
}

function addmember(A) {
    let n = validate(6);
    for (let i = 0; i < n; i++) {
        A.push(member());
    }
    alert(`Đã thêm ${n} sản phẩm`);
}

function viewMenu(A) {
    let king = A.filter(A => A.category === "Món ăn dân tộc Kinh");
    let Mong = A.filter(A => A.category === "Món ăn dân tộc Mông");
    let result = "Món ăn dân tộc Kinh\n";

    king.forEach(A => {
        result += `${A.id} - Tên: ${A.name} - Giá: ${A.price} - Số lượng: ${A.quantity}\n`;
    });

    result += "\nMón ăn dân tộc Mông\n";
    Mong.forEach(A => {
        result += `${A.id} - Tên: ${A.name} - Giá: ${A.price} - Số lượng: ${A.quantity}\n`;
    });

    return result;
}

function checksp(id, A) {
    return A.some(A => A.id === id);
}

function checkamount(A, n, index) {
    return A[index].quantity >= n;
}

function shoppingcart(A) {
    let v = true;
    while (v) {
        let g = viewMenu(A) + "\n1: MUA HÀNG\n2: THOÁT\n";
        let choice = Number(prompt(g));
        switch (choice) {
            case 1:
                let id = validate(7);
                let index = A.findIndex(A => A.id === id);
                if (A[index].quantity === 0) {
                    alert("Sản phẩm đã hết hàng.");
                    continue;
                }
                let amount = validate(6);
                if (checkamount(A, amount, index)) {
                    if (checksp(id, shopping_cart)) {
                        let cartItem = shopping_cart.find(item => item.id === id);
                        cartItem.quantity += amount;
                    } else {
                        shopping_cart.push({ ...A[index], quantity: amount });
                    }
                    A[index].quantity -= amount;
                    alert("Đã thêm vào giỏ hàng.");
                } else {
                    alert("Số lượng sản phẩm không đủ");
                }
                break;
            case 2:
                v = false;
                break;
            default:
                alert("Không hợp lệ");
        }
    }
}

function soft(A) {
    while (true) {
        let type = Number(prompt("1: Tăng dần\n2: Giảm dần"));
        if (type === 1) {
            A.sort((a, b) => a.price - b.price);
            break;
        } else if (type === 2) {
            A.sort((a, b) => b.price - a.price);
            break;
        } else {
            alert("Không hợp lệ");
        }
    }
}

function abate(A) {
    let h = viewMenu(A);
    let sum = 0;
    A.forEach(a => {
        sum += a.price * a.quantity;
    });
    alert(`Danh sách sản phẩm:\n${h}\nThành tiền : ${sum}`);
}

