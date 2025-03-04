let a = +prompt("Nhập số lượng số Fibonacci:");
let dem = 0;
let flag = 1;
let two = 1;
let fibonaci = 1;

if (Number.isInteger(a) && a > 0) {
    while (dem < a) {
        if (dem < 2) {
            document.write(fibonaci + (dem === a - 1 ? "" : " ; "));
        } else {
            fibonaci = two + flag;
            document.write(fibonaci + (dem === a - 1 ? "" : " ; "));
            flag = two;
            two = fibonaci;
        }
        dem++;
    }
} else {
    alert("không howpj lệ");
}
