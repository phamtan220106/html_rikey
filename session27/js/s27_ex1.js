let t = true;


let a = Number(prompt("a: "));
let b = Number(prompt("b: "));

while (t) {
    let options = Number(prompt(`   1:tổng
        2:hiệu
        3:tích
        4:thương
        5:thoát`))
    switch (options) {
        case 1:
            let tong = a + b;
            alert(`tong cua ${a} và ${b} là: ${tong}`);
            break;
        case 2:
            let hieu = a - b;
            alert(`hiệu cua ${a} và ${b} là: ${hieu}`);
            break;
        case 3:
            let tich = a * b;
            alert(`tích cua ${a} và ${b} là: ${tich}`);
            break;
        case 4:
            let thuong = a / b;
            alert(`thương cua ${a} và ${b} là: ${thuong}`);
            break;
        case 5:
            t = false;
            break;
        default:
            alert("không hợp lệ");
    }
}