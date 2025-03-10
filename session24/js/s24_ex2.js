let arr = [];
let choice;

do {
choice = prompt(`Menu chọn chức năng:\n\n1. Nhập mảng số nguyên\n2. Hiển thị mảng\n3. Tìm các phần tử chẵn và lẻ\n4. Tính tổng bình phương các phần tử\n5. Xóa phần tử tại vị trí chỉ định\n6. Tìm phần tử lớn thứ hai trong mảng\n7. Thoát chương trình`);

switch (choice) {
    case "1":
        let input = prompt("Nhập các số nguyên, cách nhau bởi dấu phẩy (,)");
        arr = input.split(",").map(Number);
        break;

    case "2":
        alert(`Mảng hiện tại là: [${arr}]`);
        break;

    case "3":
        let chan = [], le = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) chan.push(arr[i]);
            else le.push(arr[i]);
        }
        alert(`Các số chẵn: [${chan}]\nCác số lẻ: [${le}]`);
        break;

    case "4":
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i] * arr[i];
        }
        alert(`Tổng bình phương các phần tử là: ${sum}`);
        break;

    case "5":
        let delIndex = Number(prompt("Nhập vị trí cần xóa:"));
        if (delIndex >= 0 && delIndex < arr.length) {
            arr.splice(delIndex, 1);
            alert(`Mảng sau khi xóa: [${arr}]`);
        } else {
            alert("Vị trí không hợp lệ.");
        }
        break;

    case "6":
        if (arr.length < 2) {
            alert("Không đủ phần tử để tìm giá trị lớn thứ hai.");
        } else {
            let sortedArr = [...new Set(arr)].sort((a, b) => b - a);
            let secondMax = sortedArr[1];
            alert(`Giá trị lớn thứ hai là: ${secondMax}`);
        }
        break;

    case "7":
        alert("Thoát chương trình.");
        break;

    default:
        alert("Lựa chọn không hợp lệ, vui lòng chọn lại.");
        break;
}

} while (choice !== "7");