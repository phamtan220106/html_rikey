let n = String(prompt("số phần tử"));
let Arr = [];

for (let i = 0; i < n; i++) {
    Arr[i] = String(prompt(`chuỗi Arr[${i}]: `));
}

const newArr=Arr.filter(a => a.length>=5);
alert(newArr);

function check(str){
    if(str.length>=5){
        return true;
    } else {
        return false;
    }
}
let h="";

for (let i = 0; i < n; i++) {
    if(check(Arr[i])){
        h+=`"${Arr[i]}"\n `;
    }
}
alert(h);
