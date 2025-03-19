let button = document.getElementById("click"); // Lấy button
let div = document.getElementsByClassName("toggle"); // Lấy div cần đổi màu

button.onclick = function () {
   div[0].classList.toggle("light-mode");
};
