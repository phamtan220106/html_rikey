let N = prompt("nhập 1 chuỗi số liên tiến và thiếu một sô");

N = N.split("").map(Number);
let B = N.join(", ");

for (let i = 0; i < N.length; i++) {
    if (N[i] + 1 == N[i+1]) {
        continue;
    } else {
        alert(` số còn thiếu trong dãy số của bạn
                 ${B} : ${N[i] + 1}`);
        break;
    }
}

