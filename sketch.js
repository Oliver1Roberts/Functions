var fixed;
var moving;
var bounce1;
var bounce2;

function setup() {
  createCanvas(800,400);
  bounce1 = createSprite (300, 50, 30, 30);
  bounce2 = createSprite (300, 350, 30, 30);
  bounce1.velocityY=3;
  bounce2.velocityY=-3;
  fixed = createSprite (200, 200, 50, 50,);
  moving = createSprite (200, 400, 50, 50);
  fixed.shapeColor = "green";
  moving.shapeColor = "green";
  fixed.debug = true;
  moving.debug = true;
  
}

function draw() {
  background(255,255,255);  
  moving.x=mouseX;
  moving.y=mouseY;

  if(isTouching(moving,fixed)) {
   fixed.shapeColor="red";
   moving.shapeColor="red";
  }
  else{
  fixed.shapeColor = "green";
  moving.shapeColor = "green";
  }

  bounceOff (bounce1,bounce2);

  drawSprites();
}

