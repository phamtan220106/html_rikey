let N =prompt("nhập 1 số");
let sum=0;
if(!isNaN(N)){
    for(let i=1; i<=N;i++){
        sum+=i;
    }
    alert(sum);
}else{
    alert("không đúng định dạng")
}