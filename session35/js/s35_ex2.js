let lisUlr = JSON.parse(localStorage.getItem("ulrs")) || [];


// lấy nút add
let addbook = document.querySelector(".add");

//lấy form
let form = document.querySelector(".form");

addbook.addEventListener("click", function () {
    form.style.display = "block";
});

// lấy nút save
let save = document.querySelector(".save");

// lấy nút ẩn form
document.querySelector(".hide").addEventListener("click", (e) => {
    e.preventDefault();
    form.style.display = "none";
});


save.addEventListener("click", saveclick);

// tạo sự kiện khi ấn nút save 
function saveclick(e) {
    e.preventDefault();
    let name = document.querySelector(".naemweb").value.trim();
    let url = document.querySelector(".url").value.trim();

    if (name == "" || url == "") {
        alert("không đúng");
        return;
    }

    let web = {
        name: name,
        url: url
    }
    // lưu vào mảng
    lisUlr.push(web);
    localStorage.setItem("ulrs", JSON.stringify(lisUlr));

    // hiển thị 
    viewWeb();

    form.style.display = "none";
    document.querySelector(".naemweb").value = "";
    document.querySelector(".url").value = "";
}


function viewWeb() {
    //lấy phần hiển thị
    let content = document.querySelector(".content");
    content.innerHTML = ``;

    lisUlr.forEach((btn, index) => {
        content.innerHTML += `
            <div class="member">
                <a href="${btn.url}">${btn.name}</a>
                <button class="deletebt" data-id="${index}">xóa</button>
            </div>
        `
    });


    let deletebtn = document.querySelectorAll(".deletebt");

    deletebtn.forEach((btn) => {
        btn.addEventListener("click", function () {
            let index = this.getAttribute("data-id");

            lisUlr.splice(index, 1);;
            localStorage.setItem("ulrs", JSON.stringify(lisUlr));
            viewWeb();
        })
    })


}
viewWeb();




