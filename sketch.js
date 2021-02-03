
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime =0;
var score =0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(340,340)
  monkey = createSprite(75, 275, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1
  ground = createSprite(200, 325, 800, 30);
  ground.velocityX= -3
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  

  
}


function draw() {
background("black")
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  if(bananaGroup.isTouching(monkey)){
    score = score +1
  }
  stroke("white")
  textSize(20)
  fill("white")
  text("Score: "+ score, 210, 50)
  
  stroke("black")
  textSize(20)
  fill("red")
  survivalTime = Math.ceil(frameCount/ frameRate())
  text("Survival Time: "+ survivalTime, 10, 50)
  monkey.velocityY = monkey.velocityY 
  monkey.collide(ground)
  SpawnBanana();
  SpawnOb();
  drawSprites();
}
function SpawnBanana(){
   if(frameCount % 80 === 0) {
    var banana = createSprite(600,165,10,40);
     banana.addImage("banana", bananaImage)
     banana.velocityX = -2;
     banana.y = Math.round(random(120,200));
     banana.scale = 0.1
     banana.lifetime = 400
     bananaGroup.add(banana);
   }
}

 function SpawnOb(){
 if(frameCount % 300 === 0) {
    var obstacle = createSprite(600,165,10,40);
     obstacle .addImage("obstace",obstaceImage )
     obstacle.velocityX = -2;
     obstacle.y = Math.round(random(120,200));
     obstacle.lifetime = 300
     obstacle.scale = 0.1
     obstacleGroup.add(obstacle);
   }   
 }
    
 







