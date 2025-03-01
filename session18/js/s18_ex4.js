let a=Number(prompt("nhập 1 số từ 1->9")) 
function read(m) {
    switch (m) {
        case 0:
            alert("không");
            break;
        case 1:
            alert("một");
            break;
        case 2:
            alert("hai");
            break;
        case 3:
            alert("ba");
            break;
        case 4:
            alert("bốn");
            break;
        case 5:
            alert("năm");
            break;
        case 6:
            alert("sáu");
            break;
        case 7:
            alert("bảy");
            break;
        case 8:
            alert("tám");
            break;
        case 9:
            alert("chín");
            break;
        default:
            alert("không đúng yêu cầu");
    }
}

read(a);
