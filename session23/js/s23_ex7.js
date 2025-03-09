let n = parseInt(prompt("Nhập số lượng phần tử n:"), 10);
if (n < 0) {
  console.log("Số lượng phần tử không được âm");
} else if (n === 0) {
  console.log("Mảng không có phần tử nào");
} else {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`), 10));
  }
  if (n === 1) {
    console.log("Không có số lớn thứ hai");
  } else {
    let max1 = arr[0];
    let max2 = arr[1];
    if (max2 > max1) {
      let temp = max1;
      max1 = max2;
      max2 = temp;
    }
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] > max1) {
        max2 = max1;
        max1 = arr[i];
      } else if (arr[i] > max2 && arr[i] !== max1) {
        max2 = arr[i];
      }
    }
    console.log(max2);
  }
}