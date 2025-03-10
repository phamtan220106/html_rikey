
let arr = [];
let choice;

do {
  choice = prompt(`Menu chọn chức năng:\n\n1. Nhập mảng 2 chiều\n2. Hiển thị mảng 2 chiều\n3. Tính tổng các phần tử trong mảng\n4. Tìm phần tử lớn nhất trong mảng và vị trí của nó\n5. Tìm trung bình cộng các phần tử của một hàng cụ thể\n6. Đảo ngược các hàng của mảng\n7. Thoát chương trình`);

  switch (choice) {
    case "1":
      let rows = Number(prompt("Nhập số hàng:"));
      let cols = Number(prompt("Nhập số cột:"));
      arr = [];
      for (let i = 0; i < rows; i++) {
        arr[i] = [];
        for (let j = 0; j < cols; j++) {
          arr[i][j] = Number(prompt(`Nhập giá trị tại vị trí [${i},${j}]`));
        }
      }
      break;

    case "2":
      let output = "Mảng 2 chiều:\n";
      for (let i = 0; i < arr.length; i++) {
        output += `[${arr[i].join(", ")}]\n`;
      }
      alert(output);
      break;

    case "3":
      let totalSum = 0;
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          totalSum += arr[i][j];
        }
      }
      alert(`Tổng các phần tử trong mảng là: ${totalSum}`);
      break;

    case "4":
      let max = arr[0][0], position = "(0,0)";
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          if (arr[i][j] > max) {
            max = arr[i][j];
            position = `(${i},${j})`;
          }
        }
      }
      alert(`Phần tử lớn nhất là: ${max} tại vị trí ${position}`);
      break;

    case "5":
  
      break;

    case "6":
      arr.reverse();
      alert("Đã đảo ngược các hàng của mảng.");
      break;

    case "7":
      alert("Thoát chương trình.");
      break;

    default:
      alert("Lựa chọn không hợp lệ, vui lòng chọn lại.");
      break;
  }

} while (choice !== "7");
