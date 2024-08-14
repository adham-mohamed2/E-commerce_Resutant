let username = document.querySelector(".username");
let email = document.querySelector(".email")
let password = document.querySelector(".password");
let registerbtn = document.querySelector(".sighn-up");


registerbtn.addEventListener("click"  , function(e){
    e.preventDefault();
    if(username.value === "" || password.value === "" || email.value === ""){
        window.alert("please Fill Data");
    }
    else{
        localStorage.setItem("username" , username.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value);
        setTimeout(()=>{
            window.location="login.html";
        },1500)
    }
    
})