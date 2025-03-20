let clickbutton = document.querySelector(".click");



let count = document.getElementsByClassName("count")[0];
let sodem = document.createElement("span"); // tạo 1 thẻ span
let i = 0;
sodem.innerHTML=`${i}`;
count.appendChild(sodem);
clickbutton.addEventListener("click", () => {
    i++;
    sodem.innerHTML = `${i}`
})

