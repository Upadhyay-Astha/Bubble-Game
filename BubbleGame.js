let hit = 5;
let timer = 60;
let score = 0;
let highScore = 0;
function makeBubble(){
    var bubble = ""
    var pb = document.querySelector(".pbtm");
    for (var i = 0; i <=125; i++){
        let number = Math.floor(Math.random() * 10)
        bubble += `<h1 class="bubble">${number}</h1>`
    }
    pb.innerHTML = bubble;
}

function getHit(){
    let qs = document.querySelector("#hit");
    hit = Math.floor(Math.random() * 10)
    qs.innerHTML = hit;
}

function setHighScore(){
    let qs = document.querySelector("#highscore");
    qs.innerHTML = highScore;
}

function startTimer(){
    let timerFunc = setInterval(function setTimer(){
        let qs = document.querySelector("#timer");
        let qsi = document.querySelector(".pbtm");
        if (timer > 0){
            timer--;
            qs.innerHTML = timer;
        }
        else{
            qsi.innerHTML = "<h1>Game Over</h1><button id=button>Play Again</button>";
            if (highScore < score){
                highScore  = score;
                setHighScore();
            }
            clearInterval(timerFunc);
        }
    },1000)
}

function increaseScore(){
    let qs = document.querySelector("#score");
    score += 10;
    qs.innerHTML = score;
}
function resetTimer(){
    let qs = document.querySelector("#timer");
    timer = 60;
    qs.innerHTML = timer;
}
function playGame(){
    let qs = document.querySelector(".pbtm");
    qs.addEventListener("click",function handleClick(dets){
    let num = Number(dets.target.textContent);
    if (num === hit){
        increaseScore();
        makeBubble();
        getHit();
    }
})
}
function resetScore(){
    let qs = document.querySelector("#score");
    score = 0;
    qs.innerHTML = score;
}

function playAgain(){
    let qs = document.querySelector(".pbtm");
    qs.addEventListener("click",function start(dets){
        if (dets.target.textContent === "Play Again"){
            resetScore();
            resetTimer();
            makeBubble();
            getHit();
            startTimer();
            playGame();
        }
    })
}

function startGame(){
    let qs = document.querySelector(".pbtm");
    qs.addEventListener("click",function check(dets){
        if(dets.target.textContent === "Start Game"){
            makeBubble();
            getHit();
            startTimer();
            playGame();
        }
    })
}

startGame();
playAgain();