let text = prompt("Nhập mọi thứ bạn muốn, tôi sẽ đoán nó");

function numberOrString(x) {
    let flag = 0; 
    for (let i = 0; i < x.length; i++) {
        if (!isNaN(x[i])) { 
            flag = 1;
        } else if (('a' <= x[i] && x[i] <= 'z') || ('A' <= x[i] && x[i] <= 'Z')) { // Nếu là chữ
            if(flag==1){
                flag=3;
                break;
            }else{
                flag=2;
            }
        } else { 
            flag = 3;
            break;
        }
    }

    if (flag == 1) {
        document.write("Là số");
    } else if (flag == 2) {
        document.write("Là chữ");
    } else {
        document.write("Linh tinh");
    }
}

numberOrString(text);
