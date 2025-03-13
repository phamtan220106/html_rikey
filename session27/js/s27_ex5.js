
let N = +prompt("Nhập số phần tử của mảng: ");
let A = [];

for (let i = 0; i < N; i++) {
    A[i] = +prompt(`A[${i}]: `);
}

let subLength = +prompt("Nhập số phần tử của một chuỗi con: ");


if (subLength <= 0 || subLength > N) {
    alert("Số phần tử chuỗi con không hợp lệ!");
} else {
    let B = [];

    for (let i = 0; i < N; i += subLength) {
        B.push(A.slice(i, i + subLength).join("-"));
    }
 
    let result = B.join(".");
    alert(result);
}