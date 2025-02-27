let money = parseFloat(prompt("Nhập số tiền gửi:"));
let month = parseFloat(prompt("Nhập số tháng gửi:"));

let rate = 0.043; 
let time = (month / 12);

let A = money * Math.pow((1 + rate), time); 

document.write("Số tiền nhận lại là: " + A.toFixed(2) + " VND");
