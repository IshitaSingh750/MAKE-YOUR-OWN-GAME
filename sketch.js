var flybot, flybotIMG;

var alien, alienIMG;
var alien2, alien2IMG;
var alien3, alien3IMG;
var alien4, alien4IMG;
var alien5, alien5IMG;
var lost, lostIMG

var bullets,bulletIMG;

var score = 0;

var gameState = "PLAY";

var bulletSound , alienSound;

var spaceBackground, spaceBackgroundIMG;


function preload()
{
	flybotIMG = loadImage("helicopter.png");
	alienIMG = loadImage("alien.png");
	alien2IMG = loadImage("alien2.png");
	alien3IMG = loadImage("alien3.png");
	alien4IMG = loadImage("alien4.png");
	alien5IMG = loadImage("alien5.png");
	lostIMG = loadImage("lost.png");
	bulletIMG = loadImage("bullet.png");
	spaceBackgroundIMG = loadImage("background.png");
	bulletSound = loadSound("GunShot.mp3");
	alienSound = loadSound("alien.mp3");
}

function setup() {
	createCanvas(1450, 790);

	spaceBackground = createSprite(1450/2, 790/2);
	spaceBackground.addImage(spaceBackgroundIMG);
	spaceBackground.scale = 4;
	spaceBackground.velocityY = 10;

	flybot = createSprite(800,700,40,40);
	flybot.addImage(flybotIMG);
	flybot.scale = 2;

	bullets = createSprite(0.0,5,10);
	bullets.shapeColor = "black";
	bullets.addImage(bulletIMG);

	alien = createSprite(displayWidth/2,-40,-20,20);
	alien.shapeColor = "yellow";
	alien.addImage(alienIMG);
	alien.scale = 0.1;

	alien2 = createSprite(displayWidth/3.5,-40,20,20);
	alien2.shapeColor = "yellow";
	alien2.addImage(alien2IMG);
	alien2.scale = 0.6;

	alien3 = createSprite(displayWidth*0.7,-40,20,20);
	alien3.shapeColor = "yellow";
	alien3.addImage(alien3IMG);
	alien3.scale = 0.6;

	alien4 = createSprite(displayWidth/8,-40,20,20);
	alien4.shapeColor = "yellow";
	alien4.addImage(alien4IMG);
	alien4.scale = 0.6;

	alien5 = createSprite(displayWidth*0.85,-40,20,20);
	alien5.shapeColor = "yellow";
	alien5.addImage(alien5IMG);
	alien5.scale = 0.6;

	lost = createSprite(670,300,40,40);
	lost.addImage(lostIMG);
	lost.scale = 3;
	lost.visible = false;
}


function draw() {
  

if(gameState === "PLAY"){

  background("black");

  if(spaceBackground.y>700){
	  spaceBackground.y = 0; 
  }


if(keyWentDown(RIGHT_ARROW)){
	flybot.velocityX = 10;
	flybot.velocityY = 0;
}

if(keyWentDown(LEFT_ARROW)){
	flybot.velocityX = -10;
	flybot.velocityY = 0;
}

if(keyWentDown("space")){
	bulletSound.play();
	spawnBullets();
}



if(frameCount === 100){
	alien.velocityY = random(2,5);
	alienSound.play();
}

if(frameCount === 200){
	alien2.velocityY = random(3,6);
	alienSound.play();
}

if(frameCount === 300){
	alien3.velocityY = random(1,4);
	alienSound.play();
}

if(frameCount === 400){
	alien4.velocityY = random(4,7);
	alienSound.play();
}

if(frameCount === 500){
	alien5.velocityY = random(5,8);
	alienSound.play();
}




if(alien.isTouching(flybot)){
	alien.y = 0;
	score = score-10;
}

if(alien2.isTouching(flybot)){
	alien2.y = 0;
	score = score-10;
}

if(alien3.isTouching(flybot)){
	alien3.y = 0;
	score = score-10;
}

if(alien4.isTouching(flybot)){
	alien4.y = 0;
	score = score-10;
}

if(alien4.isTouching(flybot)){
	alien4.y = 0;
	score = score-10;
}

if(alien5.isTouching(flybot)){
	alien5.y = 0;
	score = score-10;
}



if(bullets.isTouching(alien)){
	alien.y = 0;
	score = score+10;
}

if(bullets.isTouching(alien2)){
	alien2.y = 0;
	score = score+10;
}

if(bullets.isTouching(alien3)){
	alien3.y = 0;
	score = score+10;
}

if(bullets.isTouching(alien4)){
	alien4.y = 0;
	score = score+10;
}

if(bullets.isTouching(alien5)){
	alien5.y = 0;
	score = score+10;
}




if(alien.y>=displayHeight){
	alien.y = 0;
	score = score-10;
}

if(alien2.y>=displayHeight){
	alien2.y = 0;
	score = score-10;
}

if(alien3.y>=displayHeight){
	alien3.y = 0;
	score = score-10;
}

if(alien4.y>=displayHeight){
	alien4.y = 0;
	score = score-10;
}

if(alien5.y>=displayHeight){
	alien5.y = 0;
	score = score-10;
}

if(score < 0){
	gameState = "END";
}

if(gameState === "END" && score <= 0){

	lost.visible = true;

	flybot.velocityX = 0;

	alien.y = -40;
	alien2.y = -40;
	alien3.y = -40;
	alien4.y = -40;
	alien5.y = -40;

	
	alien.velocityY = 0;
	alien2.velocityY = 0;
	alien3.velocityY = 0;
	alien4.velocityY = 0;
	alien5.velocityY = 0;

	bullets.velocityY = 0;
}
}

drawSprites();


fill("red");
textSize(20);
text("Score : "+score, 200,100);

 
}

function spawnBullets(){

    bullets = createSprite(200.200,5,10);
    bullets.shapeColor = "yellow";
	bullets.addImage(bulletIMG);

    bullets.scale = 0.5;
    bullets.velocityY = -100;
	bullets.x = flybot.x;
	bullets.y = flybot.y;
    bullets.depth = flybot.depth;
    flybot.depth = flybot.depth+1; 
}


