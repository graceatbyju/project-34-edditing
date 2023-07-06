const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var appleImg;
var apple;
var field;
var bar;
var ground;

var score;

var appleGroup;
var appleStartPos;
var appleFall;
let timer = 10;

function preload(){
  appleImg = loadImage("apple.png");
  field = loadImage("field.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(field,0,0,displayWidth+80,displayHeight);

  bar = createSprite(20, 150, windowWidth+1500, 20)
  ground = createSprite(20, 550, windowWidth+1500, 10)

  appleGroup=new Group()
  
 // textSize(30);
 // stroke(3);
 // fill("black");
 // text("Congragulations!! You win the game!! "
    

  engine = Engine.create();
  world = engine.world;
 
  //appleGroup.stop(10)
  //appleGroup.setLifetimeEach(1);

  
  
}

function draw() 
{
  background(field);
  Engine.update(engine);
  textAlign(CENTER, CENTER);
  textSize(100);
  if(frameCount % 60 === 0  && timer > 0) {
    spawnApples();
    timer--;
    text(timer, windowWidth/2, windowHeight*0.7);
  }
  if (timer === 0) {
    text("GAME OVER", windowWidth/2, windowHeight*0.7);
    appleGroup.destroyEach()
    appleGroup.setLifetimeEach(1);
  }
  if(appleGroup.mouseClicked()){
    fall();
  }

 // if(spawnApples()===true){
 //   fall()
 // }

  //if(appleGroup=isTouching(ground)){
  //  
  //}

  
  drawSprites();

}

function spawnApples(){
  appleStartPos=20;

  
  for(i=1; i<=20; i++)
  {
    apple = createSprite(appleStartPos, 150)
    apple.addImage(appleImg)
    apple.scale=0.09
    apple.velocityX = -10;
   
    appleGroup.add(apple)
    appleStartPos=appleStartPos+100
  }
  
}
function fall(){
  appleGroup.velocityY=10;
}