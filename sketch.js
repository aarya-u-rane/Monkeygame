
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(500,450);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(1,350,9000,30);
  
  score = 0;
  
  
}


function draw() {
  
  background("white");
  
  stroke("black");
  fill("black");
  textSize(25);
  score = score + Math.round(getFrameRate()/42);
  text("Survival Time : "+ score , 170, 50);
  
  
  monkey.collide(ground);
  
  if (keyDown("space")&& monkey.y>= 235)
    {
      monkey.velocityY = -15;
    }
  
  monkey.velocityY = monkey.velocityY + 0.89;
  
  
  spawnBanana();
  spawnObstacles();
  
  
   drawSprites();
}

function spawnBanana()
{
  if(frameCount % 60 === 0)
    {
      var banana = createSprite(550,00,20,20);
      banana.addImage(bananaImage);
      banana.scale = 0.1;
      banana.y = Math.round(random(70,200));
      banana.velocityX = -(10 + 2* score/25);
      banana.lifetime = 200;
      
    }
}

function spawnObstacles()
{
  if (frameCount % 50 ===0)
    {
      var obstacle = createSprite(550,310,25,25);
      obstacle.addImage(obstaceImage);
      obstacle.scale = 0.15;
      obstacle.velocityX = -(10 + 2* score/25);
      obstacle.lifetime = 200;
      obstacle.depth = monkey.depth -1;
      
    }
}






