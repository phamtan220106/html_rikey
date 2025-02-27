let one=new Date(prompt("năm"),prompt("tháng"),prompt("ngày"));
let two=new Date(prompt("năm"),prompt("tháng"),prompt("ngày"));

let x=Math.min(one,two);
let y=Math.max(one,two);

let chechlech= Math.ceil((y-x)/(1000 * 60 * 60 * 24));
alert(chechlech);
