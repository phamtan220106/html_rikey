// Hàm kiểm tra số nguyên hợp lệ
function isValidNumber(value) {
    return !isNaN(value) && Number.isInteger(Number(value));
}

// Nhập mảng từ người dùng
let inputArr = [];
let size = Number(prompt("Nhập số phần tử (10-20):"));

// Kiểm tra số phần tử hợp lệ
if (!isValidNumber(size) || size < 10 || size > 20) {
    console.log("Dữ liệu không hợp lệ");
} else {
    // Nhập phần tử cho mảng
    for (let i = 0; i < size; i++) {
        let num = prompt(`Nhập phần tử thứ ${i + 1}:`);
        if (!isValidNumber(num)) {
            console.log("Dữ liệu không hợp lệ");
            inputArr = []; // Xóa mảng nếu có dữ liệu sai
            break;
        }
        inputArr.push(Number(num));
    }

    // Kiểm tra nếu mảng không có dữ liệu
    if (inputArr.length === 0) {
        console.log("Mảng không có dữ liệu");
    } else {
        // Lọc số chẵn và số lẻ
        let evenNumbers = inputArr.filter(num => num % 2 === 0);
        let oddNumbers = inputArr.filter(num => num % 2 !== 0);

        // Tính tổng số chẵn và số lẻ bằng reduce
        let totalEven = evenNumbers.reduce((sum, num) => sum + num, 0);
        let totalOdd = oddNumbers.reduce((sum, num) => sum + num, 0);

        // Hiển thị kết quả
        console.log("Mảng ban đầu:", inputArr);
        console.log("totalEven =", totalEven);
        console.log("totalOdd =", totalOdd);
    }
}

