let listdirectory = [];



// tạo sự kiện khi ấn nút thêm

function clickAdd() {

    // lấy giá trị từ người dùng.
    let nameElement = document.getElementsByClassName("name")[0].value;
    let nameDirectory = document.getElementsByClassName("directory")[0].value;

    // validate nhẹ
    if (nameElement == "" || nameDirectory == "") {
        alert("không hợp lệ");
        return;
    }

    // thêm giá trị vào đối tượng
    let content = {
        name: nameElement,
        directory: nameDirectory
    }


    // thêm đối tượng vào mảng
    listdirectory.push(content);


    // xáo giá trị trên ô nhập
    document.getElementsByClassName("name")[0].value = "";
    document.getElementsByClassName("directory")[0].value = "";
}


// tạo sự kiện khi ấn nút lọc

function filter_btn() {
     

    // lấy thẻ ul
    let ul=document.getElementsByClassName("ul")[0];
    ul.innerHTML=``;

    // lấy giá trị từ select
    let selectvalue = document.getElementById("select").value;

    // lọc mảng có đúng danh mục
    let newArr = listdirectory.filter(A => A.directory == selectvalue);

    for(let i=0; i<newArr.length; i++){
        // tạo 1 thẻ li
        let li=document.createElement("li");

        //thêm giá trị vào thẻ
        li.innerHTML=`Tên:_${newArr[i].name}______Danh mục: ${newArr[i].directory}`;

        // thêm thẻ vào ul
        ul.appendChild(li);
    }

}

document.getElementsByClassName("add")[0].addEventListener("click", clickAdd);

document.getElementsByClassName("filter-btn")[0].addEventListener("click", filter_btn);