var movingRect, fixedRect;



function setup() {
  createCanvas(1200,800);

  movingRect=createSprite(400,400,80,30);
  movingRect.shapeColor="green";
  movingRect.debug = true;

  fixedRect=createSprite(600,400,50,80);
  fixedRect.shapeColor="green";
  fixedRect.debug = true;
  
}

function draw() {
  background("black");  
 
  movingRect.x=mouseX;
  movingRect.y=mouseY;
// sindu mam law _collision algorithm states that the distance bw two objects is equal to
// sum of their half of their width or height.
// MR_FR - LEFT , FR_MR -RIGHT distance reduces.
  if(movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y <= fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y<= fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  console.log(fixedRect.x-movingRect.x);

  drawSprites();
}