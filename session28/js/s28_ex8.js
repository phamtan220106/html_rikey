const listemployee = [];

function letchoice() {
    let choice = Number(prompt(`1: Thêm nhân viên mới
2: Xóa nhân viên
3: Cập nhật mức lương
4: Tìm kiếm nhân viên theo tên
5: hiển thị danh sách nhân viên
0: Thoát`));
    return choice;
}

function inputepl() {
    return {
        id: listemployee.length + 1,
        name: validate(1),
        position: validate(2),
        salary: validate(3)
    };
}

function Addtoemployee(A) {
    let n = +prompt("Nhập số nhân viên mới: ");
    for (let i = 0; i < n; i++) {
        let epl = inputepl();
        A.push(epl);
    }
    alert(`Đã thêm ${n} nhân viên.`);
}

function validate(type) {
    while (true) {
        if (type === 1) {
            let name = prompt("Tên nhân viên: ").trim();
            if (!name || name.length < 2 || name.length > 30) {
                alert("Tên không hợp lệ. Vui lòng nhập lại.");
                continue;
            }
            return name;
        }
        else if (type === 2) {
            let position = prompt("Chức vụ: ").trim();
            if (!position || position.length < 2 || position.length > 30) {
                alert("Chức vụ không hợp lệ. Vui lòng nhập lại.");
                continue;
            }
            return position;
        }
        else {
            let salary = prompt("Nhập mức lương: ").trim();
            if (isNaN(salary) || salary === "" || Number(salary) <= 0) {
                alert("Mức lương không hợp lệ. Vui lòng nhập số dương.");
                continue;
            }
            return Number(salary);
        }
    }
}

function output(A) {
    let h = "";
    for (let i = 0; i < listemployee.length; i++) {
        h += `${A[i].id}: ${A[i].name}: ${A[i].position}: ${A[i].salary}\n`;
    }
    alert(h);
}

function searchid(A){
    let h="";
    let id=Number(prompt("id nhân viên: "));
    for(let i=0; i<A.length; i++){
        if(A[i].id==id){
            h += `${A[i].id}: ${A[i].name}: ${A[i].position}: ${A[i].salary}\n`;
            break;
        }
    }
    alert(h);
}

function updatesalary(A){
    let id=Number(prompt("id nhân viên: "));
    let newsalary=validate(3);
    for(let i=0; i<A.length; i++){
        if(A[i].id==id){
            A[i].id=newsalary;
            break;
        }
    }
    alert("đãng cập nhật mwucs lương");
}

function deleteemp(A) {
    let name = validate(1);
    let newlist = A.filter(a => a.name != name);
    if(newlist.length===A.length){
        alert("không tìm thấy phần tử nào để xóa ");
    }else{
        alert("đã xóa nhân viên");
    }
    A.length=0;
    A.push(...newlist);
    return A;
}
let t = true;
while (t) {
    let options = letchoice();
    switch (options) {
        case 1:
            Addtoemployee(listemployee);
            break;
        case 2:
            deleteemp(listemployee);
            break;
        case 3:
            updatesalary(listemployee);
            break;
        case 4:
            searchid(listemployee);
            break;
        case 5:
            output(listemployee);
            break;
        case 0:
            t = false;
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ.");
            break;
    }
}
