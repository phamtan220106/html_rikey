



let backgr = JSON.parse(localStorage.getItem("bgr")) || "white";

document.body.style.backgroundColor = backgr;

document.querySelector(".dark-mode-toggle").addEventListener("click", function () {

    let body = document.body;

    if (backgr == "white") {
        backgr = "black";
    } else if (backgr == "black") {
        backgr = "white";
    }

    body.style.backgroundColor = backgr;
    localStorage.setItem("bgr", JSON.stringify(backgr));

});

