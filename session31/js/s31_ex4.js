let modal = document.getElementsByClassName("Modal")[0];

let button = document.getElementsByClassName("button")[0];


let search = document.getElementsByClassName("search")[0];

let x = document.getElementsByClassName("x")[0];

button.onclick = function(){
    search.style.display = "flex";
    modal.style.backgroundColor = "rgb(236, 236, 236)";
}


x.onclick = function(){
    search.style.display = "none";
    modal.style.backgroundColor = "white";
}