let n = String(prompt("số phần tử"));
let h = "";

for (let i = 0; i < n; i++) {
    let haha = String(prompt("email: "));
    haha = Clearwhitespace(haha);
    if (checkemail(haha)) {
        h +=`\n${haha}`;
    }
}
alert(h);

function Clearwhitespace(A) {
    let m = true;
    while (m) {
        if (A[0] === " ") {
            A = A.substring(1);
        }
        if (A[A.length - 1] === " ") {
            A = A.substring(0, A.length - 1);
        }
        if (A[0] !== " " && A[A.length - 1] !== " ") {
            m = false;
        }
    }
    return A;
}

function checkemail(str) {
    let com = "com";
    let net = "net";
    let space = str.includes(" ");
    if (space) {
        return false;
    }

    let newArr = str.split(".");

    let k = newArr.length - 1;
    if (newArr[k] == com || newArr[k] == net) {
        if (newArr[k - 1].includes('@')) {
            let o = newArr[k - 1].split("@");
            let length_o = o.length - 1;
            if (o[length_o] === "gmail" || o[length_o] === "domain") {
                return true;
            }
        }
    }
    return false;
}
