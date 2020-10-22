const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2,box3;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options={
        restitution: 0.8
    }

    ball = Bodies.circle(200,100,20,ball_options);
    box1 = createSprite(200,370,200,20);
    box1.shapeColor = "red";
    box2 = createSprite(110,270,20,200);
    box2.shapeColor = "red";
    box3 = createSprite(290,270,20,200);
    box3.shapeColor = "red";
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
    
    drawSprites();
}