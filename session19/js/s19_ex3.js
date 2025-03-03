let procedure = +prompt("1:VND-->USD<br>2:USD-->VND");
let money, x;

switch (procedure) {
    case 1:
        money = parseFloat(prompt("số tiền muốn chuyển đổi"));
        x = money / 23000;
        alert(money + " VND -->" + x + " USD");
        break;
    case 2:
        money = parseFloat(prompt("số tiền muốn chuyển đổi"));
        x = money * 23000;
        alert(money + " VND -->" + x + " USD");
        break;
    default:
        alert("không hợp lệ")
}