function checknumber() {
    let value;
    let t = true;
    while (t) {
        value = prompt("nhập một chỗi số");
        if (!isNaN(value)) {
            t = false;
        }
    }
    return value;// trả về 1 chuỗi kí tự là số
}

function Largest_number(x) {
    let B = x.split("");
    B.sort((a, b) => b - a);
    let str = B.join("");
    return str;
}

function main() {
    let value = checknumber();
    value = Largest_number(value);
    alert(value);
}

main();






// function checknumber() {
//     let value;
//     let t = true;
//     while (t) {
//         value = prompt("Nhập một chuỗi số:");
//         if (/^\d+$/.test(value)) { // Kiểm tra chuỗi chỉ chứa số
//             t = false;
//         } else {
//             alert("Vui lòng nhập một chuỗi chỉ chứa số.");
//         }
//     }
//     return value; // Trả về chuỗi số
// }

// function Largest_number(x) {
//     let B = x.split("");
//     B.sort((a, b) => b - a); // Sắp xếp giảm dần để tạo số lớn nhất
//     return B.join(""); // Trả về chuỗi kết quả
// }

// function main() {
//     let value = checknumber();
//     value = Largest_number(value);
//     alert("Số lớn nhất có thể tạo: " + value);
// }


// main();
