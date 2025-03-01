let diemToan = parseFloat(prompt("Nhập điểm Toán:"));
let diemVan = parseFloat(prompt("Nhập điểm Văn:"));
let diemAnh = parseFloat(prompt("Nhập điểm Anh:"));

let diemTrungBinh = (diemToan + diemVan + diemAnh) / 3;
let xepLoai;

if (diemTrungBinh >= 8.0) {
    xepLoai = "Giỏi";
} else if (diemTrungBinh >= 6.5) {
    xepLoai = "Khá";
} else if (diemTrungBinh >= 5.0) {
    xepLoai = "Trung bình";
} else {
    xepLoai = "Yếu";
}

alert("Điểm trung bình: " + diemTrungBinh.toFixed(2) + "\nXếp loại: " + xepLoai);
