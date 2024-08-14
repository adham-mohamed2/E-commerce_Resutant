let cartcount = document.querySelector('.cart-count'); // counter of element
let containeritem = document.querySelector(".con-item"); // container contant to element

// =========================================================== show and hide cartitem
let cartclose = document.getElementById('cart-close');
let btncard = document.getElementById('btn-card');
let cart = document.querySelector('.cart');
try{
btncard.addEventListener('click' , ()=>{
    cart.classList.add('cart-active');
    
});

cartclose.addEventListener('click', ()=>{
    cart.classList.remove('cart-active');
})
}
catch{
    console.log("error")
}

// =====================================================================================

document.addEventListener('DOMContentLoaded',loadfood);

function loadfood(){
    loadcontent();
};




function loadcontent(){
    //remove item from cart
    let btnremove = document.querySelectorAll('.cart-remove');
    btnremove.forEach(btn => {
        btn.addEventListener('click' , removeitem)
    });

    //increament ar decreament product in cart 

    let qtyElement = document.querySelectorAll('.cart-quantity');
    qtyElement.forEach(input=>{
        input.addEventListener('change' , ChangeQty);
    });


    //add product in cart

    let cartbtn = document.querySelectorAll('.add-card');
    cartbtn.forEach(el=>{
        el.addEventListener('click' , addcart);
    });

    // add to favorite

    let favorite =document.querySelectorAll(".fa-heart");
    favorite.forEach((el)=>{
        el.addEventListener("click" , addfavorite);
    });

    // reload the value  of total
    updateTotal();
};



//function add product favorite

let favoritelist;
try{
    if(localStorage.getItem("favorite")){
        favoritelist = JSON.parse(localStorage.getItem("favorite"));
    
    }
    else{
        favoritelist = [];
    }
    
}
catch(e){
    console.log("error from function addfavorite")
}

function addfavorite(){
    try{
        let food = this.parentElement;
        let favorite = food.querySelector('.fa-heart');
        favorite.style.color ="red";
        let title = food.querySelector('.food-title').innerHTML;
        let priceElement = food.querySelector('.food-price');
        let price = parseFloat( priceElement.innerHTML.replace("Rs." , ""));
        let imgsrc = this.parentElement.querySelector('.food-img').src;

        let favoriteadd ={title , price , imgsrc , favorite};

        
        if(favoritelist.find((el)=> el.title === favoriteadd.title)){
            alert("product already add to favorite");
        }
        else{
            favoritelist.push(favoriteadd);
        }
        localStorage.setItem("favorite" , JSON.stringify(favoritelist))
    }catch(e){
        console.log("error from function addfavorite");
    }
}

//function increament ar decreament product in cart

function ChangeQty(){
    try{
        if(isNaN(this.value) || this.value < 1){
            this.value = 1;
        }
        loadcontent();
    }catch(e){
        console.log("error from function changeQty")
    }
};

// get item from addlocalstorage

let itemlist;
if(localStorage.getItem("product")!= null){
    itemlist = JSON.parse(localStorage.getItem("product"));
}
else{
    itemlist= [];
}

if(itemlist){
    itemlist.map((item) =>{
        
        containeritem.innerHTML += `
            
            <div class="cart-box"> 
                <img src="${item.imgsrc}" alt="" class="cart-img">
                <div class="cart-details">
                    <div class="cart-food-tilte">${item.title}</div>
                    <div class="price-box">
                        <div class="cart-price">${item.price}</div>
                        <div class="cart-amt">${item.price}</div>
                    </div>
                    <input type="number" value="1" class="cart-quantity">
                    
                </div>
                <i class="fa fa-trash cart-remove"></i>
            </div>
            
            `
    });

    let count = itemlist.length;
    cartcount.innerHTML = count;
}

// function add product to cart

function addcart(){
    try{
        if(localStorage.getItem("username")){
            let food = this.parentElement;
            let title = food.querySelector('.food-title').innerHTML;
            let priceElement = food.querySelector('.food-price');
            let price = parseFloat( priceElement.innerHTML.replace("Rs." , ""));
            let imgsrc = this.parentElement.querySelector('.food-img').src;
            let newproduct = {title , price , imgsrc};

            if(itemlist.find((el) => el.title == newproduct.title)){
                alert("product Already added in cart");
                return;
            }
            else{
                itemlist.push(newproduct);
            }

            localStorage.setItem("product" , JSON.stringify(itemlist));

            containeritem.innerHTML +=`
            
                <div class="cart-box"> 
                    <img src="${imgsrc}" alt="" class="cart-img">
                    <div class="cart-details">
                        <div class="cart-food-tilte">${title}</div>
                        <div class="price-box">
                            <div class="cart-price">${price}</div>
                            <div class="cart-amt">${price}</div>
                        </div>
                        <input type="number" value="1" class="cart-quantity">
                        
                    </div>
                    <i class="fa fa-trash cart-remove"></i>
                </div>
            
            `
            loadcontent();
                
        }
        else{
            alert("please sighn in");
            setTimeout(()=>{
                window.location = "registar.html"
            },1500);

        }
    }catch(e){
        console.log("error from function addcart")
    }
}


// search item
    function search(id){
        try{
            
            let product = document.querySelectorAll(".box-food");
            let productname = document.querySelectorAll(".food-title");
            if(id == "input-link"){
                let input_link = document.querySelector("#input-link").value.toUpperCase();
                for(let i = 0 ; i<productname.length ; i++){
                    if(productname[i].innerHTML.toUpperCase().indexOf(input_link) >= 0){
                        product[i].style.display = "";
                    }
                    else{
                        product[i].style.display = "none";
                    }
                }
            }
            else if(id == "input"){
                let searchinput = document.querySelector("#input").value.toUpperCase();
                for(let i = 0 ; i<productname.length ; i++){
                    if(productname[i].innerHTML.toUpperCase().indexOf(searchinput) >= 0){
                        product[i].style.display = "";
                    }
                    else{
                        product[i].style.display = "none";
                    }
                }
            }
            
        }catch(e){
            console.log("error from function search" + e);
            console.log(e)
        }
    }

// end search item

// function delete item from cart

function removeitem(){
    try{
        if(confirm('Are you sure to remove item')){
            let title = this.parentElement.querySelector('.cart-food-tilte').innerHTML;
            itemlist = itemlist.filter(el=> el.title != title);
            this.parentElement.remove();
            itemlist.splice(1, this.parentElement.remove());
            localStorage.setItem("product" , JSON.stringify(itemlist))
            loadcontent();
        }
    }catch(e){
        console.log("error from function removeitem")
    }
};

// function get total

function updateTotal(){
    try{
        const cartitem = document.querySelectorAll('.cart-box');
        const totalvalue = document.querySelector('.total-price');

        let total = 0;
        cartitem.forEach(product =>{
            let priceElement = product.querySelector('.cart-price');
            let price = parseFloat( priceElement.innerHTML.replace("Rs." , ""));
            let qty = product.querySelector('.cart-quantity').value;
            total += (price * qty);
            product.querySelector('.cart-amt').innerText = "Rs." + ( price * qty);
        });

        totalvalue.innerHTML = 'Rs.' + total
        let count = itemlist.length;
        cartcount.innerHTML = count;
        if(count == 0){
            cartcount.style.display = 'none';
        }
        else{
            cartcount.style.display = 'block';
        }

    }catch(e){
        console.log("error from function updatetotal")
    }
}

// search function

let search_btn = document.querySelector("#search-btn");
let search_close = document.querySelector("#search-close");
let search_container = document.querySelector(".search");
search_btn.addEventListener("click" , ()=>{
    search_container.style.left= "50%";
})
search_close.addEventListener("click" , ()=>{
    search_container.style.left= "-100%";
})

let span = document.querySelector(".span");
let main_link = document.querySelector("#main-link");
span.addEventListener("click" , ()=>{
    main_link.classList.toggle("response")
    
})

let show_product_link = document.querySelector("#show-product-link");
show_product_link.addEventListener("click" , ()=>{
    window.location = "cart.html";
})
let show_cart = document.querySelector(".show-cart");
show_cart.addEventListener("click" , ()=>{
    window.location = "cart.html";
})