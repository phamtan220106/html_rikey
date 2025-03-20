let id=1;



document.getElementById("add").addEventListener("click", function(){

let name = document.getElementById("name").value;
let age = document.getElementById("age").value;
let city =document.getElementById("city").value;

if(name=="" || age=="" || city==""){
    console.log("chưa nhập dữ liệu");
    return;
}

let tablebody = document.getElementById("table-body");// lấy phần thân bảng

let newtr = document.createElement("tr");// tạo một dòng
// // children lấy số phần tử con của tablebody , => trả về số dòng
newtr.innerHTML=`
    <td>${tablebody.children.length+1}</n>
    <td>${name}</n>
    <td>${age}</n>
    <td>${city}</n>

`//thêm giá trị vào bảng

tablebody.appendChild(newtr);// thêm vào mảng , thêm dòng vào bảng

// xóa các giá trị để có thể cập nhật các người dùng tiếp theo
document.getElementById("name").value="";
document.getElementById("age").value="";
document.getElementById("city").value="";

})