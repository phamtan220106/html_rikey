let used = "huanrose@gmail.com";
let pass = "123456";

document.querySelector(".login").addEventListener("click", function (event) {
    event.preventDefault(); 

    let usedname = document.querySelector(".usedname").value;
    let password = document.querySelector(".password").value;

    if (usedname !== used || password !== pass) {
        console.log("không hợp lệ");
        return;
    }

    console.log("đăng nhập thành công");
});
