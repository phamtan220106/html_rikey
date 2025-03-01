let a = Number(prompt("Nhập số a:"));
let b = Number(prompt("Nhập số b:"));
let z = prompt("Nhập phép toán (+, -, *, /):");

function operator(a, b, z) {
    if (isNaN(a) || isNaN(b)) {
        alert("Số khongn hợp lệ");
        return;
    }

    let j;
    if (z === "+") {
        j = a + b;
    } else if (z === "-") {
        j = a - b;
    } else if (z === "*") {
        j = a * b;
    } else if (z === "/") {
        if (b === 0) {
            alert("Phép toán không hợp lệ");
            return;
        }
        j = a / b;
    } else {
        alert("Phép toán không hợp lệ");
        return;
    }

    let ketqua = `${a} ${z} ${b} = ${j}`;
    alert(ketqua);
}

operator(a, b, z);
