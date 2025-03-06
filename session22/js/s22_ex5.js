let a =[1,2,3,4,5];
let totalChan=0;
let totalLe=0;
for(let i =0; i<a.length;i++){
    if(a[i]%2==0){
        totalChan+=a[i]
    }else{
        totalLe+=a[i]
    }
}
console.log(totalChan);
console.log(totalLe);
