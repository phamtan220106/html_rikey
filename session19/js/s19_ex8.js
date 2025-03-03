let month=+prompt("nhập tháng bất kì");

if(month>=1 && month<=12){
    if(month>=1 && month<=3){
        alert("spring");
    }else if(month>=4 && month<=6){
        alert("summer");
    }else if(month>=7 && month<=9){
        alert("Autumn");
    }else if(month>=10 && month<=11){
        alert("winter");
    }
}else{
    alert("tháng không hợp lệ");
}
