let a = prompt("nhap vao");
let b = a.split("");

let max = 0;
for (let i = 0; i < b.length; i++) {
    if (isNaN(b[i])) {
        console.log("Day so khong hop le");
        break;
    } else {
        max = Math.max(b[i]);
    }
}
console.log(max+" la so lon nhat trong day");