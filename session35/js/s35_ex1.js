





function clickAddevent() {
    // lấy giá trị từ người dùng
    let inputvalue = document.querySelector(".input").value.trim();


    if (!validate(inputvalue, 1)) return;

    // nếu có thì thê nó vào mảng
    listTask.push(inputvalue);

    // lưa lại giá trị
    localStorage.setItem("tasks", JSON.stringify(listTask));

    //hiển thị bảng
}


function validate(value, type) {
    switch (type) {
        case 1:// giá trị input
            if (value == "") {
                alert("vui long nhâp công việc");
                return false;
            }
            return true;
        default:
            break;
    }
}

function viewtable() {


    // lấy phần container
    let container = document.querySelector(".container");
    container.innerHTML = `
        <h1>thầy tân vĩ đại</h1>
        <div class="search">
            <input type="text" class="input">
            <button class="add">Thêm</button>
        </div>
    `;

    // nếu không có hiển thị không có
    if (listTask.length == 0) {
        container.innerHTML += `
            <div class="no-content">
                <td colspan="6" class="no-content">không có thông tin</td>
            </div>
        `
    }

    listTask.forEach((task, index) => {
        container.innerHTML += `
        <div class="content">
            <span>${task}</span>
            <div class="seting">
                <button class="update css" data-id="${index}">sửa</button>
                <button class="delete css" data-id="${index}">xóa</button>
            </div>
        </div>
        `


    });

    // lấy toàn bộ nút sửa
    document.querySelectorAll(".update").forEach((btn) => {

        btn.addEventListener("click", function () {
            // lấy vị trí của nút sửa
            let index = this.getAttribute("data-id");


            let newtask = prompt("chỉnh sủa công việc");
            if (newtask.trim() == "") {
                return;
            }

            listTask[index] = newtask;
            localStorage.setItem("tasks", JSON.stringify(listTask));
            viewtable();
        })

    });

    // lấy toàn bộ nút xóa
    document.querySelectorAll(".delete").forEach((btn) => {

        btn.addEventListener("click", function () {
            // lấy vị trí của nút sửa
            let index = this.getAttribute("data-id");

            let yesNo = confirm("xác nhận xóa");
            if(yesNo){
                listTask.splice(index,1);
                localStorage.setItem("tasks", JSON.stringify(listTask));
                viewtable();
            }
        })
    });

    document.querySelector(".add").addEventListener("click", clickAddevent);
}



let listTask = JSON.parse(localStorage.getItem("tasks")) || [];

// lấy nút thêm
let click_add = document.querySelector(".add");

click_add.addEventListener("click", clickAddevent);
viewtable();
