let A = [], n, value, index;
let t = true;

while (t) {
    let options = Number(prompt(`MENU\n1. Nhập mảng\n2. Xem mảng\n3. Thêm\n4. Sửa\n5. Xóa\n6. Thoát\n\nChọn:`));
    switch (options) {
        case 1:
            inputArr();
            break;
        case 2:
            outputArr();
            break;
        case 3:
            Adelement();
            break;
        case 4:
            udate();
            break;
        case 5:
            delteal();
            break;
        case 6:
            t = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }
}

function Adelement() {
    index = Number(prompt("vị trí muốn thêm"));
    value = Number(prompt("giá trị"));
    for (let i = n + 1; i > index; i--) {
        A[i] = A[i - 1];
    }
    A[index] = value;
    n++;
}


function delteal() {
    index = Number(prompt("vị trí muốn xóa"));
    for (let i = index; i < n - 1; i++) {
        A[i] = A[i + 1];
    }
    n--;
}
function udate() {
    index = Number(prompt("vị trí muốn sửa"));
    value = Number(prompt("giá trị"));
    A[index] = value;
}

function inputArr() {
    n = parseInt(prompt("Nhập số phần tử:"));
    A = [];
    for (let i = 0; i < n; i++) {
        A[i] = prompt(`A[${i}]`);
    }
}
function outputArr() {
    let h = "";
    for (let i = 0; i < n; i++) {
        h += (i === 0 ? "" : "; ") + A[i];
    }
    alert("Mảng: " + h);
}