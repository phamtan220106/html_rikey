let hour = Number(prompt("hour"));
let minute = Number(prompt("minute"));
let second = Number(prompt("second"));


function addTozero(a) {
    if (a < 10) {
        return "0" + a;
    } else {
        return a;
    }
}
function readtime(x, y, z) {
    if (hour <= 12) {
        alert(addTozero(x)+":"+addTozero(y)+":"+addTozero(z)+"  AM");
    }else{
        x=x-12;
        alert(addTozero(x)+":"+addTozero(y)+":"+addTozero(z)+"  PM");
    }
}

if ((hour < 0 || hour > 24) && (minute < 0 || minute > 60) (second < 0 || second > 60) ){
    alert("không hợp lệ !!!");
} else {
    readtime(hour,minute,second);
}

