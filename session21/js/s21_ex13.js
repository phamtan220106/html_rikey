let h = parseInt(prompt("Nhập chiều cao tam giác: "), 10);

if (isNaN(h) || h <= 0) {
    document.write("Vui lòng nhập số nguyên dương hợp lệ.");
} else {
  
    document.write("<br>");
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < h - i; j++) {
            document.write("*");
        }
        document.write("<br>");
    }
    document.write("<br>");

    document.write("<br>");
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < h; j++) {
            document.write(j <=i-1 ? "_" : "*");
        }
        document.write("<br>");
    }
    document.write("<br>");

    document.write("<br>");
    for (let i = 0; i < h; i++) {
        for (let j = 0; j <= i; j++) {
            document.write("*");
        }
        document.write("<br>");
    }
    document.write("<br>");

    document.write("<br>");
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < h; j++) {
            document.write(j < h - i - 1 ? "_" : "*");
        }
        document.write("<br>");
    }
}
