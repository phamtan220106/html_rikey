
let a = [1,22,23,4,5,6];
let max=0;
let index=0;
for(let i = 0; i<a.length; i++){
    if(a[i]>max){
        max=a[i];
        index=i;
    }
}
console.log(max);
console.log(index);
