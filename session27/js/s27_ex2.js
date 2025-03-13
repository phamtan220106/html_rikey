let t = true;
let listStudent = [];

while (t) {
    let options = Number(prompt(`   1: Nhập danh sách sinh viên
        2: Hiển thị danh sách sinh viên
        3: Tìm sinh viên
        4: Xóa sinh viên
        5: Thoát.`));
    switch (options) {
        case 1:
            addStudent(listStudent);
            break;
        case 2:
            let h=viewstd(listStudent);
            console.log(h);
            break;
        case 3:
            search(listStudent);
            break;
        case 4:
            deletestd(listStudent);
            break;
        case 5:
            t = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ.");
            break;
    }
}

function checkIstheNumber() {
    let x;
    do {
        x = prompt("Nhập số lượng sinh viên:");
        if (!isNaN(x) && x.trim() !== "") {
            return Number(x);
        }
        alert("Vui lòng nhập số hợp lệ.");
    } while (true);
}

function checkname() {
    let x;
    do {
        x = prompt("Nhập tên sinh viên:");
        if (isNaN(x) && x.trim() !== "") {
            return x.trim();
        }
        alert("Tên không hợp lệ. Vui lòng nhập lại.");
    } while (true);
}

function addStudent(A) {
    let numberOfStudent = checkIstheNumber();
    for (let i = 0; i < numberOfStudent; i++) {
        let nameStudent = checkname();
        A.push(nameStudent);
    }
    alert("Danh sách sinh viên đã được cập nhật.");
}

function viewstd(A) {
    if (A.length === 0) {
        alert("Danh sách sinh viên trống.");
        return;
    }
    let h = A.map((value, index) => `${index + 1}: ${value}`).join("\n");
    return h;
}

function search(A) {
    let name = checkname();
    let index = A.indexOf(name);
    if (index !== -1) {
        alert(`Sinh viên "${name}" có trong danh sách tại vị trí ${index + 1}.`);
    } else {
        alert("Không có sinh viên trong danh sách.");
    }
}

function deletestd(A) {
    let name = checkname();
    let index = A.indexOf(name);
    if (index !== -1) {
        A.splice(index, 1);
        alert(`Đã xóa sinh viên "${name}".`);
    } else {
        alert("Sinh viên không tồn tại.");
    }
}
