const arr = [false, 0, 5, 10, "Hello world", null, undefined, NaN, ""];
let result = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i]) {
    result.push(arr[i]);
  }
}
console.log("Mảng gốc:", arr);
console.log("Mảng sau khi loại bỏ falsy:", result);