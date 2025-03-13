let running = true;
let A = [];
let type = 1;
while (running) {
    let choice = getChoice();
    switch (choice) {
        case 1:
            A = inputA();
            break;
        case 2:
            Bosstype();
            break;
        case 3:
            output(A);
            break;
        case 4:
            Evennumber(A, type);
            break;
        case 5:
            oddnumbers(A, type);
            break;
        case 6:
            running = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
}

function getChoice() {
    return Number(prompt(
        "Chọn chức năng:\n" +
        "1: nhập vào mảng\n" +
        "2: kiểu sắp sếp\n" +
        "3: hiển thị mảng\n" +
        "4: sắp sếp chỉ các phần tử chẵn\n" +
        "5: sắp sép chỉ các phần tử lẻ\n" +
        "6: thoát"
    ));
}


function inputA() {
    let t = [];
    let n = Number(prompt("nhập số phần tử trong mảng"));
    for (let i = 0; i < n; i++) {
        t[i] = Number(prompt(`A[${i + 1}]`));
    }
    return t;
}

function output(A) {
    let h = A.map((value) => `${value}`).join(", ");
    alert(h);
}

function Bosstype() {//chọn loại sắp sếp
    let flag = true;
    while (flag) {
        let t = Number(prompt("1: sắp sếp tăng dần\n2: sắp sếp giảm dần"));
        switch (t) {
            case 1:
                type = 1;
                flag = false;
                break;
            case 2:
                type = 2;
                flag = false;
                break;
            default:
                alert("không hợp lệ")
                break;
        }
    }
}

function sortA(A, x) {//sắp sếp
    if (x == 1) {
        A.sort((a, b) => a - b);
    } else {
        A.sort((a, b) => b - a);
    }
    return A;
}

function Evennumber(A, x) {// số chẵn
    let B = [...A];
    let C = B.filter(value => value % 2 == 0);
    C = sortA(C, x);
    B = B.map(a => a % 2 == 0 ? a = "_" : a);
    for (let i = 0; i < C.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (B[j] == "_") {
                B[j] = C[i];
                break;
            }
        }
    }
    let h = B.map(a => `${a}`).join(", ");
    alert(h);
}

function oddnumbers(A, x) {// só lẻ
    let B = [...A];
    let C = B.filter(x => x % 2 != 0);
    C = sortA(C, x);
    B = B.map(a => a % 2 != 0 ? a = "_" : a);
    for (let i = 0; i < C.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (B[j] == "_") {
                B[j] = C[i];
                break;
            }
        }
    }
    let h = B.map(a => `${a}`).join(", ");
    alert(h);
}

