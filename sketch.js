
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofobject=new Roof(400,200,600,20);

bobDiameter=40;

startbobPositionX=width/2;
startbobPositionY=height/4+500;

bob1=new Bob(startbobPositionX-bobDiameter*2,startbobPositionY,bobDiameter);
bob2=new Bob(startbobPositionX-bobDiameter,startbobPositionY,bobDiameter);
bob3=new Bob(startbobPositionX,startbobPositionY,bobDiameter);
bob4=new Bob(startbobPositionX+bobDiameter,startbobPositionY,bobDiameter);
bob5=new Bob(startbobPositionX+bobDiameter*2,startbobPositionY,bobDiameter);

rope1=new CR(bob1.body,roofobject.body,-bobDiameter*5,0);
rope2=new CR(bob2.body,roofobject.body,-bobDiameter*4,0);
rope3=new CR(bob3.body,roofobject.body,-bobDiameter*3,0);
rope4=new CR(bob4.body,roofobject.body,-bobDiameter*2,0);
rope5=new CR(bob5.body,roofobject.body,-bobDiameter*1,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(25);
  bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

roofobject.display();
 
  
  
  drawSprites();
 
}

function KeyPressed(space){

	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
	
	}

