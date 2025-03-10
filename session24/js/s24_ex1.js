
let arr = [];
let choice;

do {
  choice = prompt(`Menu chọn chức năng:\n\n1. - Nhập mảng\n2.  - Hiển thị mảng\n3. Tìm phần tử lớn nhất và nhỏ nhất\n4.  - Tính tổng các phần tử trong mảng\n5.  - Tìm số lần xuất hiện của một phần tử\n6.  - Sắp xếp mảng tăng dần\n7.  - Xóa toàn bộ mảng\n8. Thoát chương trình`);

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
        let max = arr[0], min = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) max = arr[i];
          if (arr[i] < min) min = arr[i];
        }
        alert(`Giá trị lớn nhất: ${max}\nGiá trị nhỏ nhất: ${min}`);
      }
      break;

    case "4":
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      alert(`Tổng các phần tử trong mảng là: ${sum}`);
      break;

    case "5":
      let x = Number(prompt("Nhập số cần tìm số lần xuất hiện:"));
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) count++;
      }
      alert(`Số lần xuất hiện của ${x} là: ${count}`);
      break;

    case "6":
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
        }
      }
      alert(`Mảng sau khi sắp xếp tăng dần: [${arr}]`);
      break;

    case "7":
      arr = [];
      alert("Đã xóa toàn bộ mảng.");
      break;

    case "8":
      alert("Thoát chương trình.");
      break;

    default:
      alert("Lựa chọn không hợp lệ, vui lòng chọn lại.");
      break;
  }

} while (choice !== "8");
