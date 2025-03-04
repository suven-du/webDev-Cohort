
 let accordionBtn=document.querySelectorAll(".accordion-button");
  accordionBtn.forEach((btn)=>{
    btn.addEventListener("click",function(){
        // btn.children[0].classList.toggle("active");     we can add this or event.currentTarget inste of children.
        this.querySelector(".arrow").classList.toggle("active");
        btn.nextElementSibling.classList.contains("active")?btn.nextElementSibling.classList.remove("active"):btn.nextElementSibling.classList.toggle("active");
    })
  })


 