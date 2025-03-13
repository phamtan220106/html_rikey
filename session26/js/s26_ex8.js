function isValidNumber(value) {
    return !isNaN(value) && Number.isInteger(Number(value));
}

function isPrime(n) {
    if (n < 2) return false; 
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

let inputArr = [];
let size = Number(prompt("Nhập số phần tử (10-20):"));

if (!isValidNumber(size) || size < 10 || size > 20) {
    console.log("Dữ liệu không hợp lệ");
} else {
    for (let i = 0; i < size; i++) {
        let num = prompt(`Nhập phần tử thứ ${i + 1}:`);
        if (!isValidNumber(num)) {
            console.log("Dữ liệu không hợp lệ");
            inputArr = []; // Xóa mảng nếu có dữ liệu sai
            break;
        }
        inputArr.push(Number(num));
    }

    if (inputArr.length === 0) {
        console.log("Mảng không có dữ liệu");
    } else {
        let primeOddArr = inputArr.filter(num => isPrime(num) && num % 2 !== 0);

        console.log("Mảng ban đầu:", inputArr);
        console.log("Số nguyên tố lẻ trong mảng:", primeOddArr.length > 0 ? primeOddArr : "Mảng không có dữ liệu");
    }
}
