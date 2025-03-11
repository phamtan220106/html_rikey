let A = [];


function com_vn(email) {
    let l = "com", q = "vn";

    for (let i = 0; i < A.length; i++) {
        if (A[i] === email) {
            alert("Email đã tồn tại");
            return false;
        }
    }

    let Arr = email.split(".");
    let n = Arr.length - 1;

    if (Arr[n] === l || Arr[n] === q) {
        let kkk = Arr[n - 1];
        if (kkk.includes("@")) {
            A.push(email);
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
let y = true;
while (y) {
    let options = Number(prompt("1:thêm tài khoản\n2:số tài khoản\n3:thoát\n"));
    switch (options) {
        case 1:
            let email = String(prompt("Nhập email:"));
            if (com_vn(email)) {
                alert("Email hợp lệ , đã được thêm!");
            } else {
                alert("Email không hợp lệ!");
            }
            break;
        case 2:
            output(A);
            break;
        case 3:
            y=false;
            break;
        default:
            alert("không hợp lệ")
            break;
    }
}
function output(A) {
    let h = ``;
    for (let i = 0; i < A.length; i++) {
        h += `${A[i]}` + "\n";
    }
    alert(h);
}
