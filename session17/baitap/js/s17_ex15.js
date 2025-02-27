let r = parseFloat(prompt("bán kính hình tròn:"));

const pi=Math.PI;
let Vcau = (4*pi*Math.pow(r,3)/3).toFixed(5);
let Smatcau = (4*pi*Math.pow(r,2)).toFixed(5);
let cmax= (2*pi*r).toFixed(3);

document.write("Thể tích hình cầu: " + Vcau + "<br>");
document.write("diện tích mặt cầu: " + Smatcau + "<br>");
document.write("bán kính lớn nhất: " + cmax + "<br>");