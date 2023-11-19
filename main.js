//there are 4 parts :
//1 -- for digital part 
//2-- for analog part
//3 -- and for switching between analog and digital 
// 4 -- loading part



//1 -- for digital part 
function showTime (){ 
    const date=new Date();
    let h=date.getHours();
    let timeZone=(String(date).substring(35).split(" "));
    let seeingTimeZone=timeZone[0]

    let m=date.getMinutes();
    let s=date.getSeconds();
    let session="AM"

        if ( h > 12 ){
            h -= 12
            session="PM"
        }
        if ( h === 12){
            h === 0;
        }
        if ( h < 12 ){
            session="PM"
        }
        
        h= h<10 ? `0${h}` : h ;
        m= m<10 ? `0${m}` : m ;
        s= s<10 ? `0${s}` : s ;
        
        
        document.querySelector(".digital-clock").innerHTML=`${h}:${m}:${s} ${session}
         <p id="timezone"> Also your are in ${seeingTimeZone} timezone</p>`;  
    }
        
        setInterval(showTime, 1000);

//_________End of digital part______//



//2-- for analog part______//
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate() {
  const now = new Date();
  const getSecond = now.getSeconds();
  const getMinute = now.getMinutes();
  const getHour = now.getHours();

  const secondDegree = (getSecond / 60) * 360;
  const minuteDegree = (getMinute / 60) * 360;
  const hourDegree = (getHour / 12) * 360;

  second.style.transform = `rotate(${secondDegree}deg)`;
  minute.style.transform = `rotate(${minuteDegree}deg)`;
  hour.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);

//_________end of analog part______//



//3 -- and for switching between analog and digital//

const buttonHandler=document.querySelector(".watch-button");
const analogClock=document.querySelector(".analog-clock");
const digitalClock=document.querySelector(".digital-clock");


buttonHandler.addEventListener("click",switching);
// digitalClock.classList.add("fadeIn")

function switching(){
analogClock.classList.toggle("hidden");
}


// 4 -- loading part
const loading=document.querySelector(".loading");
setTimeout(() => {
   loading.style.display="none"; 
}, 3000);
