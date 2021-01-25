// Physics Engine
// Matter engine, Matter bodies, Matter world

// Namespacing - nicknameing

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine1, world, ground, box;

function setup() {
  createCanvas(1200, 1000)

  engine1 = Engine.create(); // Matter.Engine.create();
  world = engine1.world;

  // JSON Format  - Javscript object notation


   var test_array = ["Hi",23,34,56,78999];
   var test_Array = {"mito" : "A","chondria" : "D"};
   
  var options = { isStatic: true};

  ground = Bodies.rectangle(400, 390, 800, 20, options);
  World.add(world, ground);

  var box_options = {
    restitution : 2.0
  }

  box = Bodies.rectangle(200,100,50,50,box_options);
  World.add(world,box);

  console.log(ground);
}

function draw() {
  background(0);
  Engine.update(engine1);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20);
  rectMode(CENTER);
  rect(box.position.x,box.position.y,50,50);
}
