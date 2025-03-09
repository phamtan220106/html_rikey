let n = parseInt(prompt("Nhập số lượng phần tử n:"), 10);
if (n < 0) {
  console.log("Số lượng phần tử không được âm");
} else if (n === 0) {
  console.log("Không có phần tử nào");
} else {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`), 10));
  }
  function isFibonacci(array) {
    if (array.length < 2) return false;
    if (array[0] !== 0 || array[1] !== 1) return false;
    for (let i = 2; i < array.length; i++) {
      if (array[i] !== array[i - 1] + array[i - 2]) return false;
    }
    return true;
  }
  if (isFibonacci(arr)) {
    console.log("Là dãy số fibonacci");
  } else {
    console.log("Không phải dãy số fibonacci");
  }
}