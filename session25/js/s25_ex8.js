function hasAnumber(A) {
    let t = false;
    for (let i = 0; i < A.length; i++) {
        if (!isNaN(A[i])) {
            t = true;
            break;
        }
    }
    return t;
}
function CharacterNumber(A) {
    let t;
    A.length >= 8 ? t = true : t = false;
    return t;
}

function uppercaseletters(A){
    let t = false;
    for (let i = 0; i < A.length; i++) {
        if (A[i] >= 'A' && A[i] <= 'Z') {
            t = true;
            break;
        }
    }
    return t;
}

function check(A) {
    let t = false;
    if (hasAnumber(A) && CharacterNumber(A) && uppercaseletters(A)) {
        t = true;
    }
    return t;
}

let password = String(prompt("nhập mật khẩu ngân hàng của bạn:"));
let hh=check(password);
if(hh){
    alert("true");
}else{
    alert("false");
}