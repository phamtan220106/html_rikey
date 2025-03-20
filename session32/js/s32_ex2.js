let changecolor = document.getElementsByClassName("changecolor")[0];


let body = document.getElementsByClassName("body")[0];

changecolor.addEventListener("click" , ()=>{
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); 
    body.style.backgroundColor = randomColor;
})