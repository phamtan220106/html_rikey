let username = prompt("Nhập tên của bạn:");

function login(username) {
    if (username === null) {
        alert("Cancelled");
    } else if (username === "ADMIN") {
        let password = prompt("Nhập mật khẩu:");
        
        if (password === "TheMaster") {
            alert("Welcome");
        } else if (password === null) {
            alert("Cancelled");
        } else {
            alert("Wrong password");
        }
    } else {
        alert("I don't know you");
    }
}
login(username);

