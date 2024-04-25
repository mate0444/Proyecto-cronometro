let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;

function startStop(){
    if(isRunning){
        clearInterval(timer);
        isRunning = false;
        document.getElementById("startStop").textContent = "Iniciar";
    }else{
    timer = setInterval(updateTime, 100);
    isRunning = true;
    document.getElementById("startStop").textContent = "Parar";
}
}
function reset(){
    clearInterval(timer);
        hours = 0;
        minutes = 0;
        seconds=0;
        isRunning = false;
        document.getElementById("startStop").textContent = "Iniciar";
        updateDisplay();
}
function updateTime(){
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;
        if(minutes === 60){
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function updateDisplay(){
    document.getElementById("display").textContent =`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
document.getElementById("startStop").addEventListener("click", startStop);
       document.getElementById("reset").addEventListener("click", reset);

       updateDisplay();