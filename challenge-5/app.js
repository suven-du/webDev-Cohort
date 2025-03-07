/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];
const carousel=document.getElementById("carousel");
const carouselTrack = document.getElementById("carouselTrack");
const caption = document.getElementById("caption");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const carouselNav = document.getElementById("carouselNav");
const autoPlayButton = document.getElementById("autoPlayButton");
const timerDisplay = document.getElementById("timerDisplay");

for(let i=0;i<4;i++){
   const indicator1 = document.createElement("div");
   indicator1.classList.add(`carousel-indicator`);
   carouselNav.appendChild(indicator1);
}

let state = 0;

carouselTrack.style.backgroundImage = `url(${images[state].url})`
caption.textContent = `${images[state].caption}`;
carouselNav.children[state].classList.add(`active`);

carouselTrack.classList.add(`carousel-slide`);
const navchildrenArray=Array.from(carouselNav.children);

function updateCarousel(index,prevbtn=false){
  state=index;

  if(prevbtn){
    if(state<=0){
      state = images.length-1;
    }else{
      state--;
    }
  }else{
    console.log(state)
    if(state>=images.length-1){
      state = 0;
    }else{
      state++;
    }
  }
 
  carouselTrack.style.backgroundImage = `url(${images[state].url})`
  caption.textContent = `${images[state].caption}`;
  console.log("after update")
  console.log(state)
  navchildrenArray.forEach((child)=>child.classList.remove("active"));
  navchildrenArray[state].classList.add(`active`);
   
}

nextButton.addEventListener("click", function(){
   updateCarousel(state);
})
prevButton.addEventListener("click",function(){
  updateCarousel(state,true);
})

//adding functionality for nav clicking

navchildrenArray.forEach((child ,index)=>{
  child.addEventListener("click",function(){
   updateCarousel(index-1);

  })
})
//autoplay feature
let intervalId=null;
let countdown=4;
let countdownId=null;
autoPlayButton.addEventListener("click",function(){
  if(intervalId){
    clearInterval(intervalId);
    clearInterval(countdownId)
 intervalId=null;
 countdownId=null;
timerDisplay.textContent=''
    autoPlayButton.textContent="start Auto Play"
  }else{
  
   intervalId= setInterval(()=>{  updateCarousel(state) 
    }
    ,5000)
    countdownId= setInterval(()=>{
      timerDisplay.textContent=`Next page in${countdown}`
      countdown<=0?countdown=4:countdown--;
      },1000)
    
    autoPlayButton.textContent="stop Auto Play";
  }
     
})


