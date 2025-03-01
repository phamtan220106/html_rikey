let a = Number(prompt("Nhập một số nguyên"));


if (a < 1 || a > 999) {
    document.write("Số không hợp lệ!");
} else {
    function Numberofdigits(a) {
        let x = 0;
        while (a != 0) {
            a = Math.floor(a / 10);
            x++;
        }
        return x;
    }

    function read(m) {
        switch (m) {
            case 0:
                return "không";
            case 1:
                return "một";
            case 2:
                return "hai";
            case 3:
                return "ba";
            case 4:
                return "bốn";
            case 5:
                return "năm";
            case 6:
                return "sáu";
            case 7:
                return "bảy";
            case 8:
                return "tám";
            case 9:
                return "chín";
            default:
                return "";
        }
    }

    let x = Numberofdigits(a);
    let t, l, j;

    switch (x) {
        case 1:
            document.write(read(a));
            break;
        case 2:
            t = Math.floor(a / 10);
            l = a % 10;
            if (t === 1) {
                document.write("mười " + (l !== 0 ? read(l) : ""));
            } else {
                document.write(read(t) + " mươi " + (l !== 0 ? read(l) : ""));
            }
            break;
        case 3:
            t = Math.floor(a / 100);
            l = Math.floor((a % 100) / 10);
            j = a % 10;
            if (l === 0 && j === 0) {
                document.write(read(t) + " trăm");
            } else if (l === 0 && j !== 0) {
                document.write(read(t) + " trăm linh " + read(j));
            } else if (l === 1) {
                document.write(read(t) + " trăm mười " + (j !== 0 ? read(j) : ""));
            } else {
                document.write(read(t) + " trăm " + read(l) + " mươi " + (j !== 0 ? read(j) : ""));
            }
            break;
        default:
            document.write("Không đúng định dạng");
    }
}
