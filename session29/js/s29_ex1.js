let Directory = [];

function contracts() {
    return {
        id: validate(4),
        name: validate(1),
        email: validate(2),
        phone: validate(3)
    };
}

function checkemail(email) {
    if (email.includes('@') && (email.endsWith('gmail.com') || email.endsWith('gmail.vn'))) {
        let a = Directory.findIndex(A => A.email === email);
        if (a === -1) {
            return true;
        }
    }
    return false;
}

function validate(type) {
    while (true) {
        switch (type) {
            case 1: // Name
                let name = prompt("Nhập tên liên hệ:");
                if (!name || name.length < 3 || name.length > 20) {
                    alert("Tên không hợp lệ");
                    continue;
                }
                return name;
            case 2: // Email
                let email = prompt("Email:");
                if (checkemail(email)) {
                    return email;
                } else {
                    alert("Email không hợp lệ");
                }
                break;
            case 3: // Phone
                let phone = prompt("Số điện thoại:");
                if (isNaN(phone) || phone.length != 10 || phone[0] != '0') {
                    alert("Số điện thoại không hợp lệ");
                    continue;
                }
                let exists = Directory.some(A => A.phone == phone);
                if (exists) {
                    alert("Số điện thoại đã tồn tại");
                    continue;
                }
                return phone;
            case 4: // ID
                return Directory.length == 0 ? 1 : Directory[Directory.length - 1].id + 1;
            case 5: // Số lượng liên hệ muốn thêm
                let n = Number(prompt("Nhập số liên hệ muốn thêm:"));
                if (isNaN(n) || n < 0) {
                    alert("Không hợp lệ");
                    continue;
                }
                return n;
        }
    }
}

function addtocontract(A) {
    let n = validate(5);
    for (let i = 0; i < n; i++) {
        A.push(contracts());
    }
    alert(`Đã thêm ${n} liên hệ vào danh bạ.`);
}

function viewdirectory(A) {
    let h = "";
    for (let i = 0; i < A.length; i++) {
        h += `${A[i].id}-----${A[i].name}-----${A[i].email}-----${A[i].phone} \n`;
    }
    alert(h || "Danh bạ trống.");
}

function search(A) {
    let phone = validate(3);
    let result = A.find(A => A.phone === phone);
    if (result) {
        alert(`Thông tin liên hệ:\nID: ${result.id}\nTên: ${result.name}\nEmail: ${result.email}\nSố điện thoại: ${result.phone}`);
    } else {
        alert("Không tìm thấy số điện thoại này.");
    }
}

function update(A) {
    let id = Number(prompt("Nhập ID muốn sửa"));
    let result = A.findIndex(contact => contact.id === id);

    if (result != -1) {
        while (true) {
            let t = Number(prompt(`Chọn thông tin cần sửa:
1: Sửa số điện thoại.
2: Sửa email.
3: Sửa tên.
0: Thoát.`));

            switch (t) {
                case 1:
                    A[result].phone = validate(3);
                    alert("Đã cập nhật số điện thoại!");
                    break;
                case 2:
                    A[result].email = validate(2);
                    alert("Đã cập nhật email!");
                    break;
                case 3:
                    A[result].name = validate(1);
                    alert("Đã cập nhật tên!");
                    break;
                case 0:
                    return;
                default:
                    alert("Lựa chọn không hợp lệ!");
            }
        }
    } else {
        alert("ID không tồn tại");
    }
}

function deltcontract(A) {
    let id = Number(prompt("Nhập ID muốn xóa:"));
    let index = A.findIndex(contact => contact.id === id);
    if (index != -1) {
        A.splice(index, 1);
        alert(`Đã xóa người dùng có ID: ${id}`);
    } else {
        alert("Không tồn tại ID này.");
    }
}

function option() {
    return Number(prompt(`1. Thêm đối tượng Contact vào danh sách liên hệ.
2. Hiển thị danh sách danh bạ.
3. Tìm kiếm thông tin Contact theo số điện thoại.
4. Cập nhật thông tin Contact(name, email, phone) theo id.
5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.
6. Thoát.`));
}

function main() {
    let t = true;
    while (t) {
        let choice = option();
        switch (choice) {
            case 1:
                addtocontract(Directory);
                break;
            case 2:
                viewdirectory(Directory);
                break;
            case 3:
                search(Directory);
                break;
            case 4:
                update(Directory);
                break;
            case 5:
                deltcontract(Directory);
                break;
            case 6:
                t = false;
                alert("Thoát chương trình!");
                break;
            default:
                alert("Lựa chọn không hợp lệ!");
        }
    }
}
main();
