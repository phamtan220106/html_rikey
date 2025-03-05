
let a = parseFloat(prompt("Nhập số a:"));
let b = parseFloat(prompt("Nhập số b:"));
let c = parseFloat(prompt("Nhập số c:"));

if (a === 0) {
  if (b === 0) {
    console.log(c === 0 ? "Phương trình có vô số nghiệm." : "Phương trình vô nghiệm.");
  } else {
    console.log("Phương trình có nghiệm: x = " + (-c / b));
  }
} else {
  let delta = (b*b) - (4*a*c);
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2*a);
    let x2 = (-b - Math.sqrt(delta)) / (2*a);
    console.log("Phương trình có 2 nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2);
  } else if (delta === 0) {
    console.log("Phương trình có nghiệm kép: x = " + (-b / (2 * a)));
  } else {
    console.log("Phương trình vô nghiệm.");
  }
}
