const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const bgImg = new Image();
bgImg.src = "img/bg.png";
bgImg.onload = () => {
  context.drawImage(bgImg, 0, 0)
}

var heroImg = new  Image();
heroImg.src = "img/hero.png";
heroImg.onload = () => {
    context.drawImage(heroImg, 0, 0);
}

