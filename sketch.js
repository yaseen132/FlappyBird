

var spaceShip;
var bg;
var asteroid;
var asteroidImage;
var asteroidsGroup;
var levelwall
var border2
var border3
var Gamestate=1


//var gameState="play"
var score=0;
var invisibleWall;
//sajnazy@gmail.com



function preload(){
spaceshipImage=loadImage("hero.png")
bg=loadImage("bg.jpg");
asteroidImage=loadImage("asteroid.png")
StartButtonimage=loadImage("startbutton.jpg")
restartButton=loadImage("failed.png")
bg1=loadImage("background.png")

//asteroid2Image=loadImage("hero2.png")
//bg2=loadImage("bg2.jpg");
//spaceship2Image=loadImage("warrior2.png")
}


function setup(){
createCanvas(displayWidth,displayHeight);


spaceShip=createSprite(50,200,20,20);
spaceShip.addImage(spaceshipImage)
spaceShip.scale=0.3
spaceShip.debug=false

invisibleWall=createSprite(20,400,20,800)
invisibleWall.visible=false

border2=createSprite(750,5,1500,20)
border2.visible=false

border3=createSprite(50,765,2800,20)
border3.visible=false

StartButton=createSprite(displayWidth/2,displayHeight/2)
StartButton.addImage(StartButtonimage)
StartButton.scale=0.5

retryButton=createSprite(displayWidth/2,displayHeight/2)
retryButton.addImage(restartButton)
retryButton.scale=2

asteroidsGroup=createGroup()

}
function draw(){

if(Gamestate===1){
  background(bg1)
  spaceShip.visible=false
  retryButton.visible=false
  StartButton.visible=true
 
  if(mousePressedOver(StartButton)){
    Gamestate=2
  }
}

if(Gamestate===2){
  background(bg)
  spaceShip.visible=true
  retryButton.visible=false
  StartButton.visible=false
  if(frameCount<4000){
    level1()
    }
    else{
      level2()
    }
    textSize(45)
text(score,650,45)
if(asteroidsGroup.isTouching(spaceShip)||spaceShip.y>displayHeight||spaceShip.y<0){
  Gamestate=3
 }
}


if(Gamestate===3){
  background(0)
  retryButton.visible=true
  StartButton.visible=false
  asteroidsGroup.destroyEach()
  spaceShip.visible=false
  if(mousePressedOver(retryButton)){
    Gamestate=1
  }
}





















drawSprites();

}
function goup(){
spaceShip.velocityY=spaceShip.velocityY-3

}







function level1(){
if(keyDown(UP_ARROW)||touches.length>0){
  spaceShip.velocityY=-4
  touches=[]
  
}
spaceShip.velocityY=spaceShip.velocityY+0.5

 
if(asteroidsGroup.isTouching(invisibleWall)){
  score=score+1;
}
if(score>50){
asteroidsGroup.setVelocityXEach(-(3+score/50))
}
if(frameCount%4000===0){
var levelwall=createSprite(950,150,5,300)
levelwall.velocityX=-3
//console.log("hi")
}
//if(spaceShip.isTouching(levelwall)){

//}
//}















if(frameCount%60===0){




    var asteroid=createSprite(1800,200,20,20)
    asteroid.addImage(asteroidImage) 
    asteroid.scale=0.3
    asteroid.velocityX=-3
    asteroid.debug=false
    asteroid.lifetime=1000
    asteroid.y=Math.round(random(40,1000))
  //  asteroid.y=Math.round(random(150,300))
    asteroidsGroup.add(asteroid)
    
    asteroid.setCollider("circle",0,0,160)
    
    
   

}
}































