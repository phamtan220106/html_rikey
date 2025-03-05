let dai=+prompt("chiều dài");
let rong=+prompt("chiều rộng");


for(let i=0;i<rong;i++){
    for(let j=0;j<dai;j++){
        if(i==0 || i==rong-1 || j==0 || j==dai-1){
            document.write("*");
        }else{
            document.write("_");
        }
    }
    document.write("<br>");
}