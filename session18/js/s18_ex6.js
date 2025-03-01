let year = Number(prompt("Nhập năm muốn kiểm tra"));

function leapyear(x) {
    if (x < 0) {
        alert("Không đúng định dạng");
    } else {
        if ((x % 4 == 0 && x % 100 != 0) || (x % 400 == 0)) {
            alert("Năm nhuận");
        } else {
            alert("Không phải năm nhuận");
        }
    }
}

leapyear(year);
