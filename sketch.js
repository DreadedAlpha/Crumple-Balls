
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,groundobj,leftSide,rightSide;
var radius=40;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball=Bodies.circle(260,100,radius/2,{
		isStatic:false,
		restition:0.3,
		friction:0,
		density:1.2
	})
	World.add(world,ball)
groundobj=new Ground(width/2,670,width,20)

leftSide=new Ground(1100,600,20,120)
rightSide=new Ground(1300,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("blue")
  ellipse(ball.position.x,ball.position.y,radius)
groundobj.display()
fill("blue")
leftSide.display()
rightSide.display()
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{
			x:85,
			y:-85
		})
	}
}