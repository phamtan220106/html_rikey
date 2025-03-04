let a = +prompt("a");
let dem=0;
if(Number.isInteger(a)){
    for(let i=2; i<=Math.sqrt(a);i++){
        if(a%i==0){
            dem=1;
            break;
        }else{
            continue;
        }
    }
    if(dem==1){
        alert("không phải số nguyê tố");
    }else{
        alert("là số nguyên tố");
    }
}else{
    alert("không phải số");
}