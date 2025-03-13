let N = +prompt("nhập số phần tử của mảng: ");

let A = [];
for (let i = 0; i < N; i++) {
    A[i] = +prompt(`A[${i}]: `);
}
let b = A.join(", ");
let t = A[1] - A[0];
let flag = true;
for (let i = 0; i < N - 1; i++) {
    if (A[i + 1] - A[i] != t) {
        flag = false;
        break;
    }
}
if (flag) {
    alert(b + `true`);
} else {
    alert(b + `false`);
}

