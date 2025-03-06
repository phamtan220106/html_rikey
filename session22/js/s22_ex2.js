
let a = [1,2,3,4,5];
let b = parseInt(prompt("nhap vao"));
let flag = false;
for(let i = 0; i<a.length; i++){
    if(a[i] == b){
        flag = true
        break;
    }
}
if(flag){
    console.log("Bingo");
}else{
    console.log("Chuc ban may man lan sau");
}
