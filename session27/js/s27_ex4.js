let A = [];

function nhapDanhSach() {
    let N = +prompt("Nhập số phần tử của mảng: ");
    A = [];
    for (let i = 0; i < N; i++) {
        A[i] = +prompt(`A[${i}]: `);
    }
}

function tinhTrungBinh() {
    if (A.length === 0) {
        alert("Danh sách rỗng!");
        return;
    }
    let sum = A.reduce((acc, val) => acc + val, 0);
    alert("Trung bình các số: " + (sum / A.length).toFixed(2));
}

function timSoChanLonNhat() {
    let maxChan = Math.max(...A.filter(x => x % 2 === 0), -Infinity);
    alert(maxChan === -Infinity ? "Không có số chẵn!" : "Số chẵn lớn nhất: " + maxChan);
}

function timSoLeNhoNhat() {
    let minLe = Math.min(...A.filter(x => x % 2 !== 0), Infinity);
    alert(minLe === Infinity ? "Không có số lẻ!" : "Số lẻ nhỏ nhất: " + minLe);
}

function menu() {
    let chon;
    do {
        chon = +prompt(
            "1. Nhập danh sách số nguyên\n" +
            "2. Tính trung bình các số\n" +
            "3. Tìm số chẵn lớn nhất\n" +
            "4. Tìm số lẻ nhỏ nhất\n" +
            "5. Thoát\n" +
            "Nhập lựa chọn:"
        );
        switch (chon) {
            case 1:
                nhapDanhSach();
                break;
            case 2:
                tinhTrungBinh();
                break;
            case 3:
                timSoChanLonNhat();
                break;
            case 4:
                timSoLeNhoNhat();
                break;
            case 5:
                alert("Thoát chương trình!");
                break;
            default:
                alert("Lựa chọn không hợp lệ!");
        }
    } while (chon !== 5);
}

menu();
