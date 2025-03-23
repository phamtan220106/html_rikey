


let click = document.querySelector(".check");

click.addEventListener("click", () => {
    let content = document.querySelector(".content");
    content.innerHTML = ``;
    let inputtext = document.querySelector("#texxt").value;
    let sokitu = inputtext.length;

    let newtext = document.createElement("div");

    newtext.innerHTML = ` số kí tự: ${sokitu}`;

    content.appendChild(newtext);
    

})

document.querySelector("#texxt").addEventListener("click", () => {
    document.querySelector("#texxt").value = "";
})
