/**
 * Write your challenge solution here
 */
const dateElement=document.querySelector(".date")
let digitalClock=document.querySelector(".digital-clock")
let clock=document.querySelector(".clock")
let time=new Date();
let day=time.getDay();
let date=time.getDate();
let month=time.getMonth();
let year=time.getFullYear();

   //digital clock
   function updateDigitalClock(){
   let time=new Date();
   let sec=time.getSeconds();
    sec=sec<10?`0${sec}`:sec; 
   let min=time.getMinutes()
    min=min<10?`0${min}`:min; 
   let hr=time.getHours()
    hr=hr<10?`0${hr}`:hr; 
   digitalClock.textContent=`${hr}:${min}:${sec}`

   }
   setInterval(updateDigitalClock,500);





   if(date<10){
    date=`0${date}`
   }

switch (day) {
    case 0:
      day = `Sunday`;
      break;
    case 1:
      day = `Monday`;
      break;
    case 2:
      day = `Tuesday`;
      break;
    case 3:
      day = `Wednesday`;
      break;
    case 4:
      day = `Thursday`;
      break;
    case 5:
      day = `Friday`;
      break;
    case 6:
      day = `Saturday`;
      break;
  }
  switch (month) {
    case 0:
      damonth = `January`;
      break;
    case 1:
      month = `February`;
      break;
    case 2:
      month = `March`;
      break;
    case 3:
      month = `April`;
      break;
    case 4:
      month = `May`;
      break;
    case 5:
      month = `June`;
      break;
    case 6:
      month = `July`;
      break;
    case 7:
      month = `August`;
      break;
    case 8:
      month = `September`;
      break;
    case 9:
      month = `October`;
      break;
    case 10:
      month = `November`;
      break;
    case 11:
      month = `December`;
      break;
  }
  dateElement.textContent=`${day} ${date} ${month} ${year}`

  //analog-clock

  for(let i=1; i<=12;i++){
  let number=document.createElement("div")
  number.classList.add("number");
    let spn=document.createElement(`span`)
       spn.textContent=`${i} `
       
    number.appendChild(spn)
  }
     clock.appendChild(number);




