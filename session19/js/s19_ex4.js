let a = +prompt("một số");

if (!isNaN(a)) {
    if (a % 3 == 0 && a % 5 == 0) {
        alert("chia hết cho 3 và 5")
    } else if (a % 3 == 0) {
        alert("chia hết cho 3, không chia hết cho 5");
    } else if (a % 5 == 0) {
        alert("chia hết cho 5, không chia hết cho 5");
    } else {
        alert("không chia hết cho cả 3 và 5")
    }
}else{
    alert("không phải số");
}

