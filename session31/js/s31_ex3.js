let big = document.getElementsByClassName("big")[0];
let green = document.getElementsByClassName("green")[0];
let red = document.getElementsByClassName("red")[0];
let purple = document.getElementsByClassName("purple")[0];

green.onclick = function(){
    big.classList.remove("red","purple")
    big.classList.toggle("green");
}

red.onclick = function() {
    big.classList.remove("green","purple")
    big.classList.toggle("red");
}

purple.onclick = function() {
    big.classList.remove("green","red")
    big.classList.toggle("purple");
}

