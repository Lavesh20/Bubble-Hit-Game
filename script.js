function Make_Bubble(){
    var clutter = "";
for(var i = 1;i<=133;i++){
    var store = Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${store}</div>`
}

document.querySelector("#pbottom").innerHTML = clutter;
}
var timer = 10;
var score = 0;
var hit_me;
function RunTimer(){
  var time_interval = setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
    }
    else{
        clearInterval(time_interval);
        document.querySelector("#pbottom").innerHTML =" `<h1>Game Over</h1> ";
       alert("Thank You For Playing !!!");
    }
    
    },1000);
}

function getNewHit(){
    hit_me =  Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = hit_me;
}

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
    
}

document.querySelector("#pbottom").addEventListener("click",function(details){
   var clicked_number = Number(details.target.textContent);

   if(clicked_number === hit_me){
   increaseScore();
   Make_Bubble();
   getNewHit();
   }
});

RunTimer();
Make_Bubble();
getNewHit();

