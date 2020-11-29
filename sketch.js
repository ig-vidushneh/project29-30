const Bodies=Matter.Bodies
const Engine=Matter.Engine
const World=Matter.World
const Constraint=Matter.Constraint
var engine,world
function setup() {
  createCanvas(800,800);
  stroke(255)
  engine=Engine.create()
  world=engine.world
  ground1=new Ground(300,780,1000,50);
  ground2=new Ground(600,450,200,10);
  box1=new Box(600,400,30,30);
  box2=new Box(570,400,30,30);
  box3=new Box(630,400,30,30);
  box4=new Box(660,400,30,30);
  box5=new Box(600,370,30,30);
  box6=new Box(570,370,30,30);
  box7=new Box(660,370,30,30);
stone=new Stone(100,400,30,30);
sling=new Slingshot(stone.body,{x:100,y:400})
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  Engine.update(engine)
 ground1.display();
 ground2.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
stone.display();
sling.display();


  
 
}
function mouseDragged()
{
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
  sling.fly()
}
