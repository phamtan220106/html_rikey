let number = +prompt("nhập vào môt số");
let A = Math.sqrt(number);
let B =Math.floor(Math.sqrt(number));

if(A!=B){
    alert("không phải số chính phương");
}else{
    alert("là số chính phương");
}