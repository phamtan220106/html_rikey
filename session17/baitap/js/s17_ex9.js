let a = +prompt("hệ số a:");
let b = +prompt("hệ số b:");
let c = +prompt("hệ số c:");

let delta = Math.pow(b, 2) - 4 * a * c;
if (a == 0) {
    if (b == 0 && c != 0) {
        alert("vô nghiệm");
    } else {
        let x = -c / b;
        alert(x.toFixed(2));
    }
} else {
    if (delta < 0) {
        alert("vô nghiệm");
    } else if(delta == 0){
        let x = -b / (2 * a);
        alert(x.toFixed(2));
    }else {
        let x1 = (-b - Math.sqrt(delta)) / (2 * a);
        let x2 = (-b + Math.sqrt(delta)) / (2 * a);
        alert(x1.toFixed(2) + " và" + x2.toFixed(2));
    }
}