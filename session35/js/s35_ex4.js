



let listmember = JSON.parse(localStorage.getItem("memberlist")) || [];

let currentPage = 1;//trang hiện tại
const rowsPerPage = 4;// số phần tử mỗi trang

//tạo sựu kiện add
function addmember() {
    let member = document.querySelector(".member").value.trim();
    let affair = document.querySelector(".affair").value.trim();

    if (member == "" || affair == "") {
        alert("thông tin thiếu");
        return;
    }

    let newmb = {
        id: listmember.length == 0 ? 1 : listmember[listmember.length - 1].id + 1,
        name: member,
        affair: affair
    }

    listmember.push(newmb);
    localStorage.setItem("memberlist", JSON.stringify(listmember));

    // hàm hiển thị
    updateTable();
    updatePagination();
}

function updateTable() {

    // lấy phaafnt hân bảng
    let tableBody = document.querySelector("#table-body");
    tableBody.innerHTML = ``;

    //mảng bắt đầu =0;
    let startIndex = (currentPage - 1) * rowsPerPage;
    let endIndex = Math.min(startIndex + rowsPerPage, listmember.length);

    for (let i = startIndex; i < endIndex; i++) {
        tableBody.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${listmember[i].name}</td>
            <td>${listmember[i].affair}</td>
        </tr>
        `
    }
}



function updatePagination() {
    let ul = document.querySelector("ul");
    let totalPages = Math.ceil(listmember.length / rowsPerPage);// lấy số trang= số phàn tử / 4 (số p tử mỗi trang =4)
    ul.innerHTML = `
    <button class="previous editpage">Previous</button>
    `

    for (let i = 1; i <= totalPages; i++) {
        ul.innerHTML += `
        <button class="page" data-id="${i}">${i}</button>
        `
        updateTable();
    }
    ul.innerHTML += `
        <button class="next editpage">Next</button>

    `

    // lấy tất cả các li trang
    document.querySelectorAll(".page").forEach(elm => {
        elm.addEventListener("click", () => {
            let index = this.getAttribute("data-id");
            currentPage=Number(index);
            updateTable();
        })
    });
    
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

// lấy nút add
let addnyc = document.querySelector(".Add");

addnyc.addEventListener("click", addmember);
