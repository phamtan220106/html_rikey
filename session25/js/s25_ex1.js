let A = [];



let n = Number(prompt("nhập số lượng phần tử"));

for (let i = 0; i < n; i++) {
    let k = Number(prompt(`A[${i}]= `));
    if (!isNaN(k)) {
        A[i] = k;
    } else {
        alert("không hợp lệ");
        break;
    }
}

alert(`giá trị nhỏ nhất trong mảng: ${Math.min(...A)}`);