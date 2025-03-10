let t = true;
let A = "";

while (t) {
    let option = Number(prompt(
        `================== MENU ==================
        1. Nhập chuỗi ký tự
        2. Hiển thị chuỗi ký tự
        3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện
        4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi
        5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi
        6. Chuyển đổi chuỗi ký tự thành dạng snake_case
        7. Thoát chương trình
    ===========================================`));
    switch (option) {
        case 1:
            A = inputString();
            break;
        case 2:
            outputString(A);
            break;
        case 3:
            Duplication(A);
            break;
        case 4:
            max_min(A);
            break;
        case 5:
            Duplication(A);
            break;
        case 6:
            snake_case(A);
            break;
        case 7:
            t = false; // Thoát chương trình
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
}

function inputString() {
    let stringg = prompt("Nhập một chuỗi bất kì");
    alert("Nhập thành công");
    return stringg;
}

function outputString(stringg) {
    alert(stringg);
}

function Clearwhitespace(A) {
    return A.trim();
}

function lowercase(A) {
    return A.toLowerCase();
}

function Duplication(A) {
    A = lowercase(A);
    let h = "";
    let Arr = A.split(" ");
    let newA = [...new Set(Arr)];
    let count = 0;
    for (let i = 0; i < newA.length; i++) {
        count = 0;
        for (let j = 0; j < Arr.length; j++) {
            if (Arr[j] === newA[i]) {
                count++;
            }
        }
        h += `${newA[i]} : ${count} lần\n`;
    }
    alert(h);
}

function max_min(A){
    A = lowercase(A);
    let Arr = A.split(" ");
    let newA = [...new Set(Arr)]; // Xóa trùng lặp
    newA = softT(newA); // Sắp xếp 

    if (newA.length === 0) {
        alert("Chuỗi không chứa từ hợp lệ!");
        return;
    }

    let max = newA[newA.length - 1];
    let min = newA[0];
    let h = `max: ${max}\nmin: ${min}`;
    alert(h);
}

function softT(A) {
    if (A.length === 0) {
        alert("Mảng rỗng.");
        return;
    }
    for (let i = 0; i < A.length - 1; i++) {
        let min = A[i];
        let index = i;
        for (let j = i + 1; j < A.length; j++) {
            if (A[j].length < min.length) {
                min = A[j];
                index = j;
            }
        }
        let temp = A[i];
        A[i] = A[index];
        A[index] = temp
    }
    return A;
}
 function snake_case(A){
    let h="";
    for(let i=0; i<A.length;i++){
        A[i]===" "?(i==A.length-1?h+="":h+=`_`):(h+=A[i]);
    }
    alert(h);
 }