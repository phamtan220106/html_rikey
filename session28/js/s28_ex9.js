let listbook = [];

function inputBook() {
    return {
        id: listbook.length + 1,
        title: validate(1),
        author: validate(2),
        year: validate(3),
        price: validate(4),
        isAvailable: true,
    };
}

function validate(type) {
    while (true) {
        switch (type) {
            case 1: // Tên sách
                let name = prompt("Nhập tên sách: ").trim();
                if (!name || name.length < 3 || name.length > 20) {
                    alert("Không hợp lệ, vui lòng nhập lại.");
                    continue;
                }
                return name;
            case 2: // Tác giả
                let author = prompt("Nhập tên tác giả: ").trim();
                if (!author || author.length < 3 || author.length > 20) {
                    alert("Không hợp lệ, vui lòng nhập lại.");
                    continue;
                }
                return author;
            case 3: // Năm xuất bản
                let year = Number(prompt("Nhập năm xuất bản: "));
                if (isNaN(year) || year <= 0 || year > 2025) {
                    alert("Không hợp lệ, vui lòng nhập lại.");
                    continue;
                }
                return year;
            case 4: // Giá sách
                let price = Number(prompt("Nhập giá sách: "));
                if (isNaN(price) || price <= 0) {
                    alert("Không hợp lệ, vui lòng nhập lại.");
                    continue;
                }
                return price;
            default:
                alert("Lựa chọn không hợp lệ.");
                break;
        }
    }
}

function addBooks(A) {
    let n = Number(prompt("Nhập số sách muốn thêm: "));
    for (let i = 0; i < n; i++) {
        A.push(inputBook());
    }
    alert(`Đã thêm ${n} sách vào thư viện.`);
}

function viewBooks(A) {
    if (A.length === 0) {
        alert("Thư viện không có sách.");
        return;
    }
    let result = "Danh sách sách trong thư viện:\n";
    A.forEach(book => {
        let status = book.isAvailable ? "Còn sách" : "Đã mượn";
        result += `${book.id}. ${book.title} - ${book.author} - ${book.year} - ${book.price} VND - ${status}\n`;
    });
    alert(result);
}

function searchBook(A) {
    let name = validate(1);
    let foundBooks = A.filter(book => book.title.toLowerCase() === name.toLowerCase());
    if (foundBooks.length === 0) {
        alert("Không tìm thấy sách trong thư viện.");
    } else {
        let result = "Kết quả tìm kiếm:\n";
        foundBooks.forEach(book => {
            let status = book.isAvailable ? "Còn sách" : "Đã mượn";
            result += `${book.id}. ${book.title} - ${book.author} - ${book.year} - ${book.price} VND - ${status}\n`;
        });
        alert(result);
    }
}

function borrowOrReturnBook(A) {
    let option = Number(prompt("1: Mượn sách\n2: Trả sách"));
    let name = validate(1);
    let book = A.find(book => book.title.toLowerCase() === name.toLowerCase());
    if (!book) {
        alert("Sách không có trong thư viện.");
        return;
    }
    if (option === 1) {
        if (book.isAvailable) {
            book.isAvailable = false;
            alert("Bạn đã mượn sách thành công.");
        } else {
            alert("Sách đã được mượn.");
        }
    } else if (option === 2) {
        if (!book.isAvailable) {
            book.isAvailable = true;
            alert("Bạn đã trả sách thành công.");
        } else {
            alert("Sách chưa được mượn, không thể trả.");
        }
    } else {
        alert("Lựa chọn không hợp lệ.");
    }
}

function deleteBook(A) {
    let id = Number(prompt("Nhập ID sách cần xóa: "));
    let index = A.findIndex(book => book.id === id);
    if (index !== -1) {
        A.splice(index, 1);
        alert("Đã xóa sách khỏi thư viện.");
    } else {
        alert("Không tìm thấy sách với ID đã nhập.");
    }
}

function sortBooks(A) {
    A.sort((a, b) => a.price - b.price);
    alert("Đã sắp xếp sách theo giá tăng dần.");
}

function main() {
    let running = true;
    while (running) {
        let option = Number(prompt(`Chọn chức năng:\n1: Thêm sách mới\n2: Hiển thị danh sách sách\n3: Tìm kiếm sách theo tiêu đề\n4: Mượn/Trả sách\n5: Xóa sách theo ID\n6: Sắp xếp sách theo giá\n7: Thoát`));
        switch (option) {
            case 1:
                addBooks(listbook);
                break;
            case 2:
                viewBooks(listbook);
                break;
            case 3:
                searchBook(listbook);
                break;
            case 4:
                borrowOrReturnBook(listbook);
                break;
            case 5:
                deleteBook(listbook);
                break;
            case 6:
                sortBooks(listbook);
                break;
            case 7:
                running = false;
                break;
            default:
                alert("Lựa chọn không hợp lệ.");
                break;
        }
    }
}

main();