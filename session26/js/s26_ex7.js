
function isValidNumber(value) {
    return !isNaN(value) && Number.isInteger(Number(value));
}


let inputArr = [];
for (let i = 0; i < 10; i++) {
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
    let squaredArr = inputArr.map(num => num * num);

    let evenArr = squaredArr.filter(num => num % 2 === 0);

    console.log("Mảng ban đầu:", inputArr);
    console.log("Mảng bình phương:", squaredArr);
    console.log("Mảng số chẵn sau khi bình phương:", evenArr);
}
