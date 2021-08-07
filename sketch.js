const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var ground,pumpkin;

function setup(){
    canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    angleMode(RADIANS);

    ground = Bodies.rectangle(300, 590, 600, 20, ground_options);
    pumpkin = new Pumpkin(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    pumpkin.display();
}

