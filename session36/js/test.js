let foodlist = JSON.parse(localStorage.getItem("foodlist")) || [];

if (foodlist.length === 0) {
    foodlist = [
        {
            name: "Phở Bò",
            image: "https://th.bing.com/th/id/OIP.SmqpEWuOzW3XBYfc4uhppQHaE8?rs=1&pid=ImgDetMain",
            likes: 120
        },
        {
            name: "Bánh Mì",
            image: "https://th.bing.com/th/id/OIP.IxSQxenayDYM2oZcHwj7PgHaEo?rs=1&pid=ImgDetMain",
            likes: 95
        },
        {
            name: "Gỏi Cuốn",
            image: "https://th.bing.com/th/id/OIP.QFw-yhPbC35hENuZv645EwHaHa?rs=1&pid=ImgDetMain",
            likes: 80
        }
    ];
    localStorage.setItem("foodlist", JSON.stringify(foodlist));
}

let container = document.querySelector(".container");

function viewfood() {
    container.innerHTML = "";
    foodlist.forEach((a, index) => {
        container.innerHTML += `
        <div class="food">
            <img src="${a.image}" alt="${a.name}">
            <div class="info">
                <div class="name">${a.name}</div>
                <div class="numberlike">❤️ lượt thích: ${a.likes}</div>
                <button class="like" data-id="${index}">Like</button>
            </div>
        </div>
        `;
    });

    let likebtn = document.querySelectorAll(".like");
    likebtn.forEach((button) => {
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
