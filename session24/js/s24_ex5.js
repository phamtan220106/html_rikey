let arr = [];
let choice,rows,cols;

do{
  choice = prompt(`Menu chọn chức năng:\n 1.Nhập mảng 2 chiều \n 2.Hiển thị mảng 2 chiều\n 3.Tính tổng các phần tử trong mảng\n 4.Tính tổng đường chéo chính\n 5.Tính tổng đường chéo phụ\n 6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột\n 7. Thoát chương trình`);
  switch(choice){
    case "1":
        rows = Number(prompt("Nhập số hàng"));
        cols = Number(prompt("Nhập số cột"));
        arr = [];
        for(let i = 0; i < rows ; i++){
            arr[i] = [];
            for(j = 0; j < cols; j++){
                arr[i][j]=Number(prompt(`A[${i}][${j}]: `));
            }
        }
        break;
    case "2":
        let hienthi = "Mảng 2 chiều \n";
        for(let i =0; i<arr.length; i++){
            hienthi+= `[${arr[i].join(" , ")}]\n`;
        }
        alert(hienthi);
        break;
    case "3":
        let total = 0;
        for(let i = 0; i< arr; i++){
            for(let j = 0; j < arr[i].length ; j++){
                total+= arr[i][j];
            }
        }
        alert(total);
        break;
  }
}while(choice !== "7")