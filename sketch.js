var c,w;
var sp,wg,th;
function setup() {
  createCanvas(1600,400);
  sp=random(55,90);
  wg=random(30,52);
  th=random(22,83);
  w = createSprite(1500, 200,th, 200);
 c = createSprite(1400,200,30,20);
 c.velocityX = sp;
  
 

 

}
 
//c.x = mouseX;
//c.y = mouseY;



function draw() {
  background(0);  
  if(w.x - c.x < (c.width + w.width)/2){
    c.velocityX = 0;
  var dft =0.5 * sp * wg * sp/25509;
if(dft > 180){
  w.shapeColor=color(255,0,0);
}
  
if(dft < 180){
  w.shapeColor=color(0,255,0);
}
}
drawSprites();
}
