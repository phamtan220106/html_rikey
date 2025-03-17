let Menu = {};

function addDish() {
    let category = prompt("Nhập danh mục món ăn:");
    if (!Menu[category]) {
        Menu[category] = [];
    }
    let dish = {
        name: validate(1),
        price: validate(2),
        description: validate(3)
    };
    Menu[category].push(dish);
    alert("Đã thêm món ăn.");
}

function validate(type) {
    while (true) {
        switch (type) {
            case 1: // Name
                let name = prompt("Nhập tên món ăn:");
                if (!name || name.length < 3) {
                    alert("Tên món ăn không hợp lệ");
                    continue;
                }
                return name;
            case 2: // Price
                let price = Number(prompt("Nhập giá món ăn:"));
                if (isNaN(price) || price <= 0) {
                    alert("Giá không hợp lệ");
                    continue;
                }
                return price;
            case 3: // Description
                let description = prompt("Nhập mô tả món ăn:");
                return description;
        }
    }
}

function deleteDish() {
    let name = prompt("Nhập tên món ăn cần xóa:");
    for (let category in Menu) {
        let index = Menu[category].findIndex(dish => dish.name === name);
        if (index !== -1) {
            Menu[category].splice(index, 1);
            alert("Đã xóa món ăn.");
            return;
        }
    }
    alert("Không tìm thấy món ăn.");
}

function updateDish() {
    let name = prompt("Nhập tên món ăn cần cập nhật:");
    for (let category in Menu) {
        let dish = Menu[category].find(dish => dish.name === name);
        if (dish) {
            dish.name = validate(1);
            dish.price = validate(2);
            dish.description = validate(3);
            alert("Đã cập nhật món ăn.");
            return;
        }
    }
    alert("Không tìm thấy món ăn.");
}

function viewMenu() {
    let output = "";
    for (let category in Menu) {
        output += `Danh mục: ${category}\n`;
        for (let dish of Menu[category]) {
            output += `  - ${dish.name} | ${dish.price} | ${dish.description}\n`;
        }
    }
    alert(output || "Menu trống.");
}

function searchDish() {
    let name = prompt("Nhập tên món ăn cần tìm:");
    let result = [];
    for (let category in Menu) {
        let dish = Menu[category].find(dish => dish.name.includes(name));
        if (dish) {
            result.push(`Danh mục: ${category} | ${dish.name} | ${dish.price} | ${dish.description}`);
        }
    }
    alert(result.length ? result.join('\n') : "Không tìm thấy món ăn.");
}

function menu() {
    return Number(prompt(`Chọn chức năng:
1. Thêm món ăn
2. Xóa món ăn
3. Cập nhật món ăn
4. Hiển thị menu
5. Tìm kiếm món ăn
6. Thoát`));
}

function main() {
    while (true) {
        let choice = menu();
        switch (choice) {
            case 1:
                addDish();
                break;
            case 2:
                deleteDish();
                break;
            case 3:
                updateDish();
                break;
            case 4:
                viewMenu();
                break;
            case 5:
                searchDish();
                break;
            case 6:
                alert("Thoát chương trình.");
                return;
            default:
                alert("Lựa chọn không hợp lệ.");
        }
    }
}

main();
