let clickicon = document.querySelector(".material-icons");

clickicon.addEventListener("click", function () {
    let typeinput = document.querySelector(".hide");
    if (typeinput.type === "text") {
        typeinput.type = "password";
        clickicon.innerHTML=`visibility_off`;

    } else {
        typeinput.type = "text";
        clickicon.innerHTML=`visibility`;

    }
});
