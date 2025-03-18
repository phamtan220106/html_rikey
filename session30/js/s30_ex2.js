let books = [];
let cart = [];

function book() {
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
            case 1: // Tự tạo ID
                return books.length === 0 ? 1 : books[books.length - 1].id + 1;
            case 2: // Nhập tên sách
                let name = prompt("Nhập tên sách:").trim();
                if (!name || name.length < 3 || name.length > 50) {
                    alert("Tên sách không hợp lệ!");
                    continue;
                }
                return name;
            case 3: // Giá sách
                let price = Number(prompt("Nhập giá sách:"));
                if (isNaN(price) || price <= 0) {
                    alert("Giá sách không hợp lệ!");
                    continue;
                }
                return price;
            case 4: // Số lượng sách
                let quantity = Number(prompt("Nhập số lượng sách:"));
                if (isNaN(quantity) || quantity < 1) {
                    alert("Số lượng không hợp lệ!");
                    continue;
                }
                return quantity;
            case 5: // Loại sách
                while (true) {
                    let t = Number(prompt("Chọn thể loại:\n1. Khoa học\n2. Văn học\n3. Lịch sử"));
                    if (t === 1) return "Khoa học";
                    if (t === 2) return "Văn học";
                    if (t === 3) return "Lịch sử";
                    alert("Thể loại không hợp lệ!");
                }
            case 6: // Nhập số lượng để mua
                let n = Number(prompt("Nhập số lượng: "));
                if (isNaN(n) || n < 1) {
                    alert("Số lượng không hợp lệ!");
                    continue;
                }
                return n;
            case 7: // Kiểm tra ID có tồn tại không
                let id = Number(prompt("Nhập ID sách:"));
                if (books.some(book => book.id === id)) return id;
                alert("ID không tồn tại!");
                break;
            default:
                alert("Lựa chọn không hợp lệ!");
        }
    }
}

function addBook() {
    let n = validate(6);
    for (let i = 0; i < n; i++) {
        books.push(book());
    }
    alert(`Đã thêm ${n} sách vào kho.`);
}

function viewBooksByCategory() {
    let category = validate(5);
    let filteredBooks = books.filter(b => b.category === category);
    if (filteredBooks.length === 0) {
        alert(`Không có sách nào trong thể loại "${category}".`);
        return;
    }
    let output = ` Danh sách sách trong thể loại "${category}":\n`;
    filteredBooks.forEach(b => {
        output += `${b.id} - ${b.name} - Giá: ${b.price} - Số lượng: ${b.quantity}\n`;
    });
    alert(output);
}

function searchBook() {
    let keyword = prompt("Nhập tên sách hoặc ID:").trim().toLowerCase();
    let foundBooks = books.filter(b => b.name.toLowerCase().includes(keyword) || String(b.id) === keyword);
    if (foundBooks.length === 0) {
        alert("Không tìm thấy sách.");
        return;
    }
    let output = " Kết quả tìm kiếm:\n";
    foundBooks.forEach(b => {
        output += `${b.id} - ${b.name} - Giá: ${b.price} - Số lượng: ${b.quantity}\n`;
    });
    alert(output);
}

function buyBook() {
    let id = validate(7);
    let bookIndex = books.findIndex(b => b.id === id);
    let amount = validate(6);

    if (books[bookIndex].quantity < amount) {
        alert("Số lượng sách trong kho không đủ!");
        return;
    }

    let cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity += amount;
    } else {
        cart.push({ ...books[bookIndex], quantity: amount });
    }

    books[bookIndex].quantity -= amount;
    alert("Đã thêm sách vào giỏ hàng.");
}

function sortBooks() {
    while (true) {
        let type = Number(prompt("Sắp xếp sách theo giá:\n1. Tăng dần\n2. Giảm dần"));
        if (type === 1) {
            books.sort((a, b) => a.price - b.price);
            alert("Đã sắp xếp giá tăng dần.");
            break;
        } else if (type === 2) {
            books.sort((a, b) => b.price - a.price);
            alert("Đã sắp xếp giá giảm dần.");
            break;
        } else {
            alert("Lựa chọn không hợp lệ!");
        }
    }
}

function totalCartValue() {
    let totalBooks = 0;
    let totalPrice = 0;
    cart.forEach(b => {
        totalBooks += b.quantity;
        totalPrice += b.price * b.quantity;
    });
    alert(`Tổng số sách đã mua: ${totalBooks}\n Tổng tiền: ${totalPrice}`);
}

function totalBooksInStock() {
    let total = books.reduce((sum, b) => sum + b.quantity, 0);
    alert(`Tổng số sách trong kho: ${total}`);
}

function main() {
    while (true) {
        let choice = Number(prompt(
            "Chọn chức năng:\n" +
            "1. Hiển thị danh sách sách theo thể loại\n" +
            "2. Thêm sách mới vào kho\n" +
            "3. Tìm kiếm sách theo tên hoặc ID\n" +
            "4. Mua sách\n" +
            "5. Sắp xếp sách theo giá\n" +
            "6. Tính tổng tiền giỏ hàng\n" +
            "7. Hiển thị tổng số sách trong kho\n" +
            "8. Thoát"
        ));
        switch (choice) {
            case 1:
                viewBooksByCategory();
                break;
            case 2:
                addBook();
                break;
            case 3:
                searchBook();
                break;
            case 4:
                buyBook();
                break;
            case 5:
                sortBooks();
                break;
            case 6:
                totalCartValue();
                break;
            case 7:
                totalBooksInStock();
                break;
            case 8:
                return;
            default:
                alert("Lựa chọn không hợp lệ!");
        }
    }
}
main();
