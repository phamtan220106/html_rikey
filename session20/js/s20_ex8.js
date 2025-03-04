let a = +prompt("Số lượng số nguyên tố cần in: ");
let sum = 0;
function check(n) {
    let test;
    if (n < 2) {
        test = false;
    } else if (n == 3 || n == 2) {
        test = true;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                test = false;
                break;
            } else {
                test = true;
                continue;
            }
        }
    }
    return test;
}
let haha = ""
for (let i = 2; sum < a; i++) {
    if (check(i)) {
        haha = haha + `${i}` + (sum === a - 1 ? "" : " ; ");
        sum++;
    }
}
document.write(haha);

