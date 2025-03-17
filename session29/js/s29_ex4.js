let business = [];


function describe() {
    return {
        id: validate(4),
        name: validate(1),
        Directions: validate(2),
        strtime: validate(3),
        status: true
    }
}

function validateDate() {
    let t = true;
    while (t) {
        let dateStr = prompt("Nhập ngày tháng (dd/mm/yyyy):");
        let parts = dateStr.split("/");
        if (parts.length !== 3) {
            alert("Định dạng không hợp lệ! Hãy nhập theo dạng dd/mm/yyyy.");
            continue;
        }
        let day = Number(parts[0]);
        let month = Number(parts[1]);
        let year = Number(parts[2]);
        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            alert("Vui lòng nhập số hợp lệ!");
            continue;
        }
        if (month < 1 || month > 12) {
            alert("Tháng không hợp lệ! (01 - 12)");
            continue;
        }
        if (day < 1 || day > 31) {
            alert("Ngày không hợp lệ! (01 - 31)");
            continue;
        }
        let daysInMonth = new Date(year, month, 0).getDate();
        if (day > daysInMonth) {
            alert(`Tháng ${month} chỉ có ${daysInMonth} ngày!`);
            continue;
        }
        t = false;
        return dateStr;
    }
}

function validate(type) {
    while (true) {
        switch (type) {
            case 1: // Name
                let name = prompt("Nhập tên công việc:");
                if (!name || name.length < 3 || name.length > 20) {
                    alert("Tên không hợp lệ");
                    continue;
                }
                return name;
            case 2: // Directions
                let Directions = prompt("Directions:");
                return Directions;
            case 3: // strtime
                return validateDate();
            case 4: // ID
                return business.length == 0 ? 1 : business[business.length - 1].id + 1;
            case 5: // Số lượng công việc muốn thêm
                let n = Number(prompt("Nhập số công việc muốn thêm:"));
                if (isNaN(n) || n < 0) {
                    alert("Không hợp lệ");
                    continue;
                }
                return n;
        }
    }
}

function inputbus(A) {
    let n = validate(5);
    for (let i = 0; i < n; i++) {
        A.push(describe());
    }
    alert(`Đã thêm ${n} công việc.`);
}

function viewdes(A) {
    let h = "";
    let t;
    for (let i = 0; i < A.length; i++) {
        A[i].status == true ? t = "chưa có người làm" : t = "đã có người làm";
        h += `${A[i].id}-----${A[i].name}-----${A[i].Directions}-----${A[i].strtime}-----${t} \n`;
    }
    alert(h || "danh sách công việc trống.");
}

function updatestr(A) {
    let id = Number(prompt("Nhập ID muốn sửa"));
    let result = A.findIndex(contact => contact.id === id);
    if (result != -1) {
        if (A[result].status) {
            let k = true;
            while (k) {
                let t = Number(prompt(`công việc đang trống , bạn có nhận không
                    1: làm.
                    2: thoát.`));
                switch (t) {
                    case 1:
                        alert("đã nhận việc.");
                        A[result].status = false;
                        console.log(A);
                        return;
                    case 2:
                        k = false;
                        break;
                    default:
                        alert("không hợp lệ");
                        break;
                }
            }
        } else {
            alert("việc đã có người làm");
        }
    } else {
        alert("công việc bạn đề cập không có trong danh mục");
    }
}

function Filter_Jobs(A) {
    let yest = A.filter(A => A.status == true);
    let no_t = A.filter(A => A.status == false);
    let h1 = "danh sách việc chưa dc nhận làm\n";
    let t;
    for (let i = 0; i < yest.length; i++) {
        yest[i].status == true ? t = "chưa có người làm" : t = "đã có người làm";
        h1 += `${yest[i].id}-----${yest[i].name}-----${yest[i].Directions}-----${yest[i].strtime}-----${t} \n`;
    }
    let h2 = "danh sách việc đã được nhận làm\n";
    for (let i = 0; i < no_t.length; i++) {
        no_t[i].status == true ? t = "chưa có người làm" : "đã có người làm";
        h2 += `${no_t[i].id}-----${no_t[i].name}-----${no_t[i].Directions}-----${no_t[i].strtime}-----${t} \n`;
    }
    alert(h1);
    alert(h2);
}

function sortlist(A) {
    let yest = A.filter(A => A.status == true);
    let no_t = A.filter(A => A.status == false);
    A.length == 0;
    for (let i = 0; i < yest.length; i++) {
        A.push(yest[i]);
    }
    for (let i = 0; i < no_t.length; i++) {
        A.push(no_t[i]);
    }
    viewdes(A);
}

function option() {
    return Number(prompt(`1: Thêm công việc mới.
2: Hiển thị tất cả các công việc.
3: Cập nhật trạng thái công việc theo id.
4: Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.
5: Sắp xếp các công việc theo trạng thái công việc.
6: Thoát.`))
}

function main() {
    let t = true;
    while (t) {
        let optiont = option();
        switch (optiont) {
            case 1:
                inputbus(business);
                break;
            case 2:
                viewdes(business);
                break;
            case 3:
                updatestr(business);
                break;
            case 4:
                Filter_Jobs(business);
                break;
            case 5:
                sortlist(business);
                break;
            case 6:
                t = false;
                break;
            default:
                alert("không hợp lệ");
                break;
        }
    }
}
main();