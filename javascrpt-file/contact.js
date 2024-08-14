let namecontact = document.getElementById("name");
let number = document.getElementById("number");
let emailcontact = document.getElementById("email");
// let message = documnet.getElementById("message").value;
let btnsend = document.querySelector(".btn-send");


// localStorage.setItem("message" , JSON.stringify(message));


btnsend.addEventListener("click" , ()=>{
    if(namecontact.value === "" || number.value === "" || emailcontact.value === ""){
        alert("please fill you Data until contact with you");
    }
    else{
        localStorage.setItem("name" , namecontact.value);
        localStorage.setItem("number" , number.value);
        localStorage.setItem("email" , emailcontact.value);
        let username = localStorage.getItem("name")
        if(username){
            if(confirm("we will contact with you thank you for use my website")){
                namecontact.value = "";
                number.value = "";
                emailcontact.value = "";
            }
            else{
                confirm("please enter you data again");
            }
        }
    
    }

});
let span_response = document.querySelector(".span");
let main_link = document.querySelector(".main-link");
span_response.addEventListener("click" , ()=>{
    main_link.classList.toggle("response")
})