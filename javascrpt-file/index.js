let userinfo = document.querySelector(".userinfo");
let domlink = document.querySelector(".Domlink");
let link = document.querySelector(".link");
let link_style = document.querySelector(".link-style");


let username = localStorage.getItem("username");

if(username){
    link.remove();
    link_style.remove();
    domlink.style.display = "flex";
    userinfo.innerHTML = username;
}
let span_response = document.querySelector(".span");
let main_link = document.querySelector(".main-link");
span_response.addEventListener("click" , ()=>{
    main_link.classList.toggle("response")
})
