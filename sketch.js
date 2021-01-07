
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80, 315, 10, 10);
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.1;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  ground = createSprite(400, 350, 900, 10);

}


function draw() {
  background("white")
  
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  if(keyDown("space")){
    monkey.velocityY = -13;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  stroke("black");
  textSize(20);
  fill("black");
  
  stroke("white");
  textSize(20);
  stroke("white");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time:" + survivalTime, 100, 50);
  
  food();
  obstacles();
  
  drawSprites();
  
}

function food(){
  if (frameCount % 80 === 0){
    var banana = createSprite(350, 160, 10, 10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.velocityX = -6;
    banana.lifetime = 100;
    banana.scale = 0.1;
    
    foodGroup.add(banana);
  }
}

function obstacles(){
  if (frameCount % 300 === 0){
    var obstacle = createSprite(320, 310, 10, 10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.lifetime = 100;
    obstacle.scale = 0.2;
    
    obstacleGroup.add(obstacle);
  }
}





