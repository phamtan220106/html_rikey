// Lấy tên từ localStorage, nếu chưa có thì gán chuỗi rỗng ""
let helloname = localStorage.getItem("helloname") || "";

// Lấy phần nhập tên và phần hiển thị lời chào
let inputname = document.querySelector(".inputname");
let hello = document.querySelector(".hello");

// Kiểm tra nếu chưa có tên thì hiển thị ô nhập, nếu có thì hiển thị lời chào
if (helloname === "") {
    inputname.style.display = "flex";
    hello.style.display = "none";
} else {
    inputname.style.display = "none";
    hello.style.display = "flex";
    hello.innerHTML = `
        <h1>👋 Chào bạn, ${helloname}</h1>
        <button class="rename">Đổi Tên</button>
    `;
    addRenameEvent(); // Thêm sự kiện cho nút "Đổi Tên"
}

// Lấy nút thêm tên và đổi tên
let add = document.querySelector(".add");

add.addEventListener("click", clickadd);

// Hàm xử lý khi ấn nút "Thêm"
function clickadd() {
    let inputtext = document.querySelector(".inputvalue").value.trim();

    if (inputtext === "") {
        console.log("Thông tin trắng");
        return;
    }

    helloname = inputtext;
    localStorage.setItem("helloname", helloname);

    inputname.style.display = "none";
    hello.style.display = "flex";

    hello.innerHTML = `
        <h1>👋 Chào bạn, ${helloname}</h1>
        <button class="rename">Đổi Tên</button>
    `;

    addRenameEvent(); // Thêm sự kiện cho nút "Đổi Tên"
}

// Hàm gán sự kiện cho nút "Đổi Tên"
function addRenameEvent() {
    let rename = document.querySelector(".rename");
    rename.addEventListener("click", function () {
        inputname.style.display = "flex";
        hello.style.display = "none";
    });
}
