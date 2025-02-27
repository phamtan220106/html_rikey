let r = parseFloat(prompt("bán kính đáy:"));
let h = parseFloat(prompt("chiều cao:"));
const pi = Math.PI;

let sday = pi*Math.pow(r,2);
let sxq = 2*pi*r*h;
let c=2*pi*r;
let v = sday*h;
let stp=sday*2+sxq;
document.write("bán kính"+ r +"<br>chiều cao:" +h+"<br>");
document.write("Diện tích xung quanh: "+sxq.toFixed(2)+"<br><br>");
document.write("Diện tích toàn phần: "+stp.toFixed(2)+"<br><br>");
document.write("thể tích hình trụ: "+v.toFixed(2)+"<br><br>");
document.write("chu vi đáy: "+ c.toFixed(2)+"<br><br>");