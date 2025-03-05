let a = +prompt("số mày muốn");
let t = a;
let sum = 0;
if (Number.isInteger(a)) {
    while (t != 0) {
        sum += Math.pow(t % 10, 3);
        t = Math.floor(t / 10);
    }
    if (sum == a) {
        alert("số mày nhập là amstrong");
    } else {
        alert("del phải");
    }
}