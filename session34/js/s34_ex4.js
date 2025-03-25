const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Khi tải trang, lấy dữ liệu từ Local Storage và hiển thị
document.addEventListener("DOMContentLoaded", () => {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(addTodo);
});

// Sự kiện khi nhấn nút "Thêm"
addBtn.addEventListener("click", () => {
    let text = input.value.trim();
    if (text) {
        addTodo(text);
        saveTodo(text);
        input.value = ""; // Xóa nội dung input sau khi thêm
    }
});

// Hàm thêm công việc vào danh sách
function addTodo(text) {
    let li = document.createElement("li");
    li.innerHTML = `${text} <button onclick="deleteTodo(this)">Xóa</button>`;
    todoList.appendChild(li);
}

// Hàm lưu công việc vào Local Storage
function saveTodo(text) {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(text);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Hàm xóa công việc
function deleteTodo(button) {
    let li = button.parentElement;
    let text = li.textContent.replace("Xóa", "").trim();
    li.remove();

// Xóa khỏi Local Storage
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos = todos.filter(todo => todo !== text);
    localStorage.setItem("todos", JSON.stringify(todos));
}