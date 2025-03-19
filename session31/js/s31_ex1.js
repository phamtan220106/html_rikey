let hide = document.getElementById("hide");
let show = document.getElementById("show");
let text =document.getElementById("text");


hide.onclick = function(){
    text.style.display = "none";
}


show.onclick = function(){
    text.style.display = "block";
}

