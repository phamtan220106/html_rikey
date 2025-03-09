let a=[];
let n = prompt("nhap so luong phan tu can them");
let sum=0;
for(let i =0; i<=n; i++){
    a[i]=prompt();
    if(a[i] < 0){
        sum++;
    }
}
console.log("tong so phan tu < 0 la: "+sum);