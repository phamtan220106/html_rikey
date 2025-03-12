let n = Number(prompt("số phần tử"));

let A = [];
for (let i = 0; i < n; i++) {
    A[i] = Number(prompt(`${i+1}`));
}
let max = Math.max(...A);
let newA = A.map((value, index) => value == max ? index : -1).filter(index => index != -1);
alert(`max: ${max} vị trí: ${newA.join(",")}`); 