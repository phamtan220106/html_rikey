let Products = [];

function createProduct() {
    return {
        id: generateId(),
        name: validate(1),
        price: validate(2),
        category: validate(3),
        quantity: validate(4)
    };
}

function generateId() {
    return Products.length === 0 ? 1 : Products[Products.length - 1].id + 1;
}

function validate(type) {
    while (true) {
        switch (type) {
            case 1: // Name
                let name = prompt("Nhập tên sản phẩm:");
                if (!name || name.length < 3 || name.length > 50) {
                    alert("Tên sản phẩm không hợp lệ");
                    continue;
                }
                return name;
            case 2: // Price
                let price = Number(prompt("Nhập giá sản phẩm:"));
                if (isNaN(price) || price <= 0) {
                    alert("Giá sản phẩm không hợp lệ");
                    continue;
                }
                return price;
            case 3: // Category
                let category = prompt("Nhập danh mục sản phẩm:");
                if (!category || category.length < 3) {
                    alert("Danh mục sản phẩm không hợp lệ");
                    continue;
                }
                return category;
            case 4: // Quantity
                let quantity = Number(prompt("Nhập số lượng sản phẩm trong kho:"));
                if (isNaN(quantity) || quantity < 0) {
                    alert("Số lượng không hợp lệ");
                    continue;
                }
                return quantity;
        }
    }
}

function addProduct() {
    let n = Number(prompt("Nhập số lượng sản phẩm muốn thêm:"));
    if (isNaN(n) || n <= 0) {
        alert("Số lượng không hợp lệ");
        return;
    }
    for (let i = 0; i < n; i++) {
        Products.push(createProduct());
    }
    alert(`Đã thêm ${n} sản phẩm.`);
}

function viewProducts() {
    if (Products.length === 0) {
        alert("Danh sách sản phẩm trống.");
        return;
    }
    let output = "";
    for (let product of Products) {
        output += `ID: ${product.id} | Name: ${product.name} | Price: ${product.price} | Category: ${product.category} | Quantity: ${product.quantity}\n`;
    }
    alert(output);
}

function searchProduct() {
    let name = prompt("Nhập tên sản phẩm cần tìm:");
    let result = Products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
    if (result.length > 0) {
        let output = "";
        for (let product of result) {
            output += `ID: ${product.id} | Name: ${product.name} | Price: ${product.price} | Category: ${product.category} | Quantity: ${product.quantity}\n`;
        }
        alert(output);
    } else {
        alert("Không tìm thấy sản phẩm.");
    }
}

function updateProduct() {
    let id = Number(prompt("Nhập ID sản phẩm cần cập nhật:"));
    let index = Products.findIndex(p => p.id === id);
    if (index === -1) {
        alert("Không tìm thấy sản phẩm");
        return;
    }
    while (true) {
        let choice = Number(prompt("Chọn thông tin cần sửa:\n1. Tên\n2. Giá\n3. Danh mục\n4. Số lượng\n0. Thoát"));
        switch (choice) {
            case 1:
                Products[index].name = validate(1);
                break;
            case 2:
                Products[index].price = validate(2);
                break;
            case 3:
                Products[index].category = validate(3);
                break;
            case 4:
                Products[index].quantity = validate(4);
                break;
            case 0:
                return;
            default:
                alert("Lựa chọn không hợp lệ");
        }
    }
}

function deleteProduct() {
    let id = Number(prompt("Nhập ID sản phẩm cần xóa:"));
    let index = Products.findIndex(p => p.id === id);
    if (index === -1) {
        alert("Không tìm thấy sản phẩm");
        return;
    }
    Products.splice(index, 1);
    alert("Đã xóa sản phẩm.");
}

function menu() {
    return Number(prompt(`Chọn chức năng:
1. Thêm sản phẩm
2. Hiển thị danh sách sản phẩm
3. Tìm kiếm sản phẩm
4. Cập nhật sản phẩm
5. Xóa sản phẩm
6. Thoát`));
}

function main() {
    while (true) {
        let choice = menu();
        switch (choice) {
            case 1:
                addProduct();
                break;
            case 2:
                viewProducts();
                break;
            case 3:
                searchProduct();
                break;
            case 4:
                updateProduct();
                break;
            case 5:
                deleteProduct();
                break;
            case 6:
                alert("Thoát chương trình.");
                return;
            default:
                alert("Lựa chọn không hợp lệ.");
        }
    }
}

main();
