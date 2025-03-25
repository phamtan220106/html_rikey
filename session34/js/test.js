document.addEventListener("DOMContentLoaded", function () {
    // Tạo mảng lưu trữ giá trị nhập vào
    let listTaskMangement = JSON.parse(localStorage.getItem("tasks")) || [];

    // Lấy nút submit
    let submit = document.querySelector(".Submit-btn");
    submit.addEventListener("click", clicksubmit);

    // Hàm xử lý sự kiện khi ấn nút submit
    function clicksubmit() {
        // Lấy giá trị người dùng nhập
        let content = document.querySelector("#content-input").value.trim();
        let dueDate = document.querySelector(".date-input").value;
        let status = document.querySelector("#chose-status").value;
        let assigned = document.querySelector(".Assigned-input").value.trim();

        // Validate
        if (!check(content, assigned, dueDate, status)) {
            return;
        }

        // Tạo đối tượng
        let task = {
            id: listTaskMangement.length === 0 ? 1 : listTaskMangement[listTaskMangement.length - 1].id + 1,
            content: content,
            dueDate: dueDate,
            status: status,
            assigned: assigned
        };

        // Reset input sau khi nhập xong
        document.querySelector("#content-input").value = "";
        document.querySelector(".Assigned-input").value = "";
        document.querySelector(".date-input").value = "";
        document.querySelector("#chose-status").value = "";

        // Thêm vào mảng
        listTaskMangement.push(task);
        localStorage.setItem("tasks", JSON.stringify(listTaskMangement));

        console.log("Đã lưu dữ liệu");

        // Hiển thị bảng
        viewtable();
    }

    // Hàm validate dữ liệu
    function check(content, assigned, dueDate, status) {
        if (content === "") {
            document.querySelector("#content-input").focus();
            alert("Nội dung không được để trống!");
            return false;
        } else if (dueDate === "") {
            document.querySelector(".date-input").focus();
            alert("Ngày không được để trống!");
            return false;
        } else if (status === "Chose-status") {
            document.querySelector("#chose-status").focus();
            alert("Vui lòng chọn trạng thái!");
            return false;
        } else if (assigned === "") {
            document.querySelector(".Assigned-input").focus();
            alert("Vui lòng nhập người được giao!");
            return false;
        }
        return true;
    }

    // Hiển thị bảng
    function viewtable() {
        let tablebody = document.querySelector(".table-body");
        tablebody.innerHTML = ``;

        if (listTaskMangement.length === 0) {
            tablebody.innerHTML = `
                <tr>
                    <td colspan="6" class="no-content">Không có thông tin</td>
                </tr>
            `;
            return;
        }

        listTaskMangement.forEach((task, index) => {
            tablebody.innerHTML += `
                <tr>
                    <td>${task.id}</td>
                    <td>${task.content}</td>
                    <td>${task.dueDate}</td>
                    <td>${task.status}</td>
                    <td>${task.assigned}</td>
                    <td class="vld">
                        <button class="update vld-btn" data-id="${index}">Sửa</button>
                        <button class="delete vld-btn" data-id="${index}">Xóa</button>
                    </td>
                </tr>`;
        });

        // Gán sự kiện sửa
        document.querySelectorAll(".update").forEach((btn) => {
            btn.addEventListener("click", function () {
                let index = this.getAttribute("data-id");

                // Đổ dữ liệu lên input để sửa
                document.querySelector("#content-input").value = listTaskMangement[index].content;
                document.querySelector(".date-input").value = listTaskMangement[index].dueDate;
                document.querySelector("#chose-status").value = listTaskMangement[index].status;
                document.querySelector(".Assigned-input").value = listTaskMangement[index].assigned;

                // Chờ người dùng nhập lại, sau đó cập nhật
                submit.removeEventListener("click", clicksubmit);
                submit.addEventListener("click", function updateTask() {
                    let content = document.querySelector("#content-input").value.trim();
                    let dueDate = document.querySelector(".date-input").value;
                    let status = document.querySelector("#chose-status").value;
                    let assigned = document.querySelector(".Assigned-input").value.trim();

                    if (!check(content, assigned, dueDate, status)) return;

                    // Cập nhật dữ liệu
                    listTaskMangement[index] = {
                        id: listTaskMangement[index].id,
                        content: content,
                        dueDate: dueDate,
                        status: status,
                        assigned: assigned
                    };

                    // Lưu lại vào localStorage
                    localStorage.setItem("tasks", JSON.stringify(listTaskMangement));

                    // Hiển thị lại bảng
                    viewtable();

                    // Reset input
                    document.querySelector("#content-input").value = "";
                    document.querySelector(".Assigned-input").value = "";
                    document.querySelector(".date-input").value = "";
                    document.querySelector("#chose-status").value = "";

                    // Gán lại sự kiện ban đầu
                    submit.removeEventListener("click", updateTask);
                    submit.addEventListener("click", clicksubmit);
                });
            });
        });

        // Gán sự kiện xóa
        document.querySelectorAll(".delete").forEach((btn) => {
            btn.addEventListener("click", function () {
                let index = this.getAttribute("data-id");

                // Xóa khỏi mảng
                listTaskMangement.splice(index, 1);

                // Cập nhật localStorage
                localStorage.setItem("tasks", JSON.stringify(listTaskMangement));

                // Cập nhật lại bảng
                viewtable();
            });
        });
    }

    // Hiển thị bảng khi load trang
    viewtable();
});
