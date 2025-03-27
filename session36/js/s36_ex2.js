


let foodlist = JSON.parse(localStorage.getItem("foodlist")) || [];


let container = document.querySelector(".container");

function viewfood() {
    container.innerHTML = "";
    foodlist.forEach((a, index) => {
        container.innerHTML += `
        <div class="food">
            <img src="${a.image}"
                alt="${a.image}">
            <div class="info">
                <div class="name">${a.name}</div>
                <div class="numberlike">❤️ lượt thích:${a.likes}</div>
                <button class="like" data-id="${index}">like</button>
            </div>
        </div>
        `
    });

    let likebtn = document.querySelectorAll(".like");
    likebtn.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            let index = button.getAttribute("data-id");
            foodlist[index].likes++;
            localStorage.setItem("foodlist", JSON.stringify(foodlist));
            viewfood();
        });
    });
}
viewfood();
