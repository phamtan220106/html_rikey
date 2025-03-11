let next = true;

let list = [];
let ShoppingCart = [];
while (next) {
    let options = Number(prompt(`1: xem danh sách sản phẩm có sẵn trong cửa hàng
        2:mua sản phẩm
        3:giỏ hàng
        4:hóa đơn
        5:thoát
        0:nhập sản phẩm`));
    switch (options) {
        case 0:
            Product_Import(list);
            break;
        case 1:
            View_Products(list);
            break;
        case 2:
            ShopNow(list);
            break;
        case 3:
            View_Products(ShoppingCart);
            break;
        case 4:
            bill(ShoppingCart);
            break;
        case 5:
            next = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
}

function detail(x) { // nhập tên, số lượng, giá cả
    switch (x) {
        case 0:
            return prompt("Tên sản phẩm:");
        case 1:
            return Number(prompt("Số lượng sản phẩm:"));
        case 2:
            return Number(prompt("Giá sản phẩm:"));
        default:
            return null;
    }
}

function appear(list, str) { // kiểm tra sự tồn tại
    for (let i = 0; i < list.length; i++) {
        if (list[i][0] === str) {
            return i;
        }
    }
    return -1;
}

function Product_Import(list) { // nhập sản phẩm vào kho
    let Product_Information = [];
    for (let i = 0; i < 3; i++) {
        Product_Information[i] = detail(i);
    }
    let k = appear(list, Product_Information[0]);
    if (k !== -1) {
        list[k][1] += Product_Information[1];
    } else {
        list.push(Product_Information); // thêm sản phẩm vào cuối
    }
}

function View_Products(list) { // hiển thị danh sách sản phẩm
    let output = "";
    for (let i = 0; i < list.length; i++) {
        output += `${list[i][0]} - SL: ${list[i][1]} - Giá: ${list[i][2]} \n`;
    }
    alert(output || "Không có sản phẩm nào trong kho.");
}

function ShopNow(list) { // mua hàng
    let name = prompt("Nhập tên sản phẩm muốn mua:");
    let good = appear(list, name);
    if (good !== -1) {
        let buyprnumber = Number(prompt("Số lượng cần mua:"));
        while (buyprnumber > list[good][1]) {
            buyprnumber = Number(prompt("Sản phẩm trong kho không đủ, vui lòng chọn lại:"));
        }
        list[good][1] -= buyprnumber; // giảm số lượng trong kho

        let newid = appear(ShoppingCart, name); // kiểm tra giỏ hàng

        if (newid !== -1) { // nếu đã có trong giỏ hàng, tăng số lượng
            ShoppingCart[newid][1] += buyprnumber;
        } else { // nếu chưa có, thêm vào giỏ hàng
            ShoppingCart.push([name, buyprnumber, list[good][2]]);
        }
        alert("Sản phẩm đã được thêm vào giỏ hàng!");
    } else {
        alert("Không có sản phẩm trong kho, vui lòng chọn sản phẩm khác.");
    }
}

function bill(list) {
    let output = "";
    let sum=0;
    for (let i = 0; i < list.length; i++) {
        sum+=list[i][2]*list[i][1];
        output += `${list[i][0]} - SL: ${list[i][1]} - Giá: ${list[i][2]} \n`;
    }
    output+=`\nTổng hóa đơn: ${sum}`;
    alert(output || "giỏ hàng trống mua hàng đi.");
}