const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies= Matter.Bodies;

var engine,world
function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }
  ground= Bodies.rectangle(200,390,200,20,ground_options)
  World.add(world,ground)


  var ball_options ={
    restitution: 3.0
}
  ball = Bodies.circle(100, 300, 35,ball_options);
  World.add(world,ball);
}

function draw() {
  background("black");
  Engine.update(engine)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 35, 35);
  
  drawSprites();
}