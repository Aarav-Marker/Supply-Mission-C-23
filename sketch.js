var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

  function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	
	boxSprite = createSprite(490, 600,20,100);
    boxSprite.shapeColor = "green";
	isStatic=true
	
	boxSprite = createSprite(310, 600,20,100);
    boxSprite.shapeColor = "green";
	isStatic=true
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxSprite = createSprite(400, 660,200,20);
	boxSprite.shapeColor = "green";
	isStatic=true
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.3

	helicopterSprite=createSprite(width/2, 200, 200,200);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.9

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
	
  }
  


}
