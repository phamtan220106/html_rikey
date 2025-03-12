function checkdate(day, month, year) {
    day = Number(day);
    month = Number(month);
    year = Number(year);

    if (year < 1 || !Number.isInteger(year)) return false;

    if (month < 1 || month > 12 || !Number.isInteger(month)) return false;

    let daysInMonth = [31, (LeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day < 1 || day > daysInMonth[month - 1] || !Number.isInteger(day)) return false;

    return true;
}

function LeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function DateSeparation(str) {
    let B = str.split("-");
    if(checkdate(B[2],B[1],B[0])){
        let flag=B[0];
        B[0]=B[2];
        B[2]=flag;
        listdate.push(B);
    }
}
let n = Number(prompt("nhập số ngày tháng"));

let listdate = [];

for (let i = 0; i < n; i++) {
    let str=String(prompt("yyyy-mm-dd"));
    DateSeparation(str);
}

let h="";
for(let i=0; i<listdate.length; i++){
    h+=listdate[i].join("/")+"\n";
}
alert(h);

