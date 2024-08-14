let showproduct = document.querySelector(".showproduct");
let product = JSON.parse(localStorage.getItem("favorite"));
let logout = document.querySelector(".logout")



function show(){

    product.map((item) =>{
        showproduct.innerHTML +=`
        <div class="cart-box">
            <img src="${item.imgsrc}" alt="">
            <div class="cart-food-tilte">${item.title}</div>
        
            <div class="price-box">
                <div class="cart-price">price : ${item.price}</div>
                <div class="cart-total">total : ${item.price}</div>
            </div>
            
            <i onclick="remove(this.parentElement )" class="fa-solid fa-heart fa-heart2"></i>
            <i onclick="add(this.parentElement)" class="fa fa-cart-plus" id="cart-icon"></i>

        </div>

        `
    })
}
show();


// remove function
function remove(parent){
    if(product.length === 1){
        product.splice(0);
        localStorage.setItem(("favorite") , JSON.stringify(product))
    }
    let title = parent.querySelector(".cart-food-tilte").innerHTML;
    product = product.filter((el)=>el.title !== title);
    parent.remove();
    product.splice(1,parent.remove());
    localStorage.setItem(("favorite") , JSON.stringify(product))
}

//  Add function 

let addproduct = JSON.parse(localStorage.getItem("product"));

function add(parent){
    let titl = parent.querySelector(".cart-food-tilte").innerHTML;
    product = product.find((el)=> el.title === titl)
    addproduct.push(product);
    localStorage.setItem("product" , JSON.stringify(addproduct));

}

// start search section

function search(){
    let search = document.querySelector(".search").value.toUpperCase();
    let cartbox = document.querySelectorAll(".cart-box");
    let title = document.querySelectorAll(".cart-food-tilte");
    for(let i = 0 ; i< title.length ; i++){
        if(title[i].innerHTML.toUpperCase().indexOf(search) >=0){
            cartbox[i].style.display = "";
        }
        else{
            cartbox[i].style.display = "none";
        }
    }
}


// =================================== logout from website

logout.addEventListener("click" , function(e){
    e.preventDefault();
    localStorage.clear();
    setTimeout(()=>{
        window.location = "registar.html";
    },1500);
})

// =======================================