let userString = "";
let choice;

do {
    choice = prompt(`Menu chọn chức năng:
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Tính độ dài chuỗi
4. Đếm số ký tự in hoa
5. Xóa tất cả lần xuất hiện của một ký tự
6. Đếm số lần xuất hiện của một từ
7. Chuẩn hóa chuỗi
8. Thoát chương trình
`);

    switch (choice) {
        case "1":
            userString = prompt("Nhập một chuỗi bất kỳ:");
            break;
        case "2":
            alert("Chuỗi hiện tại: " + userString);
            break;
        case "3":
            alert("Độ dài của chuỗi: " + userString.length);
            break;
        case "4":
            let countUpper = 0;
            for (let i = 0; i < userString.length; i++) {
                let c = userString.charAt(i);
                if (c >= 'A' && c <= 'Z') {
                    countUpper++;
                }
            }
            alert("Số ký tự in hoa: " + countUpper);
            break;
        case "5":
            let charToRemove = prompt("Nhập ký tự muốn xóa:");
            userString = userString.split(charToRemove).join("");
            alert("Chuỗi sau khi xóa '" + charToRemove + "': " + userString);
            break;
        case "6":
            let word = prompt("Nhập từ cần đếm:");
            let words = userString.split(/\s+/);
            let count = 0;
            for (let w of words) {
                if (w === word) {
                    count++;
                }
            }
            alert(`Từ "${word}" xuất hiện ${count} lần.`);
            break;
        case "7":
            let arrWords = userString.trim().split(/\s+/);
            for (let i = 0; i < arrWords.length; i++) {
                let w = arrWords[i];
                if (w.length > 0) {
                    arrWords[i] = w[0].toUpperCase() + w.slice(1).toLowerCase();
                }
            }
            userString = arrWords.join(" ");
            alert("Chuỗi sau khi chuẩn hóa: " + userString);
            break;
        case "8":
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại.");
            break;
    }
} while (choice !== "8");