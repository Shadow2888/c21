var b,a;
var s ,w ,t ;
function setup() {
  createCanvas(1600,400);
  b = createSprite(50, 200, 40, 20);
  a = createSprite(1500, 200, t, 200);


}

function draw() {
  background("black");  
  s = random(223,321);
 w = random(30,52);
 t = random(22,83);
  b.velocityX = s ;
  
 
  
  
  drawSprites();
}