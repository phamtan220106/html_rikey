
document.querySelector(".Add").addEventListener("click", addMember);
document.querySelector(".member").addEventListener("keypress", function (e) {
    if (e.key === "Enter") addMember();
});
document.querySelector(".affair").addEventListener("keypress", function (e) {
    if (e.key === "Enter") addMember();
});

let currentPage = 1;
const rowsPerPage = 4;
let pages = [];

function addMember() {
    let member = document.querySelector(".member").value.trim();
    let affair = document.querySelector(".affair").value.trim();

    if (member === "" || affair === "") {
        alert("Vui lòng nhập đủ thông tin!");
        return;
    }

    let newRow = { member, affair };
    pages.push(newRow);//thêm giá trị vừa nhập vào mảng

    // cập nhật lại bảng
    updateTable();
    updatePagination();

    document.querySelector(".member").value = "";
    document.querySelector(".affair").value = "";
}

function updateTable() {
    let tableBody = document.getElementById("table-body");// lấy thân bảng
    tableBody.innerHTML = "";// xóa bảng

    let startIndex = (currentPage - 1) * rowsPerPage;// vị trí bắt đầu mỗi trang
    let endIndex = Math.min(startIndex + rowsPerPage, pages.length);

    for (let i = startIndex; i < endIndex; i++) {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${pages[i].member}</td>
            <td>${pages[i].affair}</td>
        `;
        tableBody.appendChild(row);
    }
}

function updatePagination() {
    let paginationContainer = document.querySelector("ul");//lấy phần ul để phgaan trang

    // tạo nút previous , nhưng html đã có 
    paginationContainer.innerHTML = `
        <button class="previous editpage">Previous</button>
    `;

    let totalPages = Math.ceil(pages.length / rowsPerPage);// lấy số trang= số phàn tử / 4 (số p tử mỗi trang =4)


    for (let i = 1; i <= totalPages; i++) {

        //tạo nút số trang 
        let pageButton = document.createElement("li");

        // thêm lớp page
        pageButton.classList.add("page");

        // đặt số mỗi trang
        pageButton.textContent = i;

        //ấn vào nút trang
        pageButton.addEventListener("click", function () {
            // đặt trang hiện tại thành i(nút bấm )
            currentPage = i;

            // đặt lại bảng
            updateTable();
        });
        
        paginationContainer.appendChild(pageButton);
    }
    // tạo nút next như html đã có
    paginationContainer.innerHTML += `
        <button class="next editpage">Next</button>
    `; 
    // truyển trang
    document.querySelector(".previous").addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            updateTable();
        }
    });
    
    
    document.querySelector(".next").addEventListener("click", function () {
        if (currentPage < totalPages) {
            currentPage++;
            updateTable();
        }
    });

}

