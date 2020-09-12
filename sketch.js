var background0
var bow
var score= 0


function preload(){
background0Image = loadImage("background0.png")
blueBalloonImage=loadImage("blue_balloon0.png") 
greenBalloonImage=loadImage("green_balloon0.png") 
pinkBalloonImage=loadImage("pink_balloon0.png") 
redBalloonImage=loadImage("red_balloon0.png") 
bowImage=loadImage("bow0.png")  
arrowImage=loadImage("arrow0.png")
}

function setup() {
  createCanvas(600, 390);

background0=createSprite(200,0,20,20);
background0.addImage("background",background0Image);  
background0.scale=2 


bow=createSprite(580,200,20,20) 
bow.addImage("bow",bowImage)

redB = new Group();
blueB = new Group();
greenB = new Group();
pinkB = new Group();
arrowGroup = new Group();

}

function draw() {

if (arrowGroup.isTouching(redB)){
redB.destroyEach();
arrowGroup.destroyEach();
score=score+2
}
if (arrowGroup.isTouching(blueB)){
blueB.destroyEach();
arrowGroup.destroyEach();
score=score+3
}
if (arrowGroup.isTouching(greenB)){
greenB.destroyEach();
arrowGroup.destroyEach();
score=score+2
}
if (arrowGroup.isTouching(pinkB)){
pinkB.destroyEach();
arrowGroup.destroyEach();
score=score+1
}
drawSprites()     
bow.y=mouseY
if (keyWentDown("space")){
createArrow();
}
spawnBalloons(); 
text("Score :"+ score,270,30);

if (arrowGroup.isTouching(redB)){
redB.destroyEach();
arrowGroup.destroyEach();
score=score+1
}

}
function createArrow() {
arrow=createSprite(500,200,20,20) 
arrow.addImage("arrow",arrowImage) 
arrow.scale=0.4
arrow.visible=false
arrow.x=bow.x
arrow.y=bow.y
arrow.visible=true
arrow.velocityX=-16 
arrowGroup.add(arrow);
}

function redBalloon() {
var red = createSprite(0,Math.round(random(20,370)),10,10);
red.addImage(redBalloonImage);
red.velocityX=3;
red.lifetime=150;
red.scale=0.1;
redB.add(red); 

 } 

function blueBalloon() {
var blue = createSprite(0,Math.round(random(20,370)),10,10);
blue.addImage(blueBalloonImage);
blue.velocityX=6;
blue.lifetime=150;
blue.scale=0.1;
blueB.add(blue);
 } 

function greenBalloon() {
var green =createSprite(0,Math.round(random(20,370)),10,10);
green.addImage(greenBalloonImage);
green.velocityX=3;
green.velocityY=(random(-3,3));
green.lifetime=150;
green.scale=0.09;
greenB.add(green);
 } 

function pinkBalloon() {
var pink = createSprite(0,Math.round(random(20,370)),10,10);
pink.addImage(pinkBalloonImage);
pink.velocityX=3; 
pink.lifetime=150;
pink.scale=(random(0.5,2));
pinkB.add(pink);
 } 

function spawnBalloons(){
var select_balloon=Math.round(random(1,4)); 
console.log(select_balloon)
if (World.frameCount % 80 == 0) {
 if(select_balloon == 1){
 redBalloon();
 } else if (select_balloon == 2){
 blueBalloon();
 } else if (select_balloon == 3){
 greenBalloon();
 } else{
 pinkBalloon();
 } 
  }
   }  