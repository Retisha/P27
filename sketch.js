
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	x = 800;
	y = 500;
	d = 40;

	roof = new Roof(x,200,200,20)
	ball1 = new Ball(720,y,20)
	ball2 = new Ball(760,y,20)
	ball3 = new Ball(800,y,20)
	ball4 = new Ball(840,y,20)
	ball5 = new Ball(880,y,20)

	rope1 = new Rope(ball1.body,roof.body,-2*d,0)
	rope2 = new Rope(ball2.body,roof.body,-d,0)
	rope3 = new Rope(ball3.body,roof.body,0,0)
	rope4 = new Rope(ball4.body,roof.body,d,0)
	rope5 = new Rope(ball5.body,roof.body,2*d,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



