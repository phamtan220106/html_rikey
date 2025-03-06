
let a = [2,3,4,3,3,3,6,4,5,3];
let b = prompt("nhap vao di");
let count=0;
for(let i = 0; i<a.length;i++){
    if(b==a[i]){
        count++
    }
}
if(count ===0){
    console.log("So nay khong ton tai");
}else{
    console.log(`So ${b} xuat hien ${count} lan`);
}
