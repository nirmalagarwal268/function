var fixedRect, movingRect;

function setup() {
  createCanvas(800,800);
  fixedRect= createSprite(400, 200, 80, 50);
  movingRect=createSprite(200,200,50,30);
movingRect.velocityX=5
movingRect.velocityY=0.5
obj1 = createSprite(200,400,50,30);
obj4 = createSprite(200,600,50,30);
obj3 = createSprite(300,400,50,30);
obj2 = createSprite(300,600,50,30);

movingRect.shapeColor = "green";
fixedRect.shapeColor= "green";
}

function draw() {
  background(255,255,255); 
 // movingRect.x = mouseX;
  //movingRect.y=mouseY;
 
if(istouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
      fixedRect.shapeColor= "red";
}
if(istouching(movingRect,obj1)){
  movingRect.shapeColor = "red";
  obj1.shapeColor= "red";
}
  
if(istouching(movingRect,obj2)){
  movingRect.shapeColor = "red";
  obj2.shapeColor= "red";
}
if(istouching(movingRect,obj3)){
  movingRect.shapeColor = "red";
  obj3.shapeColor= "red";
}
if(istouching(movingRect,obj4)){
  movingRect.shapeColor = "red";
  obj4.shapeColor= "red";
}
  bounceoff(movingRect,fixedRect);
  drawSprites();
}
 function istouching(rect1,rect2){
  if(rect1.x-rect2.x<=rect1.width/2+rect2.width/2 &&
    rect2.x-rect1.x<=rect1.width/2+rect2.width/2 &&
    rect1.y-rect2.y<=rect1.height/2+rect2.height/2 &&
    rect2.y-rect1.y<=rect1.height/2+rect2.height/2){
      return true
  }
  else {
    return false
  }
}
function bounceoff(rect1,rect2){
  if(rect1.x-rect2.x<=rect1.width/2+rect2.width/2 &&
    rect2.x-rect1.x<=rect1.width/2+rect2.width/2 &&
    rect1.y-rect2.y<=rect1.height/2+rect2.height/2 &&
    rect2.y-rect1.y<=rect1.height/2+rect2.height/2){
      rect1.velocityX=rect1.velocityX*(-1)
      rect1.velocityY=rect1.velocityY*(-1)
  }
}