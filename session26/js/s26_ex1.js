let n = Number(prompt("số phần tử"));
let Arr = [];

for (let i = 0; i < n; i++) {
    Arr[i] = Number(prompt(`Arr[${i}]: `));
    if (isNaN(Arr[i])) {
        alert("không hợp lệ");
        break;
    }
}
if (n == 0) {
    alert("mảng không có giá trị");
} else {
    const newArr = Arr.filter(a => a >= 10);
    alert(newArr);
}
