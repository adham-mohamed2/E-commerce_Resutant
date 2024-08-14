let cartcontant = document.querySelector(".show-product");
let logout = document.querySelector(".logout");
products = JSON.parse(localStorage.getItem("product"));


function showcart(){
    products.map((item)=>{
        cartcontant.innerHTML +=`
            
        <div class="cart-box">
                <div class="title">
                    <img src="${item.imgsrc}" alt="">
                    <div class="cart-food-tilte">${item.title}</div>
                </div>
                <div class="size">
                    <div class="size-title">
                        <h3>size</h3>
                        <div class="volume-size">
                            <p>s</p>
                            <p class="activ">m</p>
                            <p>l</p>
                        </div>
                    </div>
                    <div class="qty">
                        <p>qty</p>
                        <input type="number" value="1" class="cart-quantity">
                    </div>
                </div>
                <div class="price-box">
                    <div class="cart-price">price : ${item.price}</div>
                    <div class="cart-total">total : ${item.price}</div>
                </div>
            
            <i  onclick="remove(this.parentElement )" class="fa fa-trash cart-remove"></i>
        </div>
        
        
        
        `
    })
    }

showcart();


    function remove(parent){
    if(products.length === 1){
        products.splice(0);
        localStorage.setItem("product" , JSON.stringify(products))
        }
            let title = parent.querySelector(".cart-food-tilte").innerHTML;
            products = products.filter((el)=> el.title !== title);
            parent.remove();
            products.splice(1,parent.remove());
            localStorage.setItem("product" , JSON.stringify(products));
    }


    function search(){
        let search = document.querySelector(".search").value.toUpperCase();
        let cartbox = document.querySelectorAll(".cart-box");
        let title = document.querySelectorAll(".cart-food-tilte");
        for(let i = 0 ; i< title.length ; i++){
            if(title[i].innerHTML.toUpperCase().indexOf(search) >= 0){
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