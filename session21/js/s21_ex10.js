let n=+prompt("n");
if(Number.isInteger(n)){
    for(let i=0;i<n;i++){
        document.write(i+(i==n-1?"":", "));
    }
}