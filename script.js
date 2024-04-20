let timer;
let hours = 0;
let minutes = 0;
let isRunning = false;

function startStop(){
    if(isRunning){
        clearInterval(timer);
        isRunning = false;
        document.getElementById("startStop").textContent = "Iniciar";
    }else{
    timer = setInterval(updateTime, 1000);
    isRunning = true;
    document.getElementById("startStop").textContent = "Parar";
}
}