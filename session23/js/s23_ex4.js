let a=[];
let n = prompt("nhap so luong phan tu can them");
let sum=[];
for(let i =0; i<=n; i++){
    if(n =0){
        console.log("khong co ki tu");   
    }
    a[i]=prompt();
    if(a[i] >= 0 && a[i] <= 9){
        sum.push(a[i]);
    }
}
console.log(sum);