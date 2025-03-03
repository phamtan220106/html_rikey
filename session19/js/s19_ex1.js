let month = parseInt(prompt("Nhập tháng muốn kiểm tra:"));

function check(x) {
    switch (x) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.write(`Tháng ${x} có 31 ngày`);
            break;
        case 2:
            document.write(`Tháng ${x} có 28 ngày hoặc 29 vào năm nhuận`);
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.write(`Tháng ${x} có 30 ngày`);
            break;
        default:
            document.write("Không hợp lệ");
    }
}

check(month);
