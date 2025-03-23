


document.querySelector(".add").addEventListener("click", () => {
    let input = document.getElementsByClassName("input-task")[0].value;
    input.trim();
    if (input == "") {
        alert("vui long nhập dữ liệu");
        return;
    }

    let list = document.querySelector(".list");

    let newitem = document.createElement("div");
    newitem.classList.add("item");

    let newcontent = document.createElement("div");
    newcontent.innerHTML = `${input}`;

    let dele = document.createElement("button");
    dele.classList.add("delete");
    dele.innerHTML = `X`;

    newitem.appendChild(newcontent);
    newitem.appendChild(dele);

    list.appendChild(newitem);

    document.querySelector(".input-task").value = ``;
})

document.querySelector(".list").addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {// kiểm tra phàn tử dc ấn có class delete không=target
        let confirmDelete = confirm("Bạn có chắc chắn muốn xóa không?");
        if (confirmDelete) {
            event.target.parentElement.remove(); // Xóa phần tử cha chứa nút X
        }
    }
});


       