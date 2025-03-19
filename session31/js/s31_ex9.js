document.querySelector(".addBtn").addEventListener("click", function () {
    let myinput = document.getElementById("myInput").value;
    if (myinput == "") {
        alert("không hợp lệ");
        return;
    }
    let myul = document.getElementById("myUL");

    let newli = document.createElement("li");
    // thêm gạch ngnag
    newli.addEventListener("click", function(){
        newli.classList.add("checked");
    });

    //thêm nút x
    let deletElement=document.createElement("span");// tạo 1 thẻ span
    deletElement.textContent= "X";
    deletElement.classList.add("close");


    // xóa li khi click x
    deletElement.addEventListener("click", function(event){
        event.stopPropagation();
        this.parentElement.remove();// tìm cha của x và loại bỏ nó
    })

    newli.appendChild(deletElement);
    newli.insertBefore(document.createTextNode(myinput), deletElement);
    myul.appendChild(newli);

    document.getElementById("myInput").value = "";
})

