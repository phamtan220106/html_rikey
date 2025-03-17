let users = [];

function validateEmail(email) {
    return email.includes('@') && (email.endsWith('.com') || email.endsWith('.vn'));
}

function validatePassword(password) {
    return password.length >= 6 && /[A-Z]/.test(password) && /[!@#$%^&*]/.test(password);
}

function register() {
    let name = prompt("Nhập tên của bạn:");
    let email = prompt("Nhập email:");
    let password = prompt("Nhập mật khẩu:");
    
    if (!validateEmail(email)) {
        alert("Email không hợp lệ!");
        return;
    }
    
    if (!validatePassword(password)) {
        alert("Mật khẩu phải có ít nhất 6 ký tự, chứa ký tự viết hoa và ký tự đặc biệt!");
        return;
    }
    
    if (users.some(user => user.email === email)) {
        alert("Email đã tồn tại!");
        return;
    }
    
    users.push({ name, email, password });
    alert("Đăng ký thành công!");
}

function login() {
    let email = prompt("Nhập email:");
    let password = prompt("Nhập mật khẩu:");
    
    let user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert(`Đăng nhập thành công!\nTên: ${user.name}\nEmail: ${user.email}`);
    } else {
        alert("Email hoặc mật khẩu không đúng!");
    }
}

function menu() {
    while (true) {
        let choice = Number(prompt(`Chọn chức năng:\n1. Đăng ký\n2. Đăng nhập\n3. Thoát`));
        switch (choice) {
            case 1:
                register();
                break;
            case 2:
                login();
                break;
            case 3:
                alert("Thoát chương trình.");
                return;
            default:
                alert("Lựa chọn không hợp lệ!");
        }
    }
}

menu();
