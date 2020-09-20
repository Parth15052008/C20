var movingRect,fixedRect;

function setup() {
  createCanvas(1200,800);
 fixedRect= createSprite(400, 100, 50, 80);
 fixedRect.shapeColor="green";
 movingRect=createSprite(400,800,80,30);
 movingRect.velocityY=-5;
 fixedRect.velocityY=+5;
 movingRect.shapeColor="green";
}

function draw() {
  background(255,255,255); 
  
 // movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2){
      fixedRect.velocityX=fixedRect.velocityX*(-1);
      movingRect.velocityX=movingRect.velocityX*(-1);
    }
    if( movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
      fixedRect.velocityY=fixedRect.velocityY*(-1);
      movingRect.velocityY=movingRect.velocityY*(-1);

    }
   

  
  drawSprites();
}