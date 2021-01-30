
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);

	hammer = new Hammer(500,60,300, PI/2);
	stone = new Stone(400,60,300, PI/2);
	rubber = new Rubber(300,60,300, PI/2);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  fill("red");
  hammer.display();
  fill("Grey");
  stone.display();
  fill("White");
  rubber.display();

  drawSprites();
 
}



