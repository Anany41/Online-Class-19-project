var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  doorsGroup= new Group()
  climbersGroup= new Group()
  invisibleBlockGroup= new Group()
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost=createSprite(200,200,50,50)
  ghost.scale=0.3
  ghost.addImage(ghostImg)
}

function draw() {
  background(200);
  if(gameState==="Play"){

      
  
  
  if(tower.y > 400){
      tower.y = 300
    }
    if(keyDown("left")){
      ghost.x=ghost.x-3
      }
      if(keyDown("right")){
        ghost.x=ghost.x+3
        }
        if(keyDown("space")){
          ghost.velocityY=-10
          }
          ghost.velocityY=ghost.velocityY+0.8
          spawnDoors()
          if(climbersGroup.isTouching(ghost)){
            ghost.velocityY=0
          }
          if(invisibleBlockGroup.isTouching(ghost)||ghost.y>600){
            ghost.destroy()
            gameState="end"
          }
          
          drawSprites()
        }
        else if(gameState==="end"){
          fill ("yellow")
          textSize(30)
          text("GameOver",230,250)
        }
}

function spawnDoors(){
  if(frameCount%200===0){
    door=createSprite(200,-50)
    climber=createSprite(200,10)
    invisibleBlock=createSprite(200,15)
    invisibleBlock.width=climber.width
    invisibleBlock.height=2

    door.addImg(doorImg)
    climber.addimg(climberImg)
    door.x=random(120,400)
    climber.x=door.x
    invisibleBlock.x=door.x

    door.velocityY=1
    climber.velocityY=1
    invisibleBlock.velocityY=1

    door.lifeTime=800
    climber.lifeTime=800
    invisibleBlock.lifeTime=800

    doorsGroup.add(door)
    climbersGroup.add(climber)
    invisibleBlockGroup.add(invisibleBlock)

    ghost.depth=door.depth
    ghost.depth+=1

  }
}