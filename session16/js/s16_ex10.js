let one = parseFloat(prompt("nb1"));
let two = parseFloat(prompt("nb2"));

let min = Math.min(one, two);
let max = Math.max(one, two);

let ha = Math.floor(Math.random() * (max - min + 1) + min);
document.write(ha);