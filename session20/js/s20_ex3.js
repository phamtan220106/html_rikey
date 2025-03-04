let N = +prompt("Nhập một số");

if (!isNaN(N)) {
    let k = N;
    let test = 0;
    while (k !== 0) {
        test = test * 10 + (k % 10);
        k = Math.floor(k / 10);
    }

    if (test === N) {
        alert(`${N} là số đối xứng`);
    } else {
        alert(`${N} không phải số đối xứng`);
    }
} else {
    alert("Không hợp lệ");
}
