let n = parseInt(prompt("Nhập số lượng phần tử n:"), 10);
if (n < 0) {
  alert("Số lượng phần tử không được âm");
} else if (n === 0) {
  alert("Mảng không có phần tử");
} else {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(prompt(`Nhập phần tử thứ ${i + 1}:`));
  }
  let sum = 0;
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && arr[i].trim() !== '') {
      sum += parseInt(arr[i], 10);
      found = true;
    }
  }
  if (!found) {
    alert("Không có phần tử nào là số");
  } else {
    alert("Tổng các ký tự số trong mảng: " + sum);
  }
}