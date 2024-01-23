
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const ms = document.querySelector(".ms");
const hour = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");


var hrs = 0;
var min = 0;
var sec = 0;
var timer = 0;
var  close ;




start.addEventListener("click",()=>{
   close = setInterval(timerStart,10);
});

function timerStart(){
 timer++;
 ms.innerHTML = timer;
 if(timer === 100){
    sec++;
    timer = 0;
    if(sec < 10){
        sec = "0".concat(sec);
    }
seconds.innerHTML = sec +" "+ "."
 }
 if(sec === 60){
    min ++;
    sec = 0;
    if(min < 10){
        min = "0".concat(min);
    }
    minutes.innerHTML = min + " " +":";
 }
 if(min === 60){
    hrs ++;
    min = 0;
    if(hrs < 10){
        hrs = "0".concat(hrs);
    }
    hour.innerHTML = hrs + " " + ":";
 }

};

stop.addEventListener("click",stopTimer);
function stopTimer(){
//   display = false;
console.log(sec);
clearInterval(close);
};

reset.addEventListener("click",restTimer);
function restTimer(){
    hrs = 0;
    min = 0;
    sec = 0;
    timer = 0;
    hrs = "0".concat(hrs);
    sec = "0".concat(sec);
    min = "0".concat(min);
    timer = "0".concat(timer);
    ms.innerHTML = timer + " ";
    seconds.innerHTML = sec + " " + ".";;
    minutes.innerHTML = min + " " + ":";;
    hour.innerHTML = hrs + " " + ":";
}


