const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

//загрузка картиночек
var bg = new Image();
var hero1pos = new Image();
var hero2pos = new Image();
var ball = new Image();
var targetImg = new Image();
var hero = new Image();
var herobg1 = new Image();
var herobg2 = new Image();
var bullet = new Image();
var mouse = {
  x: 0,
  y: 0
}
var bulletSpeed = 5

var xbulletPos = 155;
var ybulletPos = 430;
 var target = {
  xpos: 700,
  ypos: 260,
  width: 150,
  height: 230
 } 

bg.src = "img/bg.jpg";
targetImg.src = "img/target.png";
hero1pos.src = "img/hero1pos.png";
hero2pos.src = "img/hero2pos.png";
herobg1.src = "img/herobg1.png";
herobg2.src = "img/herobg2.png";
bullet.src = "img/bullet.png";




//рисование объектов
function startGame() {
  context.drawImage(bg, 0, 0);
  context.drawImage(targetImg,target.xpos ,target.ypos,target.width,target.height);
  context.drawImage(hero1pos, 100, 390, 100,100);
  document.addEventListener('keydown', shot);
}
setTimeout(startGame, 300)

//функция смены анимации персонажа

canvas.addEventListener('mousemove', checkMouse)


function checkMouse(e){
  mouse.x = e.pageX - this.offsetLeft
  mouse.y = e.pageY - this.offsetTop
}


function shot(){
  let interval;
  document.removeEventListener("keydown", shot);
console.log((bulletSpeed * mouse.y) / mouse.x)

  interval = setInterval(function() {
    xbulletPos += bulletSpeed
    ybulletPos += (bulletSpeed * mouse.y - 200) / mouse.x
    context.clearRect(100, 385, 100,110);
    context.drawImage(bg, 0, 0);
    context.drawImage(targetImg,target.xpos ,target.ypos,target.width,target.height);
    context.drawImage(bullet, xbulletPos, ybulletPos, 20, 20);
    context.drawImage(hero2pos, 100, 390, 100,100);

    if (xbulletPos === target.xpos){
      document.addEventListener('keydown', shot);
      clearInterval(interval)
      context.clearRect(100, 385, 100,110);
      context.drawImage(bg, 0, 0);
      context.drawImage(targetImg,target.xpos ,target.ypos,target.width,target.height);
      context.drawImage(hero1pos, 100, 390, 100,100);
      xbulletPos = 155
      ybulletPos = 430
    }
  }, 5)
}
