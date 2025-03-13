
function isValidNumber(value) {
    return !isNaN(value) && Number.isInteger(Number(value));
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
            inputArr = [];
            break;
        }
        inputArr.push(Number(num));
    }

    if (inputArr.length === 0) {
        console.log("Mảng không có dữ liệu");
    } else {
        let evenNumbers = inputArr.filter(num => num % 2 === 0);
        let oddNumbers = inputArr.filter(num => num % 2 !== 0);

        let totalEven = evenNumbers.reduce((sum, num) => sum + num, 0);
        let totalOdd = oddNumbers.reduce((sum, num) => sum + num, 0);

        console.log("Mảng ban đầu:", inputArr);
        console.log("totalEven =", totalEven);
        console.log("totalOdd =", totalOdd);
    }
}

