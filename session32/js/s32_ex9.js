
let size = 20;

document.getElementById("tang").addEventListener("click", function () {
    if (size < 100) { 
        size += 10;
        document.getElementById("min").style.width = `${size}%`;
    }
});

document.getElementById("giam").addEventListener("click", function () {
    if (size > 0) { 
        size -= 10;
        document.getElementById("min").style.width = `${size}%`;
    }
});