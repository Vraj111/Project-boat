var boat, boat_sailing, edges;
var groundImage;
var ground;
function preload(){
  boat_sailing = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  groundImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
 
  ground = createSprite(200,100,150,400);
  boat = createSprite(100,100);
  boat.addAnimation("sailing", boat_sailing);
  edges = createEdgeSprites();



  boat.scale = 0.3
  boat.x = 50
  
  
  
  
  
  ground.addImage(groundImage);

  
}

function draw() {
  background("blue");
 ground.velocityX = -3
 
 if(ground.x<0){
   ground.x = ground.width/2;
 }

 drawSprites();
}