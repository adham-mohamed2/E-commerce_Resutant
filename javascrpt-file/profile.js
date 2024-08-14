// variable
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector(".password");
let btnsave = document.querySelector(".save");
let change = document.querySelector(".change");
let nameuser = document.querySelector(".name");
let favorite = document.querySelector("#number-favorites");
let logout = document.querySelector(".logout")

try{
    let numberfavoriet = JSON.parse(localStorage.getItem("favorite"));

    favorite.innerHTML = numberfavoriet.length;
}
catch{
    console.log("error")
}

// =============================== localstorage data

let emailuser = localStorage.getItem("email");
let username = localStorage.getItem("username");
let passworduser = JSON.parse(localStorage.getItem("password"));

// ============================ add user name

nameuser.innerHTML = username;

// =========================== add data user from localstorage
name.value = username;
email.value = emailuser;
password.value = passworduser;

// ============================ change user data in localstorage

btnsave.addEventListener("click", function(){

    localStorage.setItem("email" , email.value);
    localStorage.setItem("username" ,name.value);
    localStorage.setItem("password" , JSON.stringify(password.value));
    name.value = localStorage.getItem("username");
    email.value = localStorage.getItem("email");;
    password.value =  JSON.parse(localStorage.getItem("password"));
    nameuser.innerHTML = localStorage.getItem("username");
})

// ============================ change password

change.addEventListener("click" , function(){
    password.removeAttribute("readonly")
    localStorage.setItem("password" , JSON.stringify(password.value));
})

// ============================ add bio to website

let bio = document.querySelector("#bio");
bio.value = "coffe laver";


// =================================== logout from website

logout.addEventListener("click" , function(e){
    e.preventDefault();
    localStorage.clear();
    setTimeout(()=>{
        window.location = "registar.html";
    },1500);
})

// =======================================