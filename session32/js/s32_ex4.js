function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
let check=document.querySelector(".check");

check.addEventListener("click", () => {
    let email = document.getElementsByClassName("email")[0].value;
    let yes=document.getElementsByClassName("yes")[0];

    let newtype=document.createElement("div");

    yes.innerHTML=``;

    if(isValidEmail(email)){
        newtype.innerHTML=`email hợp lệ!`;
        newtype.style.color="green";
        yes.appendChild(newtype);
    }else{
        newtype.innerHTML=`email không hợp lệ!`;
        newtype.style.color="red";
        yes.appendChild(newtype);
    }
})
document.getElementsByClassName("email")[0].addEventListener("click", ()=>{
    let yes=document.getElementsByClassName("yes")[0];
    yes.innerHTML=``;
})