
let btnLogin = document.querySelector("#submit");

function checkLogin(event) {
    let emailElement = document.querySelector("#email").value;
    let passwordElement = document.querySelector("#password").value;

    let users = JSON.parse(localStorage.getItem("users")) || []; 

    let flag = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === emailElement && users[i].password === passwordElement) {
            alert("Đăng nhập thành công");
            localStorage.setItem("userLogin", JSON.stringify(users[i]));
            flag = true;
            break; 
        }
    }

    if (!flag) {
        alert("Email hoặc mật khẩu không đúng");
    }
}

btnLogin.addEventListener("click", checkLogin);
