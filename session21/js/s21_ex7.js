let intMoney = parseFloat(prompt("Số tiền ban đầu"));
let Interest = parseFloat(prompt("Lãi suất hàng tháng (%)")) / 100; 
let month = parseInt(prompt("Số tháng gửi"), 10);

if (isNaN(intMoney) || isNaN(Interest) || isNaN(month) || intMoney <= 0 || Interest < 0 || month <= 0) {
    document.write("Vui lòng nhập dữ liệu hợp lệ.");
} else {
    let outMoney = intMoney * Math.pow((1 + Interest), month);
    let interestMoney = outMoney - intMoney;

    document.write(`Số tiền lãi: ${interestMoney.toFixed(4)} VND <br>`);
    document.write(`Số tiền thu được: ${outMoney.toFixed(4)} VND`);
}

