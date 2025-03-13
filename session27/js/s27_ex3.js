
let running = true;
while (running) {
    let choice = getChoice();
    switch (choice) {
        case 1:
            calculateCircleArea();
            break;
        case 2:
            calculateCircleCircumference();
            break;
        case 3:
            calculateRectangleArea();
            break;
        case 4:
            calculateRectanglePerimeter();
            break;
        case 5:
            running = false;
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }
}

function getChoice() {
    return Number(prompt(
        "Chọn chức năng:\n" +
        "1: Tính diện tích hình tròn\n" +
        "2: Tính chu vi hình tròn\n" +
        "3: Tính diện tích hình chữ nhật\n" +
        "4: Tính chu vi hình chữ nhật\n" +
        "5: Thoát"
    ));
}

function getRadius() {
    let r = Number(prompt("Nhập bán kính hình tròn:"));
    return r > 0 ? r : invalidInput();
}

function getRectangleDimensions() {
    let width = Number(prompt("Nhập chiều rộng hình chữ nhật:"));
    let height = Number(prompt("Nhập chiều dài hình chữ nhật:"));
    return width > 0 && height > 0 ? { width, height } : invalidInput();
}

function invalidInput() {
    alert("Dữ liệu không hợp lệ!");
    return null;
}

function calculateCircleArea() {
    let r = getRadius();
    if (r) alert(`Diện tích hình tròn: ${Math.PI * r * r}`);
}

function calculateCircleCircumference() {
    let r = getRadius();
    if (r) alert(`Chu vi hình tròn: ${2 * Math.PI * r}`);
}

function calculateRectangleArea() {
    let dimensions = getRectangleDimensions();
    if (dimensions) alert(`Diện tích hình chữ nhật: ${dimensions.width * dimensions.height}`);
}

function calculateRectanglePerimeter() {
    let dimensions = getRectangleDimensions();
    if (dimensions) alert(`Chu vi hình chữ nhật: ${2 * (dimensions.width + dimensions.height)}`);
}

