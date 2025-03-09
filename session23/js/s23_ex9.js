let A = [], n;
let t = true;

while (t) {
    let options = Number(prompt(
        `================== MENU ===================
        
        1. Nhập số phần tử cần nhập và giá trị các phần tử
        
        2. In ra giá trị các phần tử đang quản lý
        
        3. In ra các phần tử chẵn và tính tổng
        
        4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
        
        5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
        
        6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
        
        7. Thêm một phần tử vào vị trí chỉ định
        
        0. Thoát

        ===============================================
        
        Nhập lựa chọn của bạn:`));
    switch (options) {
        case 1: {
            Array_creation(A);
            break;
        }
        case 2: {
            Present_Array(A);
            break;
        }
        case 3: {
            Even_number(A);
            break;
        }
        case 4: {
            max_min(A);
            break;
        }
        case 5: {
            prime_numbers(A);
            break;
        }
        case 6: {
            Appearances(A);
            break;
        }
        case 7: {
            Adelement(A);
            break;
        }
        default: {
            t = false;
            break;
        }
    }
}

function Array_creation(A = []) {
    n = Number(prompt("Nhập số phần tử của mảng"));
    for (let i = 0; i < n; i++) {
        A[i] = Number(prompt(`A[${i}]=`));
    }
    alert("Mảng đã được cập nhật.");
}

function Present_Array(A = []) {
    let h = A.join("; ");
    alert(h);
}

function Even_number(A = []) {
    let h = "Mảng: ";
    let sum = 0;
    let Z = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            sum += A[i];
            Z.push(A[i]);
        }
    }
    h += Z.join("; ") + `\nTổng: ${sum}`;
    alert(h);
}

function max_min(A = []) {
    let max = A[0];
    let min = A[0];
    for (let i = 0; i < A.length; i++) {
        if (A[i] > max) {
            max = A[i];
        } else if (A[i] < min) {
            min = A[i];
        }
    }
    let h = `Max: ${max}\nMin: ${min}`;
    alert(h);
}

function prime_numbers(A = []) {
    let h = "Mảng: ";
    let sum = 0;
    let Z = [];
    for (let i = 0; i < A.length; i++) {
        let check = true;
        if (A[i] < 2) {
            continue;
        }
        for (let j = 2; j <= Math.sqrt(A[i]); j++) {
            if (A[i] % j === 0) {
                check = false;
                break;
            }
        }
        if (check) {
            Z.push(A[i]);
            sum += A[i];
        }
    }
    h += Z.join("; ") + `\nTổng: ${sum}`;
    alert(h);
}

function Appearances(A = []) {
    let m = Number(prompt("Nhập một số"));
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === m) {
            count++;
        }
    }
    alert(`Số lần ${m} xuất hiện: ${count}`);
}

function Adelement(A = []) {
    let index = Number(prompt("Vị trí muốn thêm"));
    let value = Number(prompt("Giá trị"));
    if (isNaN(index) || index < 0 || index > A.length) {
        alert("Vị trí không hợp lệ.");
        return;
    }
    for (let i = A.length; i > index; i--) {
        A[i] = A[i - 1];
    }
    A[index] = value;
    alert("Phần tử đã được thêm vào mảng.");
}
