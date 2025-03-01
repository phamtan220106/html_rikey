 let Exp=Number(prompt("số năm kinh nghiệm"));

 function check(years) {
    if (years < 1) {
      return "Mới vào nghề";
    } else if (years >= 1 && years <= 3) {
      return "Nhân viên có kinh nghiệm";
    } else if (years >= 4 && years <= 6) {
      return "Chuyên viên";
    } else {
      return "Quản lý";
    }
  }
  alert(check(Exp)); 
  