// Hàm kiểm tra số nguyên hợp lệ
function isValidNumber(value) {
    return !isNaN(value) && Number.isInteger(Number(value));
}

// Nhập vào mảng 10 phần tử
let inputArr = [];
for (let i = 0; i < 10; i++) {
    let num = prompt(`Nhập phần tử thứ ${i + 1}:`);
    if (!isValidNumber(num)) {
        console.log("Dữ liệu không hợp lệ");
        inputArr = []; // Xóa mảng nếu có dữ liệu sai
        break;
    }
    inputArr.push(Number(num));
}

// Kiểm tra nếu mảng rỗng (có thể do nhập sai dữ liệu)
if (inputArr.length === 0) {
    console.log("Mảng không có dữ liệu");
} else {
    // Bình phương các phần tử trong mảng
    let squaredArr = inputArr.map(num => num * num);

    // Lọc ra các số chẵn
    let evenArr = squaredArr.filter(num => num % 2 === 0);

    // Xuất kết quả
    console.log("Mảng ban đầu:", inputArr);
    console.log("Mảng bình phương:", squaredArr);
    console.log("Mảng số chẵn sau khi bình phương:", evenArr);
}
