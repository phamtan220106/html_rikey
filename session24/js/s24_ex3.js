let arr = [];
let choice;

do {
    choice = prompt(
        `Menu chọn chức năng:\n\n1. Nhập mảng số nguyên\n2. Hiển thị mảng\n3. Tìm phần tử lớn nhất trong mảng và vị trí của nó\n4. Tính tổng các phần tử là số nguyên tố trong mảng\n5. Đảo ngược mảng\n6. Kiểm tra mảng có được sắp xếp tăng dần không\n7. Thoát chương trình`
    );

    switch (choice) {
        case "1":
            let input = prompt("Nhập các số nguyên, cách nhau bởi dấu phẩy (,)");
            let inputArr = input.split(",");
            arr = [];
            for (let i = 0; i < inputArr.length; i++) {
                arr.push(Number(inputArr[i]));
            }
            break;

        case "2":
            alert(`Mảng hiện tại là: [${arr}]`);
            break;

        case "3":
            if (arr.length === 0) {
                alert("Mảng rỗng.");
            } else {
                let max = arr[0],
                    index = 0;
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max) {
                        max = arr[i];
                        index = i;
                    }
                }
                alert(`Giá trị lớn nhất: ${max} tại vị trí ${index}`);
            }
            break;

        case "4":
            function isPrime(num) {
                if (num < 2) return false;
                for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i === 0) return false;
                }
                return true;
            }
            let sumPrime = 0;
            for (let i = 0; i < arr.length; i++) {
                if (isPrime(arr[i])) sumPrime += arr[i];
            }
            alert(`Tổng các số nguyên tố trong mảng là: ${sumPrime}`);
            break;

        case "5":
            arr.reverse();
            alert(`Mảng sau khi đảo ngược: [${arr}]`);
            break;

        case "6":
            let flag = true;
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    flag = false;
                    break;
                }
            }
            alert(
                flag
                    ? "Mảng được sắp xếp tăng dần."
                    : "Mảng không được sắp xếp tăng dần."
            );
            break;

        case "7":
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại.");
            break;
    }
} while (choice !== "7");