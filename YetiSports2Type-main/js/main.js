const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

//загрузка картиночек
var bg = new Image();
var hero1pos = new Image();
var hero2pos = new Image();
var ball = new Image();
var target = new Image();
var hero = new Image();
var herobg1 = new Image();
var herobg2 = new Image();
var bullet = new Image();

var xbulletPos = 155;
var ybulletPos = 430;


bg.src = "img/bg.jpg";
target.src = "img/target.png";
hero1pos.src = "img/hero1pos.png";
hero2pos.src = "img/hero2pos.png";
herobg1.src = "img/herobg1.png";
herobg2.src = "img/herobg2.png";
bullet.src = "img/bullet.png"

//рисование объектов
function draw() {
  context.drawImage(bg, 0, 0);
  context.drawImage(target,700 ,260,150,230);
  //context.drawImage(herobg1, 100, 385, 100,110);
}

target.onload = draw;


//функция смены анимации персонажа

document.addEventListener('keydown', shot);


function shot(){
  context.clearRect(100, 385, 100,110);
  context.drawImage(bg, 0, 0);
  context.drawImage(target,700 ,260,150,230);
  context.drawImage(hero2pos, 100, 390, 100,100);
  for (xbulletPos = 155; xbulletPos < 300; xbulletPos +=5 ) {
    context.drawImage(bullet, xbulletPos, ybulletPos, 20, 20);
    xbulletPos +=5;

  }

}
document.addEventListener('keyup', backStance)
function backStance(){
  context.clearRect(100, 385, 100,110);
  context.drawImage(bg, 0, 0);
  context.drawImage(target,700 ,260,150,230);
  context.drawImage(hero1pos, 100, 385, 100,110);
}

