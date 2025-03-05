/**
 * Write your challenge solution here
 */

const toggleBtn=document.querySelector(".toggle-btn");
const panel=document.querySelector(".panel");
const closeBtn=document.querySelector(".close-btn");
const menuItem=document.querySelectorAll(".menu-item");


   toggleBtn.addEventListener("click",function(e){
     panel.classList.add("active")
     e.stopPropagation()
   })
   closeBtn.addEventListener("click",function(e){
    panel.classList.remove("active")
    e.stopPropagation()

   })
   menuItem.forEach((i)=>{
     i.addEventListener("click",function(e){
        alert(i.textContent)
     e.stopPropagation()

     })
   })

   panel.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents closing when clicking inside
});

    document.addEventListener("click",function(){
          if(panel.classList.contains("active")){
            panel.classList.remove("active")
          }
         
    })


    //anaother BETTER  way to do

    // document.addEventListener("click",function(event){
    //     if (!panel.contains(event.target) && !toggleBtn.contains(event.target)) {
    //         panel.classList.remove("active");
    //     }
    
    // })

// BEST APPROACH


    // function handleClickOutside(event) {
    //     if (!panel.contains(event.target) && !toggleBtn.contains(event.target)) {
    //         panel.classList.remove("active");
    //         document.removeEventListener("click", handleClickOutside);
    //     }
    // }
    
    // toggleBtn.addEventListener("click", function () {
    //     panel.classList.add("active");
    //     setTimeout(() => {
    //         document.addEventListener("click", handleClickOutside);
    //     }, 0); // Prevent immediate closing
    // });
    


   

