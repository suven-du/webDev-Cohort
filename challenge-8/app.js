let totalAmount = 0;

const cart_items = document.getElementById("cart-items");

const cart_total = document.getElementById("cart-total");

function addToCart (name,p){
    let price=Math.round(p);
    let quantity = 1;
        let total = price*quantity;
        totalAmount += total
    const sameProduct=Array.from(cart_items.children).find((ci)=>ci.classList.contains(name));
    if(sameProduct!==undefined){
        let spQuantity=sameProduct.querySelector(".quantity");
       let quantity=parseInt(spQuantity.textContent,10);
           quantity++;
       spQuantity.textContent=quantity;
       let spTotal=sameProduct.querySelector(".total");
       let total=parseInt(spTotal.textContent,10);
       total=price*quantity;
       spTotal.textContent=total;
       totalAmount+=price
        cart_total.textContent = `Total: $${totalAmount}`
    }else{
        
        const cart_item = document.createElement("div");
        cart_item.classList.add("cart-item");
        const item_name = document.createElement("div");
         item_name.textContent = name;
         cart_item.appendChild(item_name);

        const quantity_controls = document.createElement("div");
        quantity_controls.classList.add("quantity-controls");
    
        const minus = document.createElement("button");
        minus.textContent = "-";
        quantity_controls.appendChild(minus);
    
        const quan = document.createElement("span");
        quan.classList.add("quantity");
        quan.textContent = quantity;
        quantity_controls.appendChild(quan);
    
        const plus = document.createElement("button");
        plus.textContent = "+";
        quantity_controls.appendChild(plus);
    
        const totall = document.createElement("span");
        totall.classList.add("total")
        totall.textContent = total;
        quantity_controls.appendChild(totall);
    
        const remove = document.createElement("button");
        remove.textContent = "Remove";
        quantity_controls.appendChild(remove);
    
        cart_item.appendChild(quantity_controls);
        cart_item .classList.add(name);
    
    
        cart_items.appendChild(cart_item);
    
        cart_total.textContent = `Total: $${totalAmount}`;

        //update the quantity here
        minus.addEventListener("click", function(e){
        quantity = parseInt(quan.textContent, 10);

            console.log("in minus butten",quantity);
            if(quantity<=1){
                removeElement(e)
            }else{
                quantity--;
                total = price * quantity;
                totalAmount -= price;
                quan.textContent = quantity;
                totall.textContent = total;
                cart_total.textContent = `Total: $${totalAmount}`
            }
        })
    
        plus.addEventListener("click", function(){
        quantity = parseInt(quan.textContent, 10);
        console.log("in plus butten",quantity);

            quantity++;
            total = price * quantity;
            totalAmount += price;
            quan.textContent = quantity;
            totall.textContent = total;
            cart_total.textContent = `Total: $${totalAmount}`
            
        })
    
        remove.addEventListener("click",removeElement)
    
        function removeElement(e){
            e.target.parentElement.parentElement.remove();
            totalAmount = totalAmount - total;
            cart_total.textContent = `Total: $${totalAmount}`
    
        }

    }
        

       
    
       
    }
   
    

   
    

    
       
    
      
    

    

    

   
    


