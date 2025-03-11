let t = true;
let stringg;



while (t) {
    let options = Number(prompt(
        `================== MENU ==================
        
    1. Nhập chuỗi ký tự
    2. Hiển thị chuỗi ký tự
    3. Đếm số lượng các ký tự là chuỗi và số trong chuỗi ký tự nhập vào
    4. Chuyển đổi các ký tự viết hoa → viết thường, viết thường → viết hoa trong chuỗi.
    5. Trộn lẫn các ký tự của chuỗi gốc với chuỗi thứ 2 người dũng nhập vào. Ví dụ: "Hello", “abcdefg" → “Haeblcldoefg”
    6. Tách chuỗi thành các từ, sắp xếp chúng theo độ dài của từ, từ ngắn nhất đến dài nhất.
    7. Thoát chương trình
        
        ===========================================`))
    switch (options) {
        case 1:
            stringg = inputString(stringg);
            break;
        case 2:
            outputString(stringg);
            break;
        case 3:
            StringAndNumber(stringg);
            break;
        case 4:
            stringg = Deformation(stringg);
            break;
        case 5:
            stringg = mix(stringg);
            break;
        case 6:
            stringg = sort(stringg);
            break;
        case 7:
            t = false;
            break;
        default:
            alert("không hợp lệ");
            break;
    }
}

function inputString(stringg) {
    stringg = String(prompt("nhập một chuỗi bất kì"));
    alert("nhập thành công");
    return stringg;
}

function outputString(stringg) {
    alert(stringg);
}

function Clearwhitespace(A) {
    let m = true;
    while (m) {
        if (A[0] === " ") {
            A = A.substring(1);
        }
        if (A[A.length - 1] === " ") {
            A = A.substring(0, A.length - 1);
        }
        if (A[0] !== " " && A[A.length - 1] !== " ") {
            m = false;
        }
    }
    return A;
}

function StringAndNumber(A) {
    A = Clearwhitespace(A);
    if (A.length === 0) {
        alert(`Chuỗi chứa toàn kí tự trắng.`);
        return;
    }

    let sumString = 0, sumNumber = 0;
    let flag = isNaN(A[0]) ? false : true;

    for (let i = 0; i < A.length; i++) {
        if (A[i] === " ") {
            flag = false;
            continue;
        }

        if (!isNaN(A[i])) { //A[i] là số
            if (!flag || i == 0) { // nếu flag=false trước đó là chữ 
                sumNumber++;
                flag = true;
            }
        } else { // A[i] là chữ
            if (flag || i == 0) { // trước đó là số
                if (A[i - 1] == 0) {
                    sumString++;
                }
                sumString++;
                flag = false;
            }
        }
    }
    alert(`Số nhóm chữ: ${sumString}\nSố nhóm số: ${sumNumber}`);
}

function Deformation(A) {
    let newStr = "";
    for (let i = 0; i < A.length; i++) {
        if (A[i] >= 'a' && A[i] <= 'z') {
            newStr += A[i].toUpperCase();
        } else if (A[i] >= 'A' && A[i] <= 'Z') {
            newStr += A[i].toLowerCase();
        } else {
            newStr += A[i];
        }
    }
    return newStr;
}

function mix(A) {
    let newstring = String(prompt("nhập 1 chuỗi mới"));
    let t = newstring.length;
    let o;
    for (let i = 0; i < t; i++) {
        o = Math.floor(Math.random() * (t + 1));
        A = A.slice(0, o) + newstring[i] + A.slice(o);
    }
    return A;
}

function sort(A) {
    let Arr = A.split(" "); 
    softT(Arr); 
    return Arr.join(" -> "); 
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
        A[index] = temp;
    }
}
