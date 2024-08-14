let username = document.querySelector(".username");
let password = document.querySelector(".password");
let login = document.querySelector(".sighn-in");


let getuser = localStorage.getItem("username");
let getpassword = localStorage.getItem("password");

login.addEventListener("click" , function(e){
    e.preventDefault();
    if(username.value === "" || password.value === "" ){
        window.alert("Please fill your Data");
        
    }
    else{

        if(username.value !== getuser && password.value !== getpassword){
            window.alert("the username or password is wrong");
        }
        else if(getuser &&
            username.value === getuser && 
            getpassword && 
            password.value===getpassword)
            {
                setTimeout(()=>{
                    window.location ="index.html";
                },1500)
            }
    }
    
});
