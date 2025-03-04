let a = +prompt("a");
let b = +prompt("b");
let c=1;

if (!isNaN(a) && !isNaN(b)) {
    for(let i=1;i<=Math.abs(b);i++){
        b>0?c*=a:c*=(1/a);
    }
    alert(c);
}else{
    alert("không phải số nguyên");
}