let x=+prompt("nhập 1 số");


function check(n) {
    let test;
    if (n < 2) {
        test = false;
    } else if (n == 3 || n == 2) {
        test = true;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                test = false;
                break;
            } else {
                test = true;
                continue;
            }
        }
    }
    return test;
}
 if(!isNaN(x)){
    if(check(x)){
        alert("số nguyên tố");
    }else{
        alert("không phải số nguyên tố");
    }
 }else{
    alert("không pahir số");
 }