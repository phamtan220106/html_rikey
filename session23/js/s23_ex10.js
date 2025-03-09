let A = [], n;
let t = true;

while (t) {
    let options = Number(prompt(
        `================== MENU ==================
        
        1. Nhập số phần tử cần nhập và giá trị các phần tử
        
        2. In ra giá trị các phần tử đang quản lý
        
        3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần
        
        4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng
        
        5. In ra các số nguyên tố trong mảng và tính tổng
        
        6. Nhập một số và đếm số lần xuất hiện trong mảng
        
        7. Thêm một phần tử vào vị trí chỉ định
        
        8. Xóa một phần tử theo giá trị
        
        9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần
        
        0. Thoát

        =============================================
        
        Nhập lựa chọn của bạn:`));
    switch (options) {
        case 1:
            Array_creation(A);
            break;
        case 2:
            Present_Array(A);
            break;
        case 3:
            Even_number(A);
            break;
        case 4:
            max_min(A);
            break;
        case 5:
            prime_numbers(A);
            break;
        case 6:
            Appearances(A);
            break;
        case 7:
            Adelement(A);
            break;
        case 8:
            delet(A);
            break;
        case 9:
            arrange(A);
            break;
        default:
            t = false;
            break;
    }

}

function Array_creation(A = []) {
    n = Number(prompt("nhập số phần tử của mảng"));
    for (let i = 0; i < n; i++) {
        A[i] = Number(prompt(`A[${i}]=`));
    }
    alert("mảng đã được cập nhật.");
}

function Present_Array(A = []) {
    let h = A.join("; ");
    alert(h);
}

function softG(A = []) {
    let max;
    let index;
    for (let i = 0; i < A.length - 1; i++) {
        max = A[i];
        index = i;
        for (let j = i + 1; j < A.length; j++) {
            if (A[j] > max) {
                max = A[j];
                index = j;
            }
        }
        A[index] = A[i];
        A[i] = max;
    }
}

function softT(A = []) {
    let min;
    let index;
    if (A.length === 0) {
        alert("mảng rỗng.");
        return;
    }
    for (let i = 0; i < A.length - 1; i++) {
        min = A[i];
        index = i;
        for (let j = i + 1; j < A.length; j++) {
            if (A[j] < min) {
                min = A[j];
                index = j;
            }
        }
        A[index] = A[i];
        A[i] = min;
    }
}

function Even_number(A = []) {
    let h = "mảng: ";
    let sum = 0;
    let Z = [];
    if (A.length === 0) {
        alert("mảng rỗng");
        return;
    }
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            sum += A[i];
            Z.push(A[i]);
        }
    }
    softT(Z);
    h += Z.join("; ") + `\ntong: ${sum}`;
    alert(h);
}

function max_min(A = []) {
    let max = A[0];
    let ind1 = 0;
    let ind2 = 0;
    let min = A[0];
    for (let i = 0; i < A.length; i++) {
        if (A[i] > max) {
            max = A[i];
            ind1 = i;
        } else if (A[i] < min) {
            min = A[i];
            ind2 = i;
        }
    }
    let h = `
        max: ${max} vị trí: ${ind1}
        min: ${min} vị trí: ${ind2}`
    alert(h);
}

function prime_numbers(A = []) {
    let h = "mảng: ";
    let sum = 0;
    let Z = [];
    let check;
    for (let i = 0; i < A.length; i++) {
        check = true;
        if (A[i] < 2) {
            continue;
        }
        for (let j = 2; j <= Math.sqrt(A[i]); j++) {
            if (A[i] % j == 0) {
                check = false;
                break;
            }
        }
        if (check) {
            Z.push(A[i]);
            sum += A[i];
        }
    }
    softT(Z);
    h += Z.join("; ") + `\ntong: ${sum}`;
    alert(h);

}

function Appearances(A = []) {
    let m = Number(prompt("nhập một số"));
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === m) {
            sum += 1;
        }
    }
    alert(` số lần ${m} xuất hiện: ${sum}`);
}

function Adelement(A = []) {
    let index = Number(prompt("vị trí muốn thêm"));
    let value = Number(prompt("giá trị"));

    if (isNaN(index) || index < 0 || index > A.length) {
        alert("Vị trí không hợp lệ.");
        return;
    }
    for (let i = A.length; i > index; i--) {
        A[i] = A[i - 1];
    }
    A[index] = value;
}

function delet(A = []) {
    let cont = 0;
    let value = Number(prompt("giá trị muốn xóa:"));
    for (let i = 0; i < A.length;) {
        if (A[i] === value) {
            A.splice(i, 1);
            cont++;
        } else {
            i++;
        }
    }
    if (cont === 0) {
        alert(`ko có phần tử đó trong mảng`)
    } else {
        alert(` đã xóa ${cont} phần tử ${value}`);
    }
}
function arrange(A = []) {
    let l = true;
    while (l) {
        let kk = Number(prompt(
            `1: tăng dần
             2: giảm dần
             != : thoát`));
        switch (kk) {
            case 1:
                softT(A);
                l = false;
                break;
            case 2:
                softG(A);
                l = false;
                break;
            default:
                alert("lựa chọn hkoong hợp lệ:");
                break;
        }
    }
}