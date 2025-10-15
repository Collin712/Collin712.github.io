const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scoreCounter = document.getElementById("scoreCounter")
let bird = {
  x: 100,
  y: 400,
  height: 50,
  width: 50,
  ySpeed: 0,
  strength: 15,
}
let gravity = 0.7;
let gameRunning = false;
let clicks = 0;
let frames = 0;
let score = 0;
let pipePositions = [
  {x: 1600, y: 500}, //first bottom pipe
  {x: 1900, y: 500}, //second bottom pipe
  {x: 2200, y: 500}, //third bottom pipe
  {x: 2500, y: 500}, //fourth bottom pipe
  {x: 1600, y: 1800}, //first top pipe
  {x: 1900, y: 1800}, //second top pipe
  {x: 2200, y: 1800}, //third top pipe
  {x: 2500, y: 1800}, //fourth top pipe
]
let pipe = {height: 900, width: 200}
setInterval(gameUpdate, 1000/60);
document.addEventListener("mousedown", () => {bird.ySpeed = bird.strength * -1; if(clicks === 0){gameRunning = true;} clicks++});
function gameUpdate(){
  if(gameRunning){
    bird.ySpeed += gravity;
    bird.y += bird.ySpeed;
    if(bird.y + bird.height >= 900){
      gameRunning = false;
      bird.y = 900 - bird.height;
    }
    if(bird.y <= 0){
      gameRunning = false;
      bird.y = 0;
    }
  }
  render();
  frames++;
}

function render(){
  ctx.fillStyle = "lightBlue";
  ctx.fillRect(0, 0, 1600, 900)
  ctx.fillStyle = "yellow";
  ctx.fillRect(bird.x, bird.y, bird.width, bird.height)
  ctx.fillStyle = "green"
  scoreCounter.textContent = "Score: " + score;
}