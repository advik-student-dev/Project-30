const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand2;
//var hexagonObject;
var slingShot;
var polygonObject;

//stand1 blocks
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15;

//stand2 blocks
var block16, block17, block18, block19, block20, block21, block22, block23, block24, block25, block26, block27, block28, block29, block30;

function preload() {
  polygon = loadImage("hexagon.jpg");
}

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  stand1 = new standClass(600, 450, 250, 20);
  stand2 = new standClass(1000, 350, 250, 20);
  polygonObject = Bodies.circle(200, 305, 23);
  World.add(world, polygonObject);
  slingShot = new slingshotClass(this.polygonObject, { x: 200, y: 300 });

  block1 = new boxClass(500, 415, 50, 50);
  block2 = new boxClass(550, 415, 50, 50);
  block3 = new boxClass(600, 415, 50, 50);
  block4 = new boxClass(650, 415, 50, 50);
  block5 = new boxClass(700, 415, 50, 50);

  block6 = new boxClass(525, 364, 50, 50);
  block7 = new boxClass(575, 364, 50, 50);
  block8 = new boxClass(625, 364, 50, 50);
  block9 = new boxClass(675, 364, 50, 50);

  block10 = new boxClass(550, 313, 50, 50);
  block11 = new boxClass(600, 313, 50, 50);
  block12 = new boxClass(650, 313, 50, 50);

  block13 = new boxClass(575, 262, 50, 50);
  block14 = new boxClass(625, 262, 50, 50);

  block15 = new boxClass(600, 211, 50, 50);

  //stand2 blocks
  block16 = new boxClass(900, 325, 50, 50);
  block17 = new boxClass(950, 325, 50, 50);
  block18 = new boxClass(1000, 325, 50, 50);
  block19 = new boxClass(1050, 325, 50, 50);
  block20 = new boxClass(1100, 325, 50, 50);

  block21 = new boxClass(925, 274, 50, 50);
  block22 = new boxClass(975, 274, 50, 50);
  block23 = new boxClass(1025, 274, 50, 50);
  block24 = new boxClass(1075, 274, 50, 50);

  block25 = new boxClass(950, 223, 50, 50);
  block26 = new boxClass(1000, 223, 50, 50);
  block27 = new boxClass(1050, 223, 50, 50);

  block28 = new boxClass(975, 172, 50, 50);
  block29 = new boxClass(1025, 172, 50, 50);

  block30 = new boxClass(1000, 121, 50, 50);



  Engine.run(engine);
}

function draw() {
  background(100, 200, 300);
  Engine.update(engine);
  stand1.display();
  stand2.display();
  slingShot.display();
  //groundforProject.display();

  //stand1 blocks
  //layer1
  fill("black");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  //layer2
  fill("pink");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  //layer3  
  fill("green");
  block10.display();
  block11.display();
  block12.display();

  //layer4
  fill("red");
  block13.display();
  block14.display();

  //top
  fill("grey");
  block15.display();


  //stand2 blocks
  //layer1
  fill("red");
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();

  //layer2
  fill("green");
  block21.display();
  block22.display();
  block23.display();
  block24.display();

  //layer3
  fill("grey");
  block25.display();
  block26.display();
  block27.display();

  //layer4
  fill("pink");
  block28.display();
  block29.display();

  //top
  fill("black");
  block30.display();

  imageMode(CENTER);
  image(polygon, polygonObject.position.x, polygonObject.position.y, 40, 40);
}

function mouseDragged() {
  Matter.Body.setPosition(this.polygonObject, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  slingShot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    slingShot.attach(this.polygonObject);
  }
}
