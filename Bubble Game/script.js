let timer = 60;
let hitval =0 ;
let score =0 ;

function makeBubble(){
    let clutter = "";

for(let i=1; i<=154; i++){
    let rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML = clutter;
}   


function runTimer(){
    setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        }
    },1000)

}
function getNewHit(){
    hitval = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitval;
}
document.querySelector('#pbtm').addEventListener("click",(e)=>{
    let clickNum = Number(e.target.textContent);
    if(clickNum === hitval){
        increaseScore();
    }
 })
function increaseScore(){
        score+=10;
        document.querySelector("#scoreval").textContent = score;
        makeBubble();
        getNewHit();
    
}

getNewHit()
runTimer()
makeBubble();