const display=document.getElementById('display');
let time=null;
let running=false;
let startTime=0;
let elapsedTime=0;

function start(){
    if(running) return;
    running=true;
    startTime=Date.now()-elapsedTime;
    time=setInterval(update,10);
}
function stop(){
    if(!running) return;
    running=false;
    clearInterval(time);
}

function reset(){
    clearInterval(time);
    running=false;
    startTime=0;
    elapsedTime=0;
    display.textContent='00:00:00.00';
}
function update(){
    elapsedTime=Date.now()-startTime;
    let hours=Math.floor(elapsedTime/3600000);
    let minutes=Math.floor((elapsedTime-hours*3600000)/60000);
    let seconds=Math.floor((elapsedTime-hours*3600000-minutes*60000)/1000);
    let milliseconds=Math.floor (elapsedTime % 1000/10);
    display.textContent=`${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}.${milliseconds.toString().padStart(2,'0')}`;
}
