const nameInput = document.getElementById("name");
const positionInput = document.getElementById("position");
const addBtn = document.getElementById("add-btn");
const employeeList = document.getElementById("employee-list");

// Khi tải trang, lấy dữ liệu từ Local Storage và hiển thị
document.addEventListener("DOMContentLoaded", () => {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.forEach(addEmployee);
});

// Sự kiện khi nhấn nút "Thêm nhân viên"
addBtn.addEventListener("click", () => {
    let name = nameInput.value.trim();
    let position = positionInput.value.trim();

    if (name && position) {
        let employee = { name, position };
        addEmployee(employee);
        saveEmployee(employee);
        
        // Xóa nội dung input sau khi thêm
        nameInput.value = "";
        positionInput.value = "";
    }
});

// Hàm thêm nhân viên vào bảng
function addEmployee(employee) {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${employeeList.children.length + 1}</td>
        <td>${employee.name}</td>
        <td>${employee.position}</td>
        <td><button onclick="deleteEmployee(this)">Xóa</button></td>
    `;
    employeeList.appendChild(row);
}

// Hàm lưu nhân viên vào Local Storage
function saveEmployee(employee) {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
}

// Hàm xóa nhân viên
function deleteEmployee(button) {
    let row = button.parentElement.parentElement;
    let name = row.children[1].textContent;
    
    row.remove(); // Xóa trên giao diện

    // Xóa khỏi Local Storage
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees = employees.filter(emp => emp.name !== name);
    localStorage.setItem("employees", JSON.stringify(employees));
}