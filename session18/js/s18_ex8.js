let a = Number(prompt("cạnh a"));
let b = Number(prompt("cạnh b"));
let c = Number(prompt("cạnh c"));


function check(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return false;
    } else {
        return true;
    }
}

function socanhbangnhau(a, b, c) {
    let g = 0;
    if (a == b || a == c || b == c) {
        if (a == b && a == c) {
            return 3;
        } else {
            return 2;
        }
    } else {
        return 0;
    }
}

function classify(a, b, c) {
    let p = socanhbangnhau(a, b, c);
    if (p == 3) {
        alert("tam giác đều");
    } else if (p == 2) {
        alert("tam giac cân");
    } else {
        if ((Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) || (Math.pow(a, 2) + Math.pow(c, 2) == Math.pow(b, 2)) || (Math.pow(c, 2) + Math.pow(b, 2) == Math.pow(a, 2))) {
            alert("tam giác vuông");
        } else {
            alert("tam giac thương");
        }
    }
}
check(a,b,c)?classify(a,b,c):alert("không phải tam giác");
