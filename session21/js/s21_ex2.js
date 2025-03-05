
let sumchan =0;
let sumle =0;
for(let i =0 ; i<5; i++){
    let a = parseInt(prompt("nhap vao"));
    if(a%2 ==0){
        sumchan++; 
    }else{
        sumle++;
    }
}
console.log("So chan la:",sumchan);
console.log("So le la:",sumle);
