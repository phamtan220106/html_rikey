let running = true;
let A = "";

while (running) {
    let option = Number(prompt(
        `================== MENU ==================
        1. Nhập chuỗi
        2. Hiển thị chuỗi
        3. Loại bỏ khoảng trắng ở đầu và cuối chuỗi
        4. Đảo ngược chuỗi
        5. Đếm số lượng từ trong chuỗi
        6. Tìm kiếm và thay thế ký tự
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
            A = trimWhitespace(A);
            break;
        case 4:
            A = reverseString(A);
            break;
        case 5:
            countWords(A);
            break;
        case 6:
            A = replaceCharacter(A);
            break;
        case 7:
            running = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
}

function inputString() {
    let str = prompt("Nhập một chuỗi bất kì:");
    alert("Nhập thành công");
    return str;
}

function outputString(str) {
    alert("Chuỗi hiện tại: " + str);
}

function trimWhitespace(str) {
    let result = "";
    let start = 0, end = str.length - 1;
    while (str[start] === " ") start++;
    while (str[end] === " ") end--;
    for (let i = start; i <= end; i++) {
        result += str[i];
    }
    alert("Chuỗi sau khi loại bỏ khoảng trắng: " + result);
    return result;
}

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    alert("Chuỗi sau khi đảo ngược: " + reversed);
    return reversed;
}

function countWords(str) {
    let count = 0;
    let inWord = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " " && !inWord) {
            count++;
            inWord = true;
        } else if (str[i] === " ") {
            inWord = false;
        }
    }
    alert("Số lượng từ trong chuỗi: " + count);
}

function replaceCharacter(str) {
    let charToFind = prompt("Nhập ký tự cần tìm: ");
    let charToReplace = prompt("Nhập ký tự thay thế: ");
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === charToFind) {
            result += charToReplace;
        } else {
            result += str[i];
        }
    }
    alert("Chuỗi sau khi thay thế: " + result);
    return result;
}
