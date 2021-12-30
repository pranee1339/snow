const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;



var b1,bg;
var boy,b2,invG, s1,sImg;
var engine, world;


function preload(){
  b1 =loadImage("snow1.jpg");
  b2= loadImage("boy.jpg");
  sImg=loadImage("snow4.webp");
  
}

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
  boy=createSprite(400, 200, 50, 50);
  boy.addImage(b2);
  boy.scale=0.2;
  
  invG=createSprite(300,500,400,10)
  s1 = new snw(200,-10,10,10);

}

function draw() {
  background(b1); 
  Engine.update(engine);
  if(keyDown("space")){
    boy.velocityY=-2;
  }
 
  boy.velocityY+=0.1;
  boy.collide(invG);
  s1.display();
  drawSprites();

}