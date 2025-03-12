let n = String(prompt("số phần tử"));
let h = "";

let A = [];

for (let i = 0; i < n; i++) {
    A[i] = Number(prompt(" "));
}

const newA = A.filter(a => check(a) == true);
alert(newA);


function check(a) {
    if (a <= 1) {
        return false;
    }
    if (a == 2) {
        return true;
    }
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i == 0) {
            return false;
        }
    }
    return true;
}