let N =prompt("nhập 1 số");


if(!isNaN(N) && N>=0){
    for(let i=5;i<=N;i++){
        if(i%5==0){
            document.write(i+"<br>");
        }
    }
}else{
    alert("không hợp lệ");
}