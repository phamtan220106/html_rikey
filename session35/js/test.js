let lisUlr = JSON.parse(localStorage.getItem("ulrs")) || [];

// Lấy nút add
let addbook = document.querySelector(".add");

// Lấy form
let form = document.querySelector(".form");

// Hiển thị form khi nhấn Add Bookmark
addbook.addEventListener("click", function () {
    form.style.display = "block";
});

// Lấy nút save
let save = document.querySelector(".save");

// Lấy nút ẩn form
let hideForm = document.querySelector(".hide");

// Ẩn form khi nhấn nút "X"
hideForm.addEventListener("click", function (e) {
    e.preventDefault();
    form.style.display = "none";
});

save.addEventListener("click", function (e) {
    e.preventDefault(); // Ngăn form reload trang

    let nameInput = document.querySelector(".naemweb");
    let urlInput = document.querySelector(".url");

    let name = nameInput.value.trim();
    let url = urlInput.value.trim();

    if (name === "" || url === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    let web = {
        name: name,
        url: url
    };

    // Lưu vào mảng
    lisUlr.push(web);
    localStorage.setItem("ulrs", JSON.stringify(lisUlr));

    // Hiển thị danh sách
    viewWeb();

    // Ẩn form và xóa nội dung input
    form.style.display = "none";
    nameInput.value = "";
    urlInput.value = "";
});

// Hàm hiển thị danh sách bookmark
function viewWeb() {
    let content = document.querySelector(".content");
    content.innerHTML = ""; // Xóa nội dung cũ

    lisUlr.forEach((web, index) => {
        let div = document.createElement("div");
        div.classList.add("member");

        let link = document.createElement("a");
        link.href = web.url;
        link.textContent = web.name;
        link.target = "_blank";

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Xóa";
        deleteBtn.classList.add("delete");
        deleteBtn.addEventListener("click", function () {
            lisUlr.splice(index, 1); // Xóa phần tử khỏi mảng
            localStorage.setItem("ulrs", JSON.stringify(lisUlr)); // Cập nhật localStorage
            viewWeb(); // Cập nhật giao diện
        });

        div.appendChild(link);
        div.appendChild(deleteBtn);
        content.appendChild(div);
    });
}

// Hiển thị bookmark khi tải lại trang
viewWeb();
