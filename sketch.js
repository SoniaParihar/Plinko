const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Events=Matter.Events;

var world,myengine;
var ground


function setup() {
  createCanvas(480,800);
  myengine=Engine.create();
  world=myengine.World;

  ground= new Ground(width/2,height,width,20);
  
}

function draw() {
  background(255,255,255); 
  ground.display() ;
  
}