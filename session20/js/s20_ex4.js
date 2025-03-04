let text = prompt("Nhập một chuỗi");
let check = prompt("Nhập từ khóa muốn tìm trong chuỗi");
let m = 0;
if (check.length == 1) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] == check) {
            alert("có tồn tại trong chuỗi ");
            break;
        } else {
            m = 1;
            continue;
        }
    }
    if (m == 1) {
        alert("không tồn tại trong chuỗi");
    }
    alert("không tồn tại trong chuỗi");
} else {
    if (text.includes(check)) {
        alert("có tồn tại trong chuỗi ");
    } else {
        alert("không tồn tại trong chuỗi");
    }
}
