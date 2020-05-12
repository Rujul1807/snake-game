//Engine = Matter.Engine;
//World = Matter.World;
//Bodies = Matter.Bodies;
let resolution = 10;
var snake;
var food;
var w, h;

function setup() {
  createCanvas(400, 400);
  w = floor(width);
  h = floor(height);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}


// var bar=createSprite(200,100,20,10);




function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.xdir = -1;
    snake.ydir = 0;
  } else if (keyCode === RIGHT_ARROW) {
    snake.xdir = 1;
    snake.ydir = 0;
  } else if (keyCode === DOWN_ARROW) {
    snake.xdir = 0;
    snake.ydir = 1;
  } else if (keyCode === UP_ARROW) {
    snake.xdir = 0;
    snake.ydir = -1;
  }
}

function draw() {
  background(220);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();
  if(snake.endGame()){
    text("YOU LOSE",200,200)
    fill(255,0,0);
    noLoop();
  }


  fill(255, 0, 0);
  noStroke();
  rect(food.x, food.y, 20, 20);

  // drawSprites();

}
