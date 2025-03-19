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
    newli.textContent = myinput;
    myul.appendChild(newli);

    document.getElementById("myInput").value = "";
})

