var fixedrect, movingrect,ball;

function setup() {
  createCanvas(1200,800);
  movingrect = createSprite(400, 100, 50, 80);
  movingrect.shapeColor = "green";
  
  fixedrect= createSprite(500,200,80,30);
  fixedrect.shapeColor = "blue";
  
  ball=createSprite(400,300,40,40);
  ball.shapeColor="green"
  
  movingrect.velocityY = 5;
  ball.velocityY=-5;
}

function draw() {
  background(0,0,0);  
bounceoff(movingrect,ball);
  
  drawSprites();
}


