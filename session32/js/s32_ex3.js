let button = document.querySelector(".btn-add");
button.addEventListener("click", function () {
    let subjectInput = document.querySelector(".subject");
    let subject = subjectInput.value.trim();

    if (subject === "") {
        alert("Thiếu thông tin");
        return;
    }

    let listsubject = document.querySelector(".listsubject");

    let newsj = document.createElement("div");
    newsj.classList.add("item");

    let stt = listsubject.children.length + 1;
    newsj.innerHTML = `${stt}: ${subject}`;

    listsubject.appendChild(newsj);

    subjectInput.value = "";
});
